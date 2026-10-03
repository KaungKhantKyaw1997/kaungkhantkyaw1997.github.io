import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `🌿 New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
              body { 
                font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
                background-color: #f4f5f0; 
                margin: 0; 
                padding: 0; 
              }
              .wrapper {
                width: 100%;
                table-layout: fixed;
                background-color: #f4f5f0;
                padding: 40px 0;
              }
              .container { 
                max-width: 580px; 
                margin: 0 auto; 
                background: #ffffff; 
                border-radius: 24px; 
                overflow: hidden; 
                border: 1px solid #e2e4dc; 
                box-shadow: 0 10px 25px -5px rgba(26, 43, 31, 0.05); 
              }
              .header { 
                background: #1a2b1f; 
                padding: 36px 30px; 
                text-align: left; 
              }
              .badge {
                display: inline-block;
                background: rgba(234, 179, 8, 0.15);
                color: #eab308;
                font-size: 10px;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                padding: 6px 12px;
                border-radius: 50px;
                margin-bottom: 12px;
                border: 1px solid rgba(234, 179, 8, 0.3);
              }
              .header h2 { 
                margin: 0; 
                color: #ffffff; 
                font-size: 24px; 
                font-weight: 800; 
                letter-spacing: -0.03em; 
              }
              .content { 
                padding: 32px 30px; 
              }
              .grid {
                display: flex;
                gap: 12px;
                margin-bottom: 20px;
              }
              .field { 
                margin-bottom: 20px; 
              }
              .label { 
                font-size: 10px; 
                font-weight: 800; 
                text-transform: uppercase; 
                letter-spacing: 0.08em; 
                color: #717670; 
                margin-bottom: 6px; 
              }
              .value { 
                font-size: 14px; 
                font-weight: 600;
                color: #1a2b1f; 
                background: #fcfcf9; 
                padding: 14px 16px; 
                border-radius: 12px; 
                border: 1px solid #e7e9e1; 
              }
              .message-box { 
                font-size: 14px; 
                color: #2c3830; 
                background: #fcfcf9; 
                padding: 18px 16px; 
                border-radius: 12px; 
                border: 1px solid #e7e9e1; 
                line-height: 1.7; 
                white-space: pre-wrap; 
              }
              .action-area {
                margin-top: 28px;
                text-align: center;
              }
              .reply-btn {
                display: block;
                width: 100%;
                box-sizing: border-box;
                background-color: #eab308;
                color: #1a2b1f !important;
                text-decoration: none !important;
                font-weight: 800;
                font-size: 12px;
                padding: 14px 20px;
                border-radius: 12px;
                letter-spacing: 0.05em;
                text-align: center;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
              }
              .footer { 
                background: #fcfcf9; 
                padding: 24px 30px; 
                text-align: center; 
                font-size: 12px; 
                color: #8c9288; 
                border-top: 1px solid #e7e9e1; 
              }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="container">
                <div class="header">
                  <div class="badge">✦ Portfolio Contact</div>
                  <h2>New Project Inquiry</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Sender Name</div>
                    <div class="value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email Address</div>
                    <div class="value">
                      <a href="mailto:${email}" style="color: #1a2b1f; text-decoration: none; font-weight: 700;">${email}</a>
                    </div>
                  </div>
                  <div class="field">
                    <div class="label">Message Details</div>
                    <div class="message-box">${message}</div>
                  </div>
                  <div class="action-area">
                    <a href="mailto:${email}" class="reply-btn">
                      Reply to ${name} &nbsp;
                    </a>
                  </div>
                </div>
                <div class="footer">
                  <p style="margin: 0;">You received this because someone filled out the contact form on your portfolio website.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 },
    );
  }
}
