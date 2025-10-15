"use client";

import { useParams } from "next/navigation";
import { assets } from "@/public/assets/assets";
import { KnowMore } from "../knowMore";

// =================== BLOG DATA ===================
const services = [
  {
    id: "1",
    category: "Phishing",
    image: assets.blogNews2,
    name: "Phishing in 2024: From Simple Email Scams to AI-Powered Social Engineering",
    description:
      "Phishing has transformed from simple email scams into sophisticated, AI-powered social engineering campaigns. Explore its evolution, why it remains so effective, and how to protect your organization in 2024.",
    sections: [
      {
        title: "Executive Summary",
        content: `Phishing remains one of the most successful cyberattack methods globally, despite years of security awareness campaigns and technological advances. Attackers continue to exploit fundamental human behaviors—such as fear, trust, and urgency—while adapting their techniques to new communication channels and defenses. A layered defense strategy that integrates awareness training, robust authentication, intelligent filtering, and rapid incident response can drastically reduce the impact of phishing campaigns.`,
      },
      {
        title: "Introduction",
        content: `Phishing is one of the oldest forms of cybercrime, dating back to the mid-1990s. Modern campaigns leverage artificial intelligence, harvested personal data, and psychological manipulation to trick users into revealing credentials, transferring money, or installing malware. From deceptive emails to deepfake voice calls and malicious QR codes, phishing has expanded far beyond its original form.`,
      },
      {
        title: "Key Question",
        content: `Why do phishing attacks continue to succeed despite widespread awareness, and how can individuals and organizations build stronger defenses against them?`,
      },
      {
        title: "Background and Current Landscape",
        content: `Modern phishing campaigns are characterized by:
• Personalization
• Multi-channel delivery
• Automation and scale
• Blending tactics`,
      },
      {
        title: "In-Depth Technical Overview",
        content: `a. Mechanism / How It Works
1. Preparation
2. Delivery
3. Deception
4. Action
5. Exploitation

b. Attack Vectors / Techniques
• Business Email Compromise (BEC)
• Fake Login Pages
• AI-Powered Phishing
• MFA Bypass Techniques
• QR Code Phishing (Quishing)
• Vishing and Deepfake Calls

c. Tools and Frameworks
• Phishing Kits
• Email Spoofing Tools
• Command-and-Control Infrastructure
• AI Content Generators

d. Impact and Consequences
• Credential Theft
• Financial Loss
• Data Breaches
• Operational Disruption
• Reputational Damage`,
      },
      {
        title: "Mitigation and Prevention Strategies",
        content: `1. Learn the Red Flags
2. Continuous Awareness Training
3. Deploy Strong Technical Controls
4. Harden Authentication
5. Establish Rapid Response Procedures
6. Zero Trust Principles`,
      },
      {
        title: "HacFy Insights / Expert Commentary",
        content: `Phishing’s enduring success lies in its psychological foundation. Awareness training must be ongoing and realistic, security tools intelligent and adaptive, and organizations must foster a culture where reporting suspicious activity is encouraged.`,
      },
      {
        title: "Conclusion",
        content: `Phishing attacks thrive because they exploit the weakest link in cybersecurity: people. Building resilience is about reducing the success rate through layered, adaptive defense.`,
      },
      {
        title: "Call to Action (CTA)",
        content: `Stay Ahead of Evolving Threats. Subscribe to HacFy for expert insights, detailed threat breakdowns, and practical defense strategies.`,
      },
      {
        title: "References",
        content: `• HacFy Cybersecurity Reports, 2024
• Industry news and phishing case studies
• Cybersecurity best practices and frameworks
• FBI IC3 Reports
• Microsoft and Google Security Research Blogs`,
      },
    ],
  },
  {
  id: "2",
  category: "Investment Fraud",
  image: assets.investment, // replace with the relevant image asset
  name: "Investment Fraud — Udupi man loses ₹49 lakh",
  description:
    "A 72-year-old man from Udupi and his family lost ₹49 lakh in an online investment scam. Fraudsters promised high returns and used WhatsApp groups to manipulate them into investing.",
  sections: [
    {
      title: "Executive Summary",
      content: `A 72-year-old man from Udupi and his family lost ₹49 lakh due to an online investment fraud. Fraudsters used WhatsApp groups to lure them into investing with promises of high returns, highlighting the risks associated with online investment schemes.`,
    },
    {
      title: "Background",
      content: `Francis Castalino, a 72-year-old resident of Udupi, reported that his son was included in a 'Stock Market Navigation' group on WhatsApp. The group administrators convinced Castalino and his family to invest in fake stock market schemes promising good returns.`,
    },
    {
      title: "Incident Details",
      content: `On December 30, Castalino transferred ₹17 lakh to the account provided by the fraudsters. Subsequently, his wife transferred ₹10.5 lakh, and his son transferred ₹21.5 lakh. When they attempted to withdraw the invested amount, the fraudsters demanded additional payments to release the funds, effectively defrauding the family.`,
    },
    {
      title: "Modus Operandi",
      content: `The scammers used social engineering via WhatsApp, creating a sense of trust and urgency. They promised high returns on investments and manipulated victims to transfer large sums of money. Such scams target families with limited awareness of online fraud.`,
    },
    {
      title: "Consequences",
      content: `The family lost a total of ₹49 lakh. This case highlights the growing trend of online investment fraud in India, particularly targeting older individuals and their families.`,
    },
    {
      title: "Prevention Tips",
      content: `• Always verify the authenticity of investment opportunities.\n• Avoid transferring funds based on unsolicited messages or social media groups.\n• Consult with a certified financial advisor before making large investments.\n• Report suspicious groups or messages to authorities immediately.`,
    },
    {
      title: "References",
      content: `• The Hindu, January 2, 2025: Investment fraud, Udupi man loses ₹49 lakh\n• General online investment fraud awareness reports`,
    },
  ],
},
{
  id: "3",
  category: "Digital Arrest Fraud",
  image: assets.blogNews1, // You can add a relevant image in your assets
  name: "Karnataka Loses Rs 219 Crore to Digital Arrest Fraud Since 2023",
  description:
    "Karnataka has suffered a loss of Rs 219.58 crore to ‘digital arrest’ fraud over the past three years. Learn how the scam operates, its impact, and government measures to combat it.",
  sections: [
    {
      title: "Executive Summary",
      content: `Karnataka has incurred a total loss of Rs 219.58 crore due to digital arrest fraud cases between 2023 and 2025. The scam involves fraudsters deceiving victims into transferring money under false pretexts, exploiting fear and intimidation through video and WhatsApp calls. Authorities are working to raise awareness and curb these crimes through preventive measures and social media crackdowns.`,
    },
    {
      title: "Introduction",
      content: `Digital arrest fraud is a growing cybercrime in Karnataka, where fraudsters use intimidation tactics, falsely accusing victims of involvement in money laundering or illegal drug activities. Victims are coerced into providing sensitive information such as bank account details and Aadhaar cards, resulting in financial loss.`,
    },
    {
      title: "Background and Current Landscape",
      content: `According to data presented by Home Minister Dr. G Parameshwara:
- In 2023: 67 cases, Rs 7.91 crore lost.
- In 2024: 1,066 cases, Rs 191.55 crore lost.
- In 2025 (till date): 95 victims, Rs 20.11 crore lost.

Law enforcement recovered funds in 16 cases in 2023, 463 cases in 2024, and 20 cases in 2025. However, exact recovery amounts are not specified.`,
    },
    {
      title: "Modus Operandi",
      content: `Fraudsters exploit video and WhatsApp calls to intimidate victims, claiming their involvement in illegal activities. They coerce victims into transferring money under the guise of verification, threatening legal consequences. Sensitive personal information is collected to facilitate further extortion.`,
    },
    {
      title: "Government Response",
      content: `Authorities have initiated awareness campaigns, workshops, and training sessions to educate the public and enhance investigation techniques. Social media platforms are being monitored to identify and disable fraudulent accounts:
- 268 Facebook groups
- 465 Telegram groups
- 15 Instagram accounts
- 61 WhatsApp groups

Fake SIM cards and fraudulent bank accounts used in these operations are also targeted for shutdowns.`,
    },
    {
      title: "Impact and Consequences",
      content: `The digital arrest scam has caused massive financial losses across Karnataka. Victims face not only monetary loss but also stress and reputational damage due to false accusations. The rapid growth of cases highlights the need for continuous awareness and preventive measures.`,
    },
    {
      title: "Mitigation and Prevention Strategies",
      content: `- Educate citizens on common online fraud tactics.
- Verify unknown callers claiming legal authority.
- Avoid sharing sensitive personal information over calls or messages.
- Report suspicious activity immediately to authorities.
- Follow official guidance and updates from government awareness campaigns.`,
    },
    {
      title: "Conclusion",
      content: `Digital arrest fraud in Karnataka has surged in the past three years, causing huge financial and psychological impact. Authorities continue to combat these crimes through public awareness, social media crackdowns, and improved investigative measures. Staying informed and cautious remains critical to preventing victimization.`,
    },
    {
      title: "References",
      content: `• The Indian Express, Karnataka Loses Rs 219 Crore to Digital Arrest Fraud, 2025
• Government Reports & Legislative Council Data
• Cybercrime Prevention Workshops & Awareness Campaigns`,
    },
  ],
},
{
  id: "4",
  category: "Cyber Fraud",
  image: assets.blogNews, // Replace with a relevant image from your assets
  name: "Karnataka elderly couple loses ₹50 lakh to cyber scam, dies by suicide",
  description:
    "An elderly couple in Belagavi district of Karnataka fell victim to cyber fraud and tragically took their own lives. This article covers the scam details, financial transactions, investigation, and aftermath of the incident.",
  sections: [
    {
      title: "Incident Overview",
      content: `An elderly couple in Belagavi district of Karnataka, Diogjeron Santan Nazareth (82) and his wife Flaviana (79), died by suicide after falling victim to a cyber fraud scam and alleged harassment. They had no children and were reportedly living alone in Beedi village. Diogjeron left a handwritten two-page note explaining their decision and stating that no one should be blamed.`
    },
    {
      title: "Discovery",
      content: `The tragedy came to light on Thursday when neighbours found Flaviana lifeless on her bed. Diogjeron's body was later discovered in the underground water tank of their house. Police reports indicate Diogjeron, a retired Maharashtra government secretariat employee, died by stabbing himself in the neck, with additional injuries found on his wrist. Flaviana is suspected to have consumed poison, although confirmation is pending an autopsy.`
    },
    {
      title: "How the Scam Occurred",
      content: `In his suicide note, Diogjeron named two individuals—Sumit Birra and Anil Yadav—allegedly responsible for the cyber fraud. Birra posed as a telecom department official from New Delhi, informing Diogjeron that a SIM card had been fraudulently purchased in his name for illegal activities. The call was later transferred to Yadav, who claimed to be a Crime Branch official. Diogjeron was pressured to provide financial details under threat of legal consequences. Fearing trouble, he transferred over ₹50 lakh to the accounts given by the fraudsters, with additional funds contributed by his wife and son. The scammers continued to demand more money, making withdrawal impossible.`
    },
    {
      title: "Financial Details",
      content: `Diogjeron also mentioned taking a gold loan of ₹7.15 lakh, with instructions in his note to sell the gold and use the proceeds to repay debts. He borrowed money from friends and instructed that his wife's gold bangles and earrings be sold to cover the loans. In the note, Diogjeron expressed that, at ages 82 and 79, with no one to support them, they did not want to live at anyone’s mercy, which led to their tragic decision.`
    },
    {
      title: "Final Wishes",
      content: `The note expressed a wish for their bodies to be donated to a medical institution for educational purposes. Authorities have taken Diogjeron's mobile phone, the suicide note, and the knife into custody as part of the investigation. A case of abetment to suicide and cyber fraud has been registered against the accused. Police are working to trace the individuals named in the note and recover the fraudulent bank transactions.`
    },
    {
      title: "Impact and Reflection",
      content: `This incident highlights the devastating psychological and financial consequences of cyber scams on elderly individuals. The scammers exploited fear and authority to extract money, ultimately leading to a tragic outcome. The case underscores the critical importance of cyber awareness, robust reporting mechanisms, support for vulnerable citizens, and timely intervention to prevent similar tragedies. Authorities continue to investigate and aim to apprehend the perpetrators while educating the public on preventing such frauds.`
    }
  ]
}



];

// =================== PAGE COMPONENT ===================
export default function BlogPage() {
  const params = useParams();
  const blogId = params.id;

  const blog = services.find((item) => item.id === blogId);

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-600">Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {/* Hero Image */}
      <div
        className="w-full h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${blog.image.src})` }}
      ></div>

      {/* Blog Card */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12 bg-white rounded-xl shadow-lg">
    
        <h1 className="text-2xl font-bold mb-6 text-[#09437d] justify-center">
          {blog.name}
        </h1>

        {/* Blog Description */}
        <p className="text-gray-700 mb-8 text-lg">{blog.description}</p>

        {/* Render Sections */}
        {blog.sections.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-2xl font-bold text-orange-600 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
          </div>
        ))}

        {/* Author Section */}
        {/* <div className="mt-12 border-t pt-6">
          <h3 className="text-xl font-semibold mb-2">Author: John Doe</h3>
          <p className="text-gray-600">
            Cybersecurity Analyst | HacFy <br />
            Twitter: @JohnDoeCyber | LinkedIn: linkedin.com/in/johndoe
          </p>
        </div> */}

        {/* CTA */}
        {/* <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition">
            Subscribe to HacFy
          </button>
        </div> */}
      </div>

      {/* KnowMore Section */}
      <KnowMore />
    </div>
  );
}
