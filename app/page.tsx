// import { HeroCard } from "./homepage/_components/HeroSectioncards";
// import PledgeForm from "./homepage/_components/pledgeForm"; // Fixed spelling
// import { HeroSection } from "./homepage/header";
// import { MarqueeDemo } from "./homepage/Merquee";
// import SwiperHome from "./homepage/SwiperHome";
// import SwiperComponent from "./homepage/SwiperImage";

// export default function Home() {
//   return (
//     <div className="w-full mx-auto">
//       <HeroSection />

//   <div className="w-full flex flex-col h-auto md:h-screen">
//   <div>
//     <MarqueeDemo />
//   </div>
//   <div className="w-full flex flex-col h-auto md:h-screen">
//     <SwiperHome />
 
// <HeroCard />
// </div>

//       {/* Pledge Form Section */}
//       <div className="container mx-auto w-full  md:mt-0 justify-center items-center">
//   <PledgeForm />
// </div>

//       {/* Swiper Component */}
//       <div className="w-full h-auto md:h-1/2 mt-20 md:mt-0 sm:mt-0 mb-20 flex justify-center items-center">
//   <SwiperComponent />
// </div>

//     </div>
//   );
// }
import { HeroCard } from "./homepage/_components/HeroSectioncards";
import PledgeForm from "./homepage/_components/pledgeForm";
import { HeroSection } from "./homepage/header";
import { MarqueeDemo } from "./homepage/Merquee";
import SwiperHome from "./homepage/SwiperHome";
import SwiperComponent from "./homepage/SwiperImage";

export default function Home() {
  return (
    <div className="w-full mx-auto">

      {/* Hero Section */}
      <HeroSection />

      {/* Marquee Section */}
      <div className="w-full">
        <MarqueeDemo />
      </div>

      {/* Recent Scams Swiper */}
      <div className="w-full">
        <SwiperHome />
      </div>

      {/* Why We Created HacFy Cyber Chetana */}
      <div className="w-full">
        <HeroCard />
      </div>

      {/* Pledge Form Section */}
      <div className="container mx-auto w-full mt-16 md:mt-24 flex justify-center items-center">
        <PledgeForm />
      </div>

      {/* Additional Swiper Component */}
      <div className="w-full mt-16 md:mt-24 mb-20 flex justify-center items-center">
        <SwiperComponent />
      </div>

    </div>
  );
}
