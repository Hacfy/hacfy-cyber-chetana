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
<html>
<head>
  <meta charset="utf-8" />
  <title>Cyber Awareness Certificate</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5;
      padding: 0;
    }

    .certificate {
      width: 1100px;       /* ~11in */
      height: 750px;       
      border: 6px double #1e3a8a;
      border-radius: 8px;
      padding: 40px 60px;
      box-sizing: border-box;
      text-align: center;
    }

    .header {
      font-size: 38px;
      font-weight: bold;
      color: #1e3a8a;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 20px;
    }

    .title {
      font-size: 16px;
      color: #000;
      letter-spacing: 2px;
      margin-bottom: 30px;
    }

    .name {
      font-size: 32px;
      font-weight: bold;
      color: #000;
      margin-bottom: 20px;
      text-decoration: underline;
    }

    .description {
      font-size: 16px;
      color: #1e3a8a;
      line-height: 1.6;
      max-width: 700px;
      margin: 0 auto 40px;
    }

    .footer {
      font-weight: bold;
      font-size: 16px;
      color: #1e3a8a;
    }

    .logo {
      margin-bottom: 10px;
    }

    hr {
      width: 80%;
      border: none;
      border-top: 2px solid #1e3a8a;
      margin: 20px auto;
    }
  </style>
</head>
<body>
  <div class="certificate">
    <div class="logo">
      <img src="${logoSrc}" alt="Logo" width="150"/>
    </div>

    <div class="header">CERTIFICATE OF CYBER AWARENESS COMMITMENT</div>
    <div class="title">THIS IS TO CERTIFY THAT</div>
    <div class="name">${firstName} ${lastName}</div>
    <div class="description">
      has taken the Cyber Safety Pledge to become a Cyber Awareness Ambassador with
      HacFy Cyber Chetana, demonstrating commitment to promote digital safety,
      responsible online behavior, and cybersecurity awareness among peers and the community.
    </div>
    <div class="footer">Certificate ID: ${certificateId}</div>
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

    // Generate PDF — fixed certificate size, single page
    const pdfBuffer = await page.pdf({
      width: '11in',
      height: '8.2in',
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
