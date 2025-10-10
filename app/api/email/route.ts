import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium'; // Ensure @sparticuz/chromium is imported

const generateCertificateHTML = (firstName: string, lastName: string) => `
  
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Certificate</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 50px;
      }
      .certificate {
        border: 10px solid #ccc;
        padding: 50px;
        max-width: 800px;
        margin: 0 auto;
        position: relative;
      }
      .logo {
        width: 150px;
        margin: 0 auto 30px;
        display: block;
      }
      h1 {
        color: #333;
      }
    </style>
  </head>
  <body>
    <div class="certificate">
      <img src="/assets/logo.png" alt="Logo" class="logo" />
      <h1>Certificate of Registration</h1>
      <p>This certifies that</p>
      <h2>${firstName} ${lastName}</h2>
      <p>has successfully registered.</p>
    </div>
  </body>
</html>

`;

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phoneNumber } = await req.json();
    if (!firstName || !lastName || !email || !phoneNumber) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const htmlContent = generateCertificateHTML(firstName, lastName);

    const isProd = process.env.NODE_ENV === 'production';

    const executablePath = isProd ? await chromium.executablePath() : undefined;

if (!executablePath && isProd) {
  throw new Error('Chromium executable path is not defined for production');
}

const browser = await puppeteer.launch({
  args: chromium.args,
  executablePath: await chromium.executablePath(),
  headless: true,
});

    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'a4' });
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
      subject: 'Your Registration Certificate',
      text: 'Attached is your certificate of registration.',
      attachments: [
        {
          filename: 'certificate.pdf',
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    });

    return NextResponse.json({ message: 'PDF sent to email' });
  } catch (error: unknown) {
    console.error('Email PDF error:', error);
    return NextResponse.json({ error: `Failed: ${error instanceof Error ? error.message : 'Unknown error'}` }, { status: 500 });
  }
}
