// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
// import puppeteer from 'puppeteer-core';
// import chromium from '@sparticuz/chromium'; // Ensure @sparticuz/chromium is imported

// const generateCertificateHTML = (firstName: string, lastName: string) => `
  
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8" />
//     <title>Certificate</title>
//     <style>
//       body {
//         font-family: Arial, sans-serif;
//         text-align: center;
//         padding: 50px;
//       }
//       .certificate {
//         border: 10px solid #ccc;
//         padding: 50px;
//         max-width: 800px;
//         margin: 0 auto;
//         position: relative;
//       }
//       .logo {
//         width: 150px;
//         margin: 0 auto 30px;
//         display: block;
//       }
//       h1 {
//         color: #333;
//       }
//     </style>
//   </head>
//   <body>
//     <div class="certificate">
//       <img src="/assets/logo.png" alt="Logo" class="logo" />
//       <h1>Certificate of Registration</h1>
//       <p>This certifies that</p>
//       <h2>${firstName} ${lastName}</h2>
//       <p>has successfully registered.</p>
//     </div>
//   </body>
// </html>

// `;

// export async function POST(req: NextRequest) {
//   try {
//     const { firstName, lastName, email, phoneNumber } = await req.json();
//     if (!firstName || !lastName || !email || !phoneNumber) {
//       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//     }

//     const htmlContent = generateCertificateHTML(firstName, lastName);

//     const isProd = process.env.NODE_ENV === 'production';

//     const executablePath = isProd ? await chromium.executablePath() : undefined;

// if (!executablePath && isProd) {
//   throw new Error('Chromium executable path is not defined for production');
// }

// const browser = await puppeteer.launch({
//   args: chromium.args,
//   executablePath: await chromium.executablePath(),
//   headless: true,
// });

//     const page = await browser.newPage();
//     await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
//     const pdfBuffer = await page.pdf({ format: 'a4' });
//     await browser.close();

//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Your Registration Certificate',
//       text: 'Attached is your certificate of registration.',
//       attachments: [
//         {
//           filename: 'certificate.pdf',
//           content: pdfBuffer,
//           contentType: 'application/pdf',
//         },
//       ],
//     });

//     return NextResponse.json({ message: 'PDF sent to email' });
//   } catch (error: unknown) {
//     console.error('Email PDF error:', error);
//     return NextResponse.json({ error: `Failed: ${error instanceof Error ? error.message : 'Unknown error'}` }, { status: 500 });
//   }
// }
// app/api/certificate/route.ts
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

// Generate HTML for the certificate
const generateCertificateHTML = (firstName: string, lastName: string, certificateId: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cyber Awareness Certificate</title>
  <style>
    body {
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
    }

    .certificate {
      width: 900px;
      padding: 50px 60px;
      border: 5px solid #1a3b73;
      border-radius: 16px;
      position: relative;
      box-shadow: 0 0 15px rgba(0,0,0,0.1);
    }

    .certificate::before {
      content: "";
      position: absolute;
      top: 12px;
      left: 12px;
      right: 12px;
      bottom: 12px;
      border: 3px solid #f36f26;
      border-radius: 10px;
      pointer-events: none;
    }

    .header {
      text-align: center;
      margin-bottom: 10px;
    }

    .header img {
      margin-bottom: 5px;
    }

    .header .subtext {
      color: #555;
      font-size: 14px;
    }

    .title {
      text-align: center;
      font-size: 22px;
      color: #1a3b73;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 40px;
    }

    .certify {
      text-align: center;
      font-size: 16px;
      color: #444;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }

    .name {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      color: #1a3b73;
      border-bottom: 1px solid #1a3b73;
      display: inline-block;
      padding: 5px 30px;
      margin: 10px auto;
    }

    .content {
      text-align: center;
      font-size: 16px;
      color: #333;
      line-height: 1.7;
      max-width: 750px;
      margin: 30px auto;
    }

    .certificate-id {
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      color: #1a3b73;
      margin-top: 40px;
    }
  </style>
</head>
<body>
  <div class="certificate">
    <div class="header">
      <img src="${logoSrc}" alt="Logo" width="150"/>
      <div class="subtext">Your Digital Safety, Our Priority</div>
    </div>

    <div class="title">CERTIFICATE OF CYBER AWARENESS COMMITMENT</div>

    <div class="certify">THIS IS TO CERTIFY THAT</div>

    <div class="name">${firstName} ${lastName}</div>

    <div class="content">
      has taken the <strong>Cyber Safety Pledge</strong> to become a
      <strong>Cyber Awareness Ambassador</strong> with
      <strong>HacFy Cyber Chetana</strong>, demonstrating commitment to promote
      digital safety, responsible online behavior, and cybersecurity awareness
      among peers and the community.
    </div>

    <div class="certificate-id">Certificate ID: ${certificateId}</div>
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

    const certificateId = `2025-${Math.floor(100 + Math.random() * 900)}`;
    const htmlContent = generateCertificateHTML(firstName, lastName, certificateId);

    // Puppeteer launch options
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: process.env.NODE_ENV === 'production'
        ? await chromium.executablePath()
        : undefined,
      headless: true,
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    // Generate PDF
    const pdfBuffer = await page.pdf({
      width: '11in',
      height: '8.5in',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      pageRanges: '1',
    });

    await browser.close();

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email with attachment
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
