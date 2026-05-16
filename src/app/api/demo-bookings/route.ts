import { NextResponse } from "next/server";

const required = ["name", "mobile", "email", "preferredTiming"];

export async function POST(request: Request) {
  const body = await request.json();
  const missing = required.filter((field) => !body[field]);

  if (missing.length) {
    return NextResponse.json({ ok: false, message: `Missing fields: ${missing.join(", ")}` }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Demo booking saved. WhatsApp and email integrations are ready to connect.",
    booking: {
      id: crypto.randomUUID(),
      ...body,
      createdAt: new Date().toISOString()
    }
  });
}
