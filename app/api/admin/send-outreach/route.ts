import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

/** Validate admin_session cookie — same logic as proxy.ts */
function isAuthenticated(request: NextRequest): boolean {
  const session = request.cookies.get("admin_session")?.value;
  if (!session) return false;

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;

  // Verify the token is structured as we issued it
  try {
    const decoded = Buffer.from(session, "base64").toString("utf-8");
    return decoded.startsWith("cube-admin:") && decoded.endsWith(`:${adminPassword.slice(0, 4)}`);
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { leadName, leadEmail, subject, body: emailBody, serviceFocus, customNote } = body;

    if (!leadName || !leadEmail || !subject || !emailBody) {
      return NextResponse.json(
        { error: "Missing required fields: leadName, leadEmail, subject, body." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");
    const smtpUser = process.env.SMTP_USER || process.env.RECIPIENT_EMAIL || "cube.built.studio@gmail.com";
    const smtpPass = process.env.SMTP_PASS || "";

    let transporter: Transporter;

    if (smtpPass) {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });
    } else {
      console.warn("SMTP_PASS not set — logging email to console only.");
      transporter = nodemailer.createTransport({ jsonTransport: true });
    }

    // Sanitise newlines for HTML
    const bodyHtml = emailBody
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br />");

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e5e5;">

        <!-- Header -->
        <div style="background-color: #171717; color: #ffffff; padding: 24px 30px; text-align: left;">
          <p style="margin: 0 0 4px 0; font-size: 11px; color: #a3a3a3; font-family: monospace; text-transform: uppercase; letter-spacing: 2px;">Cube® Studio</p>
          <h1 style="margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.5px;">${subject}</h1>
        </div>

        <!-- Body -->
        <div style="padding: 30px; background-color: #faf9f6;">

          <!-- Greeting -->
          <p style="margin: 0 0 20px 0; font-size: 15px; color: #111111; line-height: 1.6;">
            Hi <strong>${leadName}</strong>,
          </p>

          <!-- Main Message -->
          <div style="background-color: #ffffff; border-left: 3px solid #171717; padding: 18px 20px; margin-bottom: 24px; color: #222222; font-size: 14px; line-height: 1.7;">
            ${bodyHtml}
          </div>

          ${
            serviceFocus
              ? `<!-- Service Focus -->
          <div style="margin-bottom: 20px; padding: 14px 18px; border: 1px solid #e5e5e5; background-color: #ffffff;">
            <p style="margin: 0 0 4px 0; font-size: 10px; font-family: monospace; text-transform: uppercase; letter-spacing: 1.5px; color: #888888;">Service Focus</p>
            <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111111;">${serviceFocus}</p>
          </div>`
              : ""
          }

          ${
            customNote
              ? `<!-- Custom Note -->
          <p style="margin: 0 0 24px 0; font-size: 13px; color: #555555; font-style: italic; line-height: 1.6;">${customNote}</p>`
              : ""
          }

          <!-- CTA -->
          <div style="text-align: left; margin-bottom: 28px;">
            <a href="https://cubestudio.in/contact" style="display: inline-block; background-color: #171717; color: #ffffff; text-decoration: none; padding: 12px 24px; font-size: 12px; font-family: monospace; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">
              Start A Conversation →
            </a>
          </div>

        </div>

        <!-- Footer -->
        <div style="border-top: 1px solid #e5e5e5; padding: 16px 30px; text-align: left; color: #888888; font-size: 11px; font-family: monospace; background-color: #ffffff;">
          <strong style="color: #111111;">Som</strong> — Founder & Lead Engineer, Cube® Studio<br />
          <a href="mailto:cube.built.studio@gmail.com" style="color: #555555;">cube.built.studio@gmail.com</a>
        </div>

      </div>
    `;

    const mailOptions = {
      from: `"Som — Cube® Studio" <${smtpUser}>`,
      replyTo: smtpUser,
      to: leadEmail,
      subject,
      text: `Hi ${leadName},\n\n${emailBody}${serviceFocus ? `\n\nService Focus: ${serviceFocus}` : ""}${customNote ? `\n\n${customNote}` : ""}\n\n— Som\nFounder & Lead Engineer, Cube® Studio\ncube.built.studio@gmail.com`,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("[Admin Outreach] Sent to:", leadEmail, "| Message ID:", info.messageId || "json-stream");

    return NextResponse.json({ success: true, message: `Email dispatched to ${leadEmail}` });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[Admin Outreach] Error:", message);
    return NextResponse.json({ error: message || "Failed to send email." }, { status: 500 });
  }
}
