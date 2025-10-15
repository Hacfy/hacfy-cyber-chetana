// app/blog/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { assets } from "@/public/assets/assets";

const servicesMock = [
  {
    id: "1",
    title: "Karnataka online trading frauds: Losses skyrocket",
    description:
      "Many educated professionals, especially Bengaluru techies, have been duped by fake broking apps promising high returns...",
    content: `
      <p>This is a detailed mock blog about online trading frauds in Karnataka.</p>
      <p>Victims are tricked into fake apps and lose crores. Always verify your investments!</p>
    `,
    image: assets.blogNews2,
  },
  {
    id: "2",
    title: "Investment Fraud — Udupi man loses ₹49 lakh",
    description:
      "A 72-year-old man lost ₹49 lakh in an online investment scam...",
    content: `<p>Detailed mock blog content for the investment fraud case in Udupi.</p>`,
    image: assets.investment,
  },
  {
    id: "3",
    title: "Digital Arrest Fraud in Karnataka",
    description: "Karnataka has lost ₹219 crore to digital arrest fraud...",
    content: `<p>Mock blog content about Digital Arrest Fraud in Karnataka.</p>`,
    image: assets.blogNews1,
  },
];

export default function BlogPage({ params }: { params: { id: string } }) {
  const blog = servicesMock.find((s) => s.id === params.id);

  if (!blog) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-[#09437d] mb-6">{blog.title}</h1>
      <Image
        src={blog.image}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />
      <p className="text-gray-700 mb-6">{blog.description}</p>
      <div
        className="text-gray-800 leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
