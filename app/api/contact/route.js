import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/contactSchema";



export async function POST(req) {
  try {
    // 1️⃣ Read request body
    const body = await req.json();

    // 2️⃣ Validate again on server (security)
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return new Response(
        JSON.stringify({
          success: false,
          errors: result.error.issues,
        }),
        { status: 400 }
      );
    }

    const { name, email, phone, message } = result.data;

    // 3️⃣ Create transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 4️⃣ Email content
    const mailOptions = {
      from: `"Alamco Infratech Website" <${process.env.GMAIL_USER}>`,
      to: "info@alamco.co.in", // company receiving email
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    };

    // 5️⃣ Send email
    await transporter.sendMail(mailOptions);

    // 6️⃣ Success response
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
