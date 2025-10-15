"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { assets } from "@/public/assets/assets";

// =================== DATA ===================
const services = [
  {
    id: 1,
    category: "Trading Fraud",
    image: assets.blogNews2,
   
    name: "Karnataka online trading frauds: Losses skyrocket from Rs 23 crore in 2022 to Rs 903 crore by mid-2024",
    description:
      "Many educated professionals, especially Bengaluru techies, have been duped by fake broking apps promising high returns or IPO allocations. In April, Saurav Kumar saw a stock investment ad on Facebook and joined a WhatsApp group that led to a fake trading app scam.",
  },
  {
    id: 2,
    category: "Investment Fraud",
    image: assets.investment,
   
    name: "Investment Fraud — Udupi man loses ₹49 lakh",
    description:
      "A 72-year-old man and his family lost ₹49 lakh in an online investment scam. They were lured via WhatsApp into transferring money for fake stock market gains. When they tried to withdraw, fraudsters demanded more.",
  },
  {
    id: 3,
    category: "Digital Arrest Fraud",
    image: assets.blogNews1,
   
    name: "Karnataka loses ₹219 crore to ‘Digital Arrest’ Fraud since 2023",
    description:
      "Karnataka has lost ₹219.58 crore to ‘digital arrest’ fraud over the past three years. Scammers pose as police officers, forcing victims to transfer money under false pretexts.",
  },
  {
    id: 4,
    category: "Cyber Scam",
    image: assets.blogNews,
   
    name: "Karnataka elderly couple loses ₹50 lakh to cyber scam, dies by suicide",
    description:
      "An elderly couple in Belagavi lost over ₹50 lakh to fraudsters posing as officials. The scammers accused them of SIM misuse, forcing them to transfer funds, leading to tragic consequences.",
  },

];

// =================== MAIN COMPONENT ===================
export function KnowMore() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(services.map((s) => s.category))];

  const filteredServices = services.filter(
    (service) => selectedCategory === "All" || service.category === selectedCategory
  );

  return (
    <div className="w-full  py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
       
        {/* Heading */}
        <h2
          className="text-4xl md:text-6xl font-extrabold mb-10 text-center justify-center text-[#09437d]"
          
        >
          Cybercrime News & Case Studies
        </h2>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap gap-5 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full px-4 py-2 font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-secondary text-blue hover:bg-secondary/90"
                  : "border-secondary/30 hover:bg-secondary/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* 2-Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className=" rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={service.image}
                alt={service.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-orange-600">{service.name}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                  {service.description}
                </p>
               
 <Link
  href={`/blog/${service.id}`}
  className="text-orange-600 font-semibold hover:underline"
>
  Know More →
</Link>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
