import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import fs from 'fs';
import path from 'path';

// Convert logo to base64
const logoPath = path.join(process.cwd(), 'public', 'assets', 'logo.png');
const logoBase64 = fs.readFileSync(logoPath, { encoding: 'base64' });
const logoSrc = `data:image/png;base64,${logoBase64}`;

// Generate HTML for professional certificate
const generateCertificateHTML = (firstName: string, lastName: string, certificateId: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cyber Awareness Certificate</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    body {
      background-color: #ffffff;
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .certificate {
      width: 11.6in;      /* A4 Landscape */
      height: 8.2in;      /* A4 Landscape */
      padding: 60px;
      border: 6px solid #1a3b73;
      border-radius: 16px;
      position: relative;
      box-sizing: border-box;
      text-align: center;
      background-color: #fff;
    }

    .certificate::before {
      content: "";
      position: absolute;
      top: 20px;
      left: 20px;
      right: 20px;
      bottom: 20px;
      border: 4px solid #f36f26;
      border-radius: 12px;
      pointer-events: none;
    }

    .logo img {
      width: 350px;
      margin-bottom: 15px;
    }

    .header {
      font-size: 36px;
      font-weight: 700;
      color: #1a3b73;
      margin-bottom: 10px;
    }

    .subtext {
      font-size: 16px;
      color: #555;
      margin-bottom: 30px;
    }

    .title {
      font-size: 24px;
      font-weight: 700;
      color: #1a3b73;
      margin-bottom: 20px;
    }

    .certify {
      font-size: 18px;
      color: #444;
      letter-spacing: 2px;
      margin-bottom: 20px;
    }

    .name {
      font-size: 32px;
      font-weight: bold;
      color: #1a3b73;
      border-bottom: 2px solid #1a3b73;
      display: inline-block;
      padding: 10px 40px;
      margin-bottom: 30px;
    }

    .content {
      font-size: 18px;
      color: #333;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto 40px;
    }

    .certificate-id {
      font-size: 18px;
      font-weight: 700;
      color: #1a3b73;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="certificate">
    <div class="logo">
      <img src="${logoSrc}" alt="Logo" />
    </div>

    <div class="header">CYBER AWARENESS COMMITMENT</div>
   
    <div class="title">CERTIFICATE OF ACHIEVEMENT</div>
    <div class="certify">THIS IS TO CERTIFY THAT</div>
    <div class="name">${firstName} ${lastName}</div>
    <div class="content">
      has successfully taken the <strong>Cyber Safety Pledge</strong> and
      is recognized as a <strong>Cyber Awareness Ambassador</strong> with
      <strong>HacFy Cyber Chetana</strong>, demonstrating commitment to
      promote digital safety, responsible online behavior, and cybersecurity
      awareness in their community.
    </div>
    <div class="certificate-id">Certificate ID: ${certificateId}</div>
  </div>
</body>
</html>
`;

// POST handler for generating PDF and sending email
export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phoneNumber } = await req.json();

    if (!firstName || !lastName || !email || !phoneNumber) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const certificateId = `2025-${Math.floor(100 + Math.random() * 900)}`;
    const htmlContent = generateCertificateHTML(firstName, lastName, certificateId);

    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: process.env.NODE_ENV === 'production' ? await chromium.executablePath() : undefined,
      headless: true,
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
      width: '11.7in',
      height: '8.3in',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    await browser.close();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Cyber Awareness Certificate',
      text: 'Congratulations! Attached is your Cyber Awareness Commitment Certificate.',
      attachments: [
        {
          filename: 'cyber-awareness-certificate.pdf',
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    });

    return NextResponse.json({ message: 'Certificate PDF sent successfully!' });
  } catch (error: unknown) {
    console.error('Certificate generation error:', error);
    return NextResponse.json(
      { error: `Failed: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}
