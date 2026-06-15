import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  business: string;
  website: string;
  services: string;
  message: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  // TODO: wire up email delivery (e.g. Resend) once an API key is configured.
  console.log("New contact form submission:", body);

  return NextResponse.json({ ok: true });
}
