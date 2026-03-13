"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactResult =
  | { success: true }
  | { success: false; error: string };

export async function sendContactEmail(
  _prev: ContactResult | null,
  formData: FormData
): Promise<ContactResult> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "jorgebocobo9@gmail.com",
      subject: `Portfolio inquiry from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });
    return { success: true };
  } catch {
    return { success: false, error: "Failed to send. Please email me directly." };
  }
}
