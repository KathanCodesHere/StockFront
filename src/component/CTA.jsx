import { Users, Star, UserCheck } from "lucide-react";
import ImageBack from "../assets/gateway2-bg.png";

const StatBox = ({ value, label, Icon }) => (
  <div className="absolute p-4 w-48 bg-[#111] border border-[#D4AF37]/40 rounded-xl shadow-xl flex items-center backdrop-blur-sm">
    <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
      <Icon className="w-6 h-6" />
    </div>
    <div className="ml-3">
      <p className="text-xl font-bold text-[#F5F5F5]">{value}</p>
      <p className="text-sm text-[#C8C8C8]">{label}</p>
    </div>
  </div>
);

const HeroImageArea = () => {
  return (
    <div className="relative flex justify-center items-center h-full min-h-[500px] py-10 md:py-0">

      {/* Hero Image */}
      <div className="relative">
        <img
          src={ImageBack}
          alt="Trading Services"
          className="w-full md:max-w-sm lg:max-w-xl h-auto object-cover z-10 opacity-95"
          style={{ clipPath: "ellipse(60% 70% at 50% 50%)" }}
        />

        {/* Floating Stats */}
        {/*<div className="absolute -top-6 -left-10">
          <StatBox value="22K+" label="Clients" Icon={Users} />
        </div>

        <div className="absolute top-1/2 -right-16">
          <StatBox value="15.8K" label="Satisfied Users" Icon={Star} />
        </div>

        <div className="absolute -bottom-6 left-1/4">
          <StatBox value="40+" label="Specialties" Icon={UserCheck} />
        </div>*/}
      </div>
    </div>
  );
};

const CTA = () => {
  return (
    <section className="bg-[#0D0D0D] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side Content */}
          <div>
            <h1 className="text-[42px] md:text-[48px] font-[700] leading-[50px] text-[#F5F5F5]">
              Trusted Trading Services
              <span className="block text-xl font-medium text-[#D4AF37] mt-2">
                (Backed by 10+ Years of Experience)
              </span>
            </h1>

            <p className="text-[18px] leading-[28px] text-[#C8C8C8] mt-4 mb-8 max-w-lg">
              Our platform delivers accurate market updates and actionable insights, 
              empowering you to make confident and informed trading decisions.
            </p>

            <button className="px-8 py-3 bg-[#111] text-[#F5F5F5] text-lg font-semibold rounded-xl shadow-xl border border-[#D4AF37]/50 transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_20px_#D4AF37] hover:scale-[1.05]">
               Begin Now
            </button>
          </div>

          {/* Right Side Image + Stats */}
          <HeroImageArea />
        </div>
      </div>
    </section>
  );
};

export default CTA;
