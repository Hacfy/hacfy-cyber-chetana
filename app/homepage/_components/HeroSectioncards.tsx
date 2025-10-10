import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { assets } from "@/public/assets/assets";

export function HeroCard() {
  return (
    <div className="w-full py-24 md:py-36 px-4 md:px-12 bg-white text-black">
      <div className="w-full flex flex-col items-center py-16 md:py-6 rounded-3xl text-black px-6 md:px-12 relative">
      
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full md:w-[80%] text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold " style={{ color: "var(--primary-blue)" }}>Why We Created HacFy Cyber Chetana?</h1>
         
        </div>

      
        <div className="mt-28 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-12">
          {[
            { title: "Cybercrime Awareness", text: "Educating communities to identify, prevent, and respond to emerging cyber threats.", image: assets.awarness
              
             },
            { title: "Women Digital Safety", text: "Empowering women with knowledge and tools to navigate the digital world securely",  image:assets.Safety},
            { title: "Youth Empowerment", text:   "Equipping the next generation with cybersecurity skills to build a safer digital future", image:assets.Empowerment },
            { title: "Secure Digital Society", text: "Creating a digitally resilient ecosystem through awareness, education, and community collaboration.",  image:assets.society},
          ].map((item, index) => (
            <Card key={index} className="bg-white text-black shadow-lg transition-transform duration-300 hover:-translate-y-3">
              <CardHeader className="flex flex-col items-center">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={180} 
                  height={80} 
                  className="mb-4"
                />
                <CardTitle className="text-xl md:text-2xl font-semibold" style={{ color: "var(--primary-orange)" }}>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm md:text-lg text-center" style={{ color: "var(--primary-blue)" }}>
                {item.text}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
