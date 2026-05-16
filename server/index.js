require("dotenv").config();

const cors = require("cors");
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Razorpay = require("razorpay");
const {
  sendDemoConfirmation,
  sendEnrollmentConfirmation,
  sendPaymentReceipt
} = require("./notifications");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));
app.use(express.json());

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    profession: String,
    companyName: String,
    course: { type: String, required: true },
    preferredTiming: String,
    city: String,
    payment_status: { type: String, default: "pending" },
    joining_date: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const demoBookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    timing: String,
    preferredTiming: String
  },
  { timestamps: true }
);

const paymentSchema = new mongoose.Schema(
  {
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    amount: Number,
    transaction_id: String,
    payment_date: { type: Date, default: Date.now },
    status: { type: String, default: "created" }
  },
  { timestamps: true }
);

const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);
const DemoBooking = mongoose.models.DemoBooking || mongoose.model("DemoBooking", demoBookingSchema);
const Payment = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

async function connectDb() {
  if (!process.env.MONGODB_URI) {
    console.warn("MONGODB_URI missing. API will start, but database routes need MongoDB Atlas.");
    return;
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB connected");
}

function requireAdmin(request, response, next) {
  const token = request.headers.authorization?.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "local-secret");
    if (payload.role !== "admin") throw new Error("Not admin");
    next();
  } catch {
    response.status(401).json({ message: "Admin authentication required" });
  }
}

app.get("/health", (_request, response) => {
  response.json({ ok: true, service: "Speak-Up English API" });
});

app.post("/api/students", async (request, response) => {
  const { fullName, mobile, email, profession, companyName, course, preferredTiming, city } = request.body;

  if (!fullName || !mobile || !email || !course) {
    return response.status(400).json({ message: "Name, mobile, email, and course are required" });
  }

  const student = await Student.create({
    name: fullName,
    mobile,
    email,
    profession,
    companyName,
    course,
    preferredTiming,
    city
  });

  await sendEnrollmentConfirmation(student);

  response.status(201).json({
    message: "Student enrolled. Email confirmation sent when SMTP is configured.",
    student
  });
});

app.post("/api/demo-bookings", async (request, response) => {
  const { name, mobile, email, preferredTiming } = request.body;

  if (!name || !mobile || !email) {
    return response.status(400).json({ message: "Name, mobile, and email are required" });
  }

  const booking = await DemoBooking.create({ name, mobile, email, preferredTiming });

  await sendDemoConfirmation(booking);

  response.status(201).json({
    message: "Demo booked. Email confirmation sent when SMTP is configured.",
    booking
  });
});

app.post("/api/payments/create-order", async (request, response) => {
  const { amount, studentId } = request.body;

  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    return response.status(503).json({ message: "Razorpay credentials are not configured" });
  }

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
  });

  const order = await razorpay.orders.create({
    amount: Number(amount) * 100,
    currency: "INR",
    receipt: `speakup_${Date.now()}`
  });

  await Payment.create({
    student_id: studentId,
    amount,
    transaction_id: order.id,
    status: "created"
  });

  if (request.body.email) {
    await sendPaymentReceipt({ email: request.body.email, amount, transactionId: order.id });
  }

  response.json(order);
});

app.post("/api/auth/admin-login", (request, response) => {
  const { email, password } = request.body;
  const adminEmail = process.env.ADMIN_EMAIL || "admin@speakup.local";
  const adminPassword = process.env.ADMIN_PASSWORD || "change-me";

  if (email !== adminEmail || password !== adminPassword) {
    return response.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ role: "admin", email }, process.env.JWT_SECRET || "local-secret", { expiresIn: "8h" });
  response.json({ token });
});

app.get("/api/admin/students", requireAdmin, async (_request, response) => {
  const students = await Student.find().sort({ createdAt: -1 });
  response.json(students);
});

app.get("/api/admin/demo-bookings", requireAdmin, async (_request, response) => {
  const bookings = await DemoBooking.find().sort({ createdAt: -1 });
  response.json(bookings);
});

connectDb()
  .then(() => {
    app.listen(port, () => console.log(`Speak-Up English API running on port ${port}`));
  })
  .catch((error) => {
    console.error("Failed to start API", error);
    process.exit(1);
  });
