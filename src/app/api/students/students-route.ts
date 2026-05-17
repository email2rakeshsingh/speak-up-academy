import { NextResponse } from "next/server";
import mongoose from "mongoose";

// ── MongoDB connection ──────────────────────────────────────────────────────
async function connectDb() {
  if (mongoose.connection.readyState >= 1) return; // already connected
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is not set");
  await mongoose.connect(process.env.MONGODB_URI);
}

// ── Student schema ──────────────────────────────────────────────────────────
const studentSchema = new mongoose.Schema(
  {
    name:            { type: String, required: true },
    mobile:          { type: String, required: true },
    email:           { type: String, required: true },
    profession:      String,
    companyName:     String,
    course:          { type: String, required: true },
    preferredTiming: String,
    city:            String,
    payment_status:  { type: String, default: "pending" },
    joining_date:    { type: Date,   default: Date.now },
  },
  { timestamps: true }
);

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

// ── Required fields ─────────────────────────────────────────────────────────
const required = ["fullName", "mobile", "email", "course"];

// ── POST /api/students ──────────────────────────────────────────────────────
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    const missing = required.filter((f) => !body[f]);
    if (missing.length) {
      return NextResponse.json(
        { ok: false, message: `Missing fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDb();

    // Save student to MongoDB
    const student = await Student.create({
      name:            body.fullName,
      mobile:          body.mobile,
      email:           body.email,
      profession:      body.profession || "",
      companyName:     body.companyName || body.company || "",
      course:          body.course,
      preferredTiming: body.preferredTiming || body.timing || "",
      city:            body.city || "",
    });

    console.log("✅ Student saved to MongoDB:", student._id);

    return NextResponse.json(
      {
        ok: true,
        message: "Enrollment submitted successfully!",
        student,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Student save error:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to save enrollment. Please try again." },
      { status: 500 }
    );
  }
}

// ── GET /api/students (admin use) ───────────────────────────────────────────
export async function GET() {
  try {
    await connectDb();
    const students = await Student.find().sort({ createdAt: -1 });
    return NextResponse.json({ ok: true, students });
  } catch (error) {
    console.error("❌ Fetch students error:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to fetch students." },
      { status: 500 }
    );
  }
}
