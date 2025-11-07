import React from "react";
import DealCard from "./DealCard";
import hot from "../assets/hoat-deal.jpg";
import raj from "../assets/rajasthan.jpg";
import forex  from "../assets/forex.avif"
import metaStock  from "../assets/metaStock.jpg"
import tradingImage  from "../assets/tradingImage.jpg"

export const packageData = [
  { id: 1, title: "Meta Quotes", price: "5,999", rating: 1, images: metaStock, category: "metaStock", redirectUrl : "https://www.metaquotes.net/" },
  { id: 2, title: "Trading View", price: "5,999", rating: 5, images: tradingImage, category: "Trips",redirectUrl : "https://in.tradingview.com/" },
  { id: 3, title: "Forex Factory", price: "5,999", rating: 4.5, images: forex, category: "Trips", redirectUrl:'https://www.forexfactory.com/' },
];

export default function PackagesGrid() {
  return (
    <section id="packages" className="w-full bg-[#0C0C0C] py-16">
      <div className="text-center mb-12">
        <h2
          className="text-[clamp(28px,3vw,40px)] 
          font-['El_Messiri'] font-bold 
          text-[#E5C07B] tracking-wide"
        >
          Markets
        </h2>
        <div className="w-[70px] h-[3px] bg-[#E5C07B] mx-auto mt-3"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* {packageData.map((pkg) => (
            <DealCard key={pkg.id} deal={pkg} />
          ))} */}
          {packageData.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => (window.location.href = pkg.redirectUrl)}
              className="cursor-pointer"
            >
              <DealCard deal={pkg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
