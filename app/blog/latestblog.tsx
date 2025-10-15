"use client";

import { assets } from "@/public/assets/assets";
import Image from "next/image";
import Link from "next/link";

const service = {
  id: 1,
  image: assets.blogNews2,
  link: "https://www.moneycontrol.com/technology/karnataka-online-trading-frauds-losses-skyrocket-from-rs-23-crore-in-2022-to-rs-903-crore-by-mid-2024-article-12822623.html",
  name: "Karnataka online trading frauds",
  description:
    "Mannd admins answered queries to build trust. An admin later shared a trading app link, which Kumar downloaded, assuming it was genuine.",
};

export function LatestBlog() {
  return (
    <section className="w-full py-20 px-4 md:px-12 flex flex-col">
      {/* Inner Container (adds left gap) */}
      <div className="w-full max-w-7xl mx-auto pl-6 md:pl-12">
        {/* Heading (left-aligned) */}
        <h2
          className="text-2xl md:text-5xl font-bold mb-12 text-left"
          style={{ color: "var(--primary-orange)" }}
        >
         Latest Blog
        </h2>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={service.image}
              alt={service.name}
              width={800}
              height={500}
              className="rounded-2xl object-cover w-full h-auto shadow-md"
            />
          </div>

          {/* Right Side Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "var(--primary-orange)" }}
            >
              {service.name}
            </h3>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--primary-blue)" }}
            >
              {service.description}
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                href={service.link}
                target="_blank"
                className="font-semibold text-orange-600 hover:underline"
              >
                Know More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
