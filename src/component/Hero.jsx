// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import hero1 from '../assets/Hero-1.jpg';
// import hero2 from '../assets/hero-2.webp';
// import hero3 from '../assets/Hero-3.png';

// const slides = [
//   {
//     img: hero1,
//     title: "Empower Wealth",
//     highlight: "CxMeta:",
//     subtitle: "Where Your Wealth Grows",
//     desc: "Join a new era of smart investing. CxMeta provides tools, education, and strategy to help you grow your wealth with confidence and clarity.",
//     buttonText: "Explore Now",
//     buttonLink: "#discover"
//   },
//   {
//     img: hero2,
//     title: "Smarter Trading",
//     highlight: "Starts With",
//     subtitle: "The Right Strategy",
//     desc: "Access expert insights, AI-backed signals, and a growing knowledge library that guides you to make informed trading decisions every day.",
//     buttonText: "Start Learning",
//     buttonLink: "#start"
//   },
//   {
//     img: hero3,
//     title: "Stay Ahead",
//     highlight: "Of The Market",
//     subtitle: "With Real-Time Updates",
//     desc: "Never miss an opportunity. Track trends, receive alerts, and monitor performance — all inside one seamless and powerful platform.",
//     buttonText: "Get Started",
//     buttonLink: "#signals"
//   }
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   const next = () => setIndex((index + 1) % slides.length);
//   const prev = () => setIndex((index - 1 + slides.length) % slides.length);

//   const slide = slides[index];

//   return (
//     <section className="relative w-full h-[90vh] flex items-center overflow-hidden bg-black">

//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img src={slide.img} alt="Hero" className="w-full h-full object-cover opacity-90" />
//         <div className="absolute inset-0 bg-black/60"></div>
//       </div>

//       {/* Animated Text */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 80 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -80 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="relative z-10 max-w-[40rem] px-8 text-white"
//         >

//           <h1 className="text-4xl sm:text-6xl font-bold leading-tight capitalize text-white">
//             {slide.title}{" "}
//             <span className="text-[#E5C07B]">{slide.highlight}</span>{" "}
//             {slide.subtitle}
//           </h1>

//           <p className="mt-4 text-[18px] leading-[28px] text-gray-200 max-w-xl">
//             {slide.desc}
//           </p>

//           <a
//             href={slide.buttonLink}
//             className="mt-6 inline-block text-[16px] font-semibold tracking-wide uppercase
//             rounded-[6px] px-[30px] py-[12px]
//             bg-[#E5C07B] text-black
//             transition-all duration-300 
//             hover:bg-transparent hover:text-[#E5C07B] border border-[#E5C07B]"
//           >
//             {slide.buttonText}
//           </a>

//         </motion.div>
//       </AnimatePresence>

//       {/* Controls */}
//     {/* Controls */}
// <button
//   onClick={prev}
//   className="absolute left-4 top-1/2 -translate-y-1/2 z-50 
//   bg-black/40 hover:bg-black/60 
//   border border-[#E5C07B]/40 hover:border-[#E5C07B] 
//   p-3 rounded-full transition"
// >
//   <ChevronLeft className="text-[#E5C07B]" />
// </button>

// <button
//   onClick={next}
//   className="absolute right-4 top-1/2 -translate-y-1/2 z-50 
//   bg-black/40 hover:bg-black/60 
//   border border-[#E5C07B]/40 hover:border-[#E5C07B] 
//   p-3 rounded-full transition"
// >
//   <ChevronRight className="text-[#E5C07B]" />
// </button>

//     </section>
//   );
// }


import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "../assets/Hero-1.jpg";
import hero2 from "../assets/hero-2.webp";
import hero3 from "../assets/Hero-3.png";

const slides = [
  {
    img: hero1,
    title: "Empower Wealth",
    highlight: "CxMeta:",
    subtitle: "Where Your Wealth Grows",
    desc: "Join a new era of smart investing. CxMeta provides tools, education, and strategy to help you grow your wealth with confidence and clarity.",
    buttonText: "Explore Now",
    buttonLink: "#discover",
  },
  {
    img: hero2,
    title: "Smarter Trading",
    highlight: "Starts With",
    subtitle: "The Right Strategy",
    desc: "Access expert insights, AI-backed signals, and a growing knowledge library that guides you to make informed trading decisions every day.",
    buttonText: "Start Learning",
    buttonLink: "#start",
  },
  {
    img: hero3,
    title: "Stay Ahead",
    highlight: "Of The Market",
    subtitle: "With Real-Time Updates",
    desc: "Never miss an opportunity. Track trends, receive alerts, and monitor performance — all inside one seamless and powerful platform.",
    buttonText: "Get Started",
    buttonLink: "#signals",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % slides.length);
  const prev = () => setIndex((index - 1 + slides.length) % slides.length);

  const slide = slides[index];

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-black">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={slide.img} alt="Hero" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Centered Animated Text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center max-w-[40rem] px-8 text-white"
        >
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight capitalize text-white">
            {slide.title}{" "}
            <span className="text-[#E5C07B]">{slide.highlight}</span>{" "}
            {slide.subtitle}
          </h1>

          <p className="mt-4 text-[18px] leading-[28px] text-gray-200">
            {slide.desc}
          </p>

          <a
            href={slide.buttonLink}
            className="mt-6 inline-block text-[16px] font-semibold tracking-wide uppercase
              rounded-[6px] px-[30px] py-[12px]
              bg-[#E5C07B] text-black
              transition-all duration-300 
              hover:bg-transparent hover:text-[#E5C07B] border border-[#E5C07B]"
          >
            {slide.buttonText}
          </a>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 
        bg-black/40 hover:bg-black/60 
        border border-[#E5C07B]/40 hover:border-[#E5C07B] 
        p-3 rounded-full transition"
      >
        <ChevronLeft className="text-[#E5C07B]" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 
        bg-black/40 hover:bg-black/60 
        border border-[#E5C07B]/40 hover:border-[#E5C07B] 
        p-3 rounded-full transition"
      >
        <ChevronRight className="text-[#E5C07B]" />
      </button>

    </section>
  );
}
