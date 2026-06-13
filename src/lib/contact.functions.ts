import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const RECIPIENT = "ankit.kumar.mishra2006@gmail.com";
const MAIL_SERVICE_URL = "https://mail-sender-snowy.vercel.app/api/send-email";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(1000),
});

type ContactInput = z.infer<typeof contactSchema>;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml({ name, email, message }: ContactInput): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const sentAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin:0;padding:0;background-color:#1a1815;font-family:'Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a1815;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#f5f1ea;border-radius:24px;overflow:hidden;border:1px solid rgba(0,0,0,0.06);">
            <!-- header -->
            <tr>
              <td style="background-color:#1a1815;padding:28px 36px;">
                <p style="margin:0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#ff5a36;font-weight:600;">
                  Portfolio &middot; New Message
                </p>
                <h1 style="margin:8px 0 0;font-size:26px;line-height:1.15;color:#f5f1ea;font-weight:700;">
                  You've got a new<br /><span style="color:#ff5a36;font-style:italic;">contact request.</span>
                </h1>
              </td>
            </tr>
            <!-- body -->
            <tr>
              <td style="padding:32px 36px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-bottom:18px;">
                      <p style="margin:0 0 4px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8a857c;font-weight:600;">From</p>
                      <p style="margin:0;font-size:18px;color:#1a1815;font-weight:600;">${safeName}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom:22px;">
                      <p style="margin:0 0 4px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8a857c;font-weight:600;">Email</p>
                      <a href="mailto:${safeEmail}" style="margin:0;font-size:16px;color:#ff5a36;text-decoration:none;font-weight:500;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style="margin:0 0 8px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8a857c;font-weight:600;">Message</p>
                      <div style="background-color:#ffffff;border:1px solid rgba(0,0,0,0.08);border-left:3px solid #ff5a36;border-radius:14px;padding:18px 20px;font-size:15px;line-height:1.6;color:#2b2823;">
                        ${safeMessage}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- footer -->
            <tr>
              <td style="padding:20px 36px 28px;border-top:1px solid rgba(0,0,0,0.07);">
                <p style="margin:0;font-size:12px;color:#8a857c;">
                  Sent ${sentAt} (IST) &middot; Reply directly to respond to ${safeName}.
                </p>
              </td>
            </tr>
          </table>
          <p style="margin:18px 0 0;font-size:11px;letter-spacing:1px;color:#5c574e;">
            ANKIT KUMAR MISHRA &middot; Portfolio Contact Form
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const res = await fetch(MAIL_SERVICE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        toEmail: RECIPIENT,
        subject: `Portfolio — new message from ${data.name}`,
        fromName: `${data.name} (Portfolio Contact)`,
        emailContent: buildEmailHtml(data),
      }),
    });

    const result = (await res.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
    };

    if (!res.ok || result.success === false) {
      throw new Error(result.message || `Mail service returned ${res.status}`);
    }

    return { success: true };
  });
