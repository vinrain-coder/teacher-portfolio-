"use server";

import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !subject || !message) {
      return { success: false, error: "All fields are required." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: "Please enter a valid email address." };
    }

    const contactFrom = process.env.CONTACT_FROM;
    const contactTo = process.env.CONTACT_TO;

    if (!contactFrom || !contactTo) {
      return { success: false, error: "Email configuration is missing." };
    }

    await getResend().emails.send({
      from: contactFrom,
      to: [contactTo],
      subject: `Portfolio Contact: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Inter', sans-serif; background-color: #f8fafc; color: #134e4a; padding: 40px; border-radius: 12px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d9488; font-size: 24px; margin-bottom: 8px;">New Contact Form Submission</h2>
          <p style="color: #5f8b8b; font-size: 14px; margin-bottom: 24px;">You received a new message from your portfolio.</p>
          <div style="background-color: #ffffff; border: 1px solid #ccfbf1; border-radius: 8px; padding: 24px; margin-bottom: 16px;">
            <p style="margin: 0 0 12px 0; color: #5f8b8b; font-size: 14px;"><strong style="color: #115e59;">From:</strong> ${name} &lt;${email}&gt;</p>
            <p style="margin: 0 0 12px 0; color: #5f8b8b; font-size: 14px;"><strong style="color: #115e59;">Subject:</strong> ${subject}</p>
            <div style="border-top: 1px solid #ccfbf1; padding-top: 16px; margin-top: 16px;">
              <p style="margin: 0; color: #134e4a; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin: 0;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }
}
