import { NextResponse } from "next/server";

const required = ["fullName", "mobile", "email", "profession", "course", "preferredTiming", "city"];

export async function POST(request: Request) {
  const body = await request.json();
  const missing = required.filter((field) => !body[field]);

  if (missing.length) {
    return NextResponse.json({ ok: false, message: `Missing fields: ${missing.join(", ")}` }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Enrollment saved. Connect MongoDB in production for persistence.",
    student: {
      id: crypto.randomUUID(),
      ...body,
      payment_status: "pending",
      joining_date: new Date().toISOString()
    }
  });
}
