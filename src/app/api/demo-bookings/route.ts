import { NextResponse } from "next/server";
import mongoose from "mongoose";

// ── MongoDB connection ──────────────────────────────────────────────────────
async function connectDb() {
  if (mongoose.connection.readyState >= 1) return;
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is not set");
  await mongoose.connect(process.env.MONGODB_URI);
}

// ── Demo booking schema ─────────────────────────────────────────────────────
const demoBookingSchema = new mongoose.Schema(
  {
    name:            { type: String, required: true },
    mobile:          { type: String, required: true },
    email:           { type: String, required: true },
    preferredTiming: String,
  },
  { timestamps: true }
);

const DemoBooking =
  mongoose.models.DemoBooking ||
  mongoose.model("DemoBooking", demoBookingSchema);

// ── Required fields ─────────────────────────────────────────────────────────
const required = ["name", "mobile", "email"];

// ── POST /api/demo-bookings ─────────────────────────────────────────────────
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

    // Save demo booking to MongoDB
    const booking = await DemoBooking.create({
      name:            body.name,
      mobile:          body.mobile,
      email:           body.email,
      preferredTiming: body.preferredTiming || body.timing || "",
    });

    console.log("✅ Demo booking saved to MongoDB:", booking._id);

    return NextResponse.json(
      {
        ok: true,
        message: "Demo booked successfully!",
        booking,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Demo booking save error:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to save demo booking. Please try again." },
      { status: 500 }
    );
  }
}

// ── GET /api/demo-bookings (admin use) ──────────────────────────────────────
export async function GET() {
  try {
    await connectDb();
    const bookings = await DemoBooking.find().sort({ createdAt: -1 });
    return NextResponse.json({ ok: true, bookings });
  } catch (error) {
    console.error("❌ Fetch bookings error:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to fetch bookings." },
      { status: 500 }
    );
  }
}
