

// import * as React from "react";
// import "../styles/colors.css";
// import { ScrollIndicator } from "@/components/ScrollIndicator";

// export function HeroSection() {
//   return (
//     <ScrollIndicator />
//     <header className="relative w-full h-screen overflow-hidden flex items-center justify-start px-6 md:px-20">
      
     
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/video.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

   
//       <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-t from-[whitesmoke] to-transparent"></div>

   
//       <div className="relative z-10 flex flex-col gap-y-6 max-w-3xl text-left text-white">
//         <h1 className="text-6xl md:text-7xl font-extrabold">
//           <span style={{ color: "var(--primary-orange)" }}>Awareness</span> Today,
//           <br />
//           <span style={{ color: "var(--primary-orange)" }}>Security</span> Tomorrow
//       .
//         </h1>
//         <p className="text-lg md:text-2xl font-medium">
//           Stay ahead of cyber threats with cutting-edge security solutions and expert guidance.
//         </p>
//       </div>
//     </header>
//   );
// }
// "use client";
// import * as React from "react";
// import "../styles/colors.css";
// import { ScrollProgress } from "@/components/ScrollIndicator";
// import { LampContainer } from "@/components/ui/lamp";
// import { motion } from "motion/react";


// export function HeroSection() {
//   return (
//     <>
//      <ScrollProgress/>
//       <header className="relative w-full h-screen overflow-hidden flex items-center justify-start px-6 md:px-20">
//      {/* <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/video.mp4" type="video/mp4" />
//       </video> */}
//        <LampContainer>
//       <motion.h1
//         initial={{ opacity: 0.5, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
//       >
//         Build lamps <br /> the right way
//       </motion.h1>
//     </LampContainer>

//       <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

   
 

   
//       <div className="relative z-10 flex flex-col gap-y-6 max-w-3xl text-left text-white">
//         <h1 className="text-6xl md:text-7xl font-extrabold">
//           <span style={{ color: "var(--primary-orange)" }}>Awareness</span> Today,
//           <br />
//           <span style={{ color: "var(--primary-orange)" }}>Security</span> Tomorrow
//       .
//         </h1>
//         <p className="text-lg md:text-2xl font-medium">
//           Stay ahead of cyber threats with cutting-edge security solutions and expert guidance.
//         </p>
//       </div>
//       </header>
//     </>
//   );
// }
"use client";
import * as React from "react";
import "../styles/colors.css";
import { ScrollProgress } from "@/components/ScrollIndicator";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <>
      <ScrollProgress />
      <header className="relative w-full h-[calc(100vh-4rem)] mt-[4rem] overflow-hidden flex items-center justify-center">

        <LampContainer>
          <div className="relative z-10 text-left text-white">
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="text-6xl md:text-7xl font-extrabold"
            >
              <span style={{ color: "var(--primary-orange)" }}>Awareness</span> Today,
              
              <span style={{ color: "var(--primary-orange)" }}>Security</span> Tomorrow.
           

            <p className="text-lg md:text-2xl font-medium mt-6 text-center">
              Stay ahead of cyber threats with cutting-edge security solutions and expert guidance.
            </p>
             </motion.h1>
          </div>
        </LampContainer>

      </header>
    </>
  );
}
