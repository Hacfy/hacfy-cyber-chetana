import Image from "next/image";
import { assets } from "@/public/assets/assets";

export default function BackgroundImage() {
  return (
    <div className="w-full relative">
      {/* Background Image with Centered Text */}
      <div className="relative w-full h-[60vh]">
        <Image 
          src={assets.CyberBackground} 
          alt="Background" 
          layout="fill"
          objectFit="cover"
          priority
          className="top-0 left-0"
        />
        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 
            className="font-extrabold text-white tracking-wide text-center"
            style={{ fontSize: "clamp(2rem, 8vw, 5rem)" }}
          >
            <span>BLOGS</span>
          </h1>
        </div>
      </div>

      
      <div className="px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 md:mt-20">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="font-bold text-3xl sm:text-4xl text-[#09437d]">
      Insights. Strategies. Cyber confidence.
    </h2>
    <p className="text-base sm:text-sm text-[#09437d] mt-4 sm:mt-5">
      Stay informed with the latest in cybersecurity from emerging threats and technology updates to expert tips and industry trends. Our blog is your go to resource for navigating the ever-changing digital security landscape.
    </p>
  </div>
</div>

    </div>
  );
} 
