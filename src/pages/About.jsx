import React, { useState } from 'react';
import { Typography } from "antd";
const { Title, Paragraph } = Typography;
import image from '../assets/about-section.jpeg';
import image2 from '../assets/image2.webp';
import ServicesSection from '../component/Services';

const tabContent = {
  JOURNEY: {
    title: "Our Founding Story and Milestones",
    text: "Established in 2010, our journey began with a simple yet powerful vision: to empower the underserved segment of society through ethical financial inclusion. We started with a small team in Chennai and have since expanded across three states, achieving a 500% growth in our customer base over the last five years.",
  },
  "SUCCESS MANTRA": {
    title: "Our Guiding Philosophy",
    text: "At CxMeta, we believe in potential, possibilities, and dreams. Our socially inclusive model focuses not just on current finance but future earning capacity. This approach has empowered thousands of individuals to elevate their lives and pursue their dreams confidently.",
  },
};

const About = () => {
  const [activeTab, setActiveTab] = useState("SUCCESS MANTRA");

  const tabs = ["JOURNEY", "SUCCESS MANTRA"];
  const bannerTitle = "About Us";
  const bannerDescription =
    "We perform in-depth analysis and research to ensure that each financial strategy is tailored for maximum growth and sustainability.";

  const ChevronRightIcon = ({ size = 20, className = "ml-1" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );

  const VisualCard = () => (
    <div className="w-full lg:w-1/2 p-4">
      <div className="rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(212,175,55,0.35)] bg-black">
        <img
          src={image}
          alt="Financial Growth Representation"
          className="w-full h-96 object-cover transition-transform duration-700 ease-in-out hover:scale-110"
        />
      </div>
    </div>
  );

  const ContentSection = () => (
    <div className="w-full lg:w-1/2 p-4 lg:pl-12">
      <h2 className="text-4xl font-extrabold text-[#D4AF37] drop-shadow-lg mb-6 mt-4 lg:mt-0">
        Company Overview
      </h2>

      {/* Tabs */}
      <div className="flex space-x-10 border-b border-[#D4AF37]/30 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-lg font-semibold transition-all duration-300 ${activeTab === tab
                ? "text-[#D4AF37] border-b-2 border-[#D4AF37]"
                : "text-gray-400 hover:text-[#D4AF37]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <p className="text-xl font-semibold text-white mb-2">
        {tabContent[activeTab].title}
      </p>
      <p className="text-gray-300 leading-relaxed">
        {tabContent[activeTab].text}
      </p>

      {/* Button */}
      <button className="mt-8 px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-transform duration-300 hover:scale-[1.05] flex items-center">
        Get Started
        <ChevronRightIcon size={20} className="ml-1" />
      </button>
    </div>
  );

  return (
    <>
      <div className="relative bg-black text-white min-h-[50vh] flex items-center font-sans">
        <div className="container mx-auto px-4 py-20 max-w-7xl">
          <Title className="!text-[#D4AF37] !text-[48px] !font-extrabold !mb-4">
            {bannerTitle}
          </Title>
          <Paragraph className="!text-gray-300 !text-[17px] max-w-xl">
            {bannerDescription}
          </Paragraph>
        </div>
      </div>

      <div className="min-h-screen bg-[#111] text-white p-4 sm:p-8">
        <div className="max-w-7xl mx-auto py-16">
          <div className="flex flex-col lg:flex-row items-center">
            <VisualCard />
            <ContentSection />

          </div>
        </div>
      </div>
      <ServicesSection section='about' />
      {/* CONTACT / HELP SECTION */}
      <section
        className="relative bg-fixed bg-center bg-cover py-24 px-6"
        style={{ backgroundImage: `url(${image2})` }} // you can replace image with any banner
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl font-extrabold text-[#D4AF37] drop-shadow-md">
              Let's Build Future Together
            </h2>
            <p className="text-gray-300 mt-4 max-w-md">
              Job Searching Just Got Easy. Use CxMeta to run a hiring site and earn money in the process.
            </p>
          </div>

          {/* RIGHT FORM BOX */}
          <div className="bg-[#1A1A1A]/90 border border-[#D4AF37]/40 shadow-[0_0_25px_rgba(212,175,55,0.45)] p-8 rounded-xl w-full max-w-md">
            <h3 className="text-xl font-semibold text-white mb-6">Need Help?</h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg bg-[#111] text-white border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-[#111] text-white border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none"
              />

              <select
                className="w-full p-3 rounded-lg bg-[#111] text-gray-300 border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none"
              >
                <option>Financial Planning</option>
                <option>Investment Support</option>
                <option>Loan Consultation</option>
              </select>

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-[#111] text-white border border-[#D4AF37]/30 focus:border-[#D4AF37] outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full mt-2 py-3 font-semibold rounded-lg bg-[#D4AF37] text-black hover:shadow-[0_0_18px_rgba(212,175,55,0.8)] transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

    </>
  );
};

export default About;
