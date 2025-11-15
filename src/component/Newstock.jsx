import React from "react";
import { Link } from "react-router-dom";

const NewStock = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/025/751/345/original/business-growth-wallpaper-with-the-glowing-bar-chart-static-and-up-arrow-stock-market-growth-in-futuristic-technology-style-graphic-of-successful-financial-development-on-the-dark-background-vector.jpg')",
      }}
    >
      <div className="max-w-4xl w-full text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Explore the World of Stocks
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Get real-time market insights, expert recommendations, and smart tools
          to make your trading journey successful.
        </p>

        {/* CTA Button */}
        <div
          className="inline-block bg-gradient-to-r from-[#F5D37E] to-[#E0A627] text-[#0d0d0d] px-8 py-3 rounded-full text-lg font-semibold shadow-lg cursor-pointer hover:opacity-90 transition"
        >
          Get Started
        </div>
      </div>
    </div>
  );
};

export default NewStock;
