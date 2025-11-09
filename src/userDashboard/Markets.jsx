"use client";
import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const Markets = () => {
  const marketData = [
    { name: "ICICIBANK", price: "1343.00", change: "+1.71%", isUp: true, link: "https://www.icicibank.com/" },
    { name: "RELIANCE", price: "1478.00", change: "-1.21%", isUp: false, link: "https://www.relianceindustries.com/" },
    { name: "HINDALCO", price: "790.40", change: "+0.25%", isUp: true, link: "https://www.hindalco.com/" },
    { name: "SBIN", price: "955.85", change: "-0.51%", isUp: false, link: "https://www.sbi.co.in/" },
    { name: "INFY", price: "1672.50", change: "+0.87%", isUp: true, link: "https://www.infosys.com/" },
    { name: "TCS", price: "3978.60", change: "-0.45%", isUp: false, link: "https://www.tcs.com/" },
    { name: "ADANIENT", price: "2843.90", change: "+2.13%", isUp: true, link: "https://www.adanienterprises.com/" },
  ];

  const indexData = [
    {
      name: "NIFTY 50",
      image:
        "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?auto=format&fit=crop&q=80&w=1200",
      link: "https://www.google.com/search?q=nifty",
    },
    {
      name: "BANK NIFTY",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1170",
      link: "https://groww.in/indices/nifty-bank",
    },
    {
      name: "SENSEX",
      image:
        "https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?auto=format&fit=crop&q=80&w=1255",
      link: "https://www.google.com/search?q=sensex",
    },
    {
      name: "TRADING VIEW",
      image: "nifty.png",
      link: "https://in.tradingview.com/symbols/NSE-NIFTY/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#181818] text-white font-sans">
      {/* 🔹 Live Market Ticker */}
      <div className="overflow-hidden border-b border-yellow-500/40 bg-black/95 py-2 relative shadow-md">
        <div className="flex whitespace-nowrap animate-marquee text-xs sm:text-sm md:text-base">
          {[...marketData, ...marketData].map((stock, i) => (
            <span
              key={i}
              onClick={() => window.open(stock.link, "_blank")}
              className="mx-3 sm:mx-6 cursor-pointer font-medium hover:text-yellow-400 transition inline-flex items-center"
            >
              <span className="text-yellow-300">{stock.name}</span>
              <span className="text-gray-400 ml-1">{stock.price}</span>
              {stock.isUp ? (
                <span className="text-green-400 inline-flex items-center gap-1 ml-1">
                  <ArrowUpRight size={13} />
                  {stock.change}
                </span>
              ) : (
                <span className="text-red-400 inline-flex items-center gap-1 ml-1">
                  <ArrowDownRight size={13} />
                  {stock.change}
                </span>
              )}
              <span className="mx-2 sm:mx-4 text-yellow-400/30">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* 🔹 Market Index Cards */}
      <div className="p-4 sm:p-6 md:p-10 lg:p-14">
        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {indexData.map((index, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a]/90 border border-yellow-400/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-[1.03]"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden">
                <img
                  src={index.image}
                  alt={index.name}
                  className="h-full w-full object-cover opacity-90 hover:opacity-100 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Details */}
              <div className="p-5 sm:p-6 flex flex-col items-center text-center space-y-3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-300 uppercase tracking-wider">
                  {index.name}
                </h2>
                <button
                  onClick={() => window.open(index.link, "_blank")}
                  className="bg-yellow-400 text-black font-semibold text-sm sm:text-base px-6 sm:px-7 py-2.5 rounded-lg shadow-md hover:bg-yellow-300 hover:scale-[1.05] transition-all duration-300"
                >
                  View Market
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: 200%;
        }

        /* ✅ Responsive fixes for small devices */
        @media (max-width: 640px) {
          .animate-marquee span {
            margin: 0 1rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Markets;
