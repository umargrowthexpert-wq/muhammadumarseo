import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  business: string;
  website: string;
  services: string;
  message: string;
};

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "umar.growth.expert@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;
  const { name, email, business, website, services, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("New contact form submission (RESEND_API_KEY not set):", body);
    return NextResponse.json(
      { error: "Email delivery is not configured yet." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: `Portfolio Contact Form <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${name}${business ? ` (${business})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${business || "-"}`,
        `Website: ${website || "-"}`,
        `Services needed: ${services || "-"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
