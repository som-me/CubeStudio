import { NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL || "cube.built.studio@gmail.com";
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");
    const smtpUser = process.env.SMTP_USER || recipientEmail;
    const smtpPass = process.env.SMTP_PASS || "";

    // Create Transporter
    let transporter: Transporter;

    if (smtpPass) {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });
    } else {
      // Development fallback: Stream transport for testing without credentials
      console.warn(
        "SMTP_PASS is not set in environment variables. Email logged to console for testing."
      );
      transporter = nodemailer.createTransport({
        jsonTransport: true,
      });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e5e5; padding: 30px;">
        <div style="background-color: #171717; color: #ffffff; padding: 20px; text-align: center; margin-bottom: 25px;">
          <h1 style="margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 1px;">CUBE® STUDIO</h1>
          <p style="margin: 5px 0 0 0; font-size: 11px; color: #a3a3a3; font-family: monospace; text-transform: uppercase;">New Project Inquiry</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 140px; color: #555555; font-size: 13px;">Client Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-size: 14px; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555555; font-size: 13px;">Client Email:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-size: 14px;"><a href="mailto:${email}" style="color: #171717; text-decoration: underline;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555555; font-size: 13px;">Selected Service:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-size: 14px;">${service || "Not Specified"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555555; font-size: 13px;">Budget Scope:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-size: 14px;">${budget || "Standard"}</td>
          </tr>
        </table>

        <div style="margin-bottom: 25px;">
          <h3 style="font-size: 13px; color: #555555; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; font-family: monospace;">Project Brief & Objectives:</h3>
          <div style="background-color: #faf9f6; border-left: 3px solid #171717; padding: 15px; color: #222222; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
        </div>

        <div style="border-t: 1px solid #eeeeee; padding-top: 15px; text-align: center; color: #888888; font-size: 11px; font-family: monospace;">
          Sent via Cube® Studio Website Contact Form • ${new Date().toISOString()}
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"${name} (via Cube® Studio)" <${smtpUser}>`,
      replyTo: email,
      to: recipientEmail,
      subject: `New Project Inquiry from ${name} — Cube® Studio`,
      text: `New Project Inquiry from ${name} (${email})\nService: ${service}\nBudget: ${budget}\n\nMessage:\n${message}`,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Nodemailer sent message ID:", info.messageId || "json-stream");

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully to cube.built.studio@gmail.com!",
    });
  } catch (error: any) {
    console.error("Nodemailer API Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
