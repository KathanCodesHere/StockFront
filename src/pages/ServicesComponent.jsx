import { Typography } from "antd";
import React, { useState } from "react";
import { Card, Button } from "antd";
import stock1 from "../assets/stock1.webp";
import stock2 from "../assets/stock2.webp";
import stock3 from "../assets/stock3.webp";

const { Title, Paragraph } = Typography;

const tabs = [
  "Investing",
  "Analysis Tools",
  "Mobile Trading",
  "Acc. Management",
];

const data = {
  Investing: [
    { category: "FINANCIAL STATEMENTS", title: "Retirement Planning Strategies", image: stock1 },
    { category: "ECONOMIC INDICATORS", title: "Tax Optimization Solutions", image: stock2 },
    { category: "EARNINGS REPORTS", title: "Business Succession Planning", image: stock3 },
  ],
  "Analysis Tools": [
    { category: "MARKET INSIGHTS", title: "Technical Charting Tools", image: stock1 },
    { category: "DATA ANALYTICS", title: "Predictive Investment Models", image: stock2 },
  ],
  "Mobile Trading": [
    { category: "PLATFORM ACCESS", title: "Trade Anytime, Anywhere", image: stock3 },
    { category: "SECURITY", title: "Biometric Login & Encryption", image: stock2 },
  ],
  "Acc. Management": [
    { category: "CLIENT SUPPORT", title: "24/7 Account Assistance", image: stock1 },
    { category: "PORTFOLIO CONTROL", title: "Comprehensive Account Overview", image: stock3 },
  ],
};

const ServicesComponent = () => {
  const [activeTab, setActiveTab] = useState("Investing");

  return (
    <>
      {/* Header Section */}
      <div className="relative bg-black text-white min-h-[50vh] flex items-center font-sans">
        <div className="container mx-auto px-4 py-20 max-w-7xl">
          <div className="md:w-3/4 lg:w-2/3">
            <Title
              level={1}
              className="!text-[#cda43d] !text-[46px] !font-extrabold !mb-4 leading-tight drop-shadow-lg"
            >
              Strategic Solutions
            </Title>
            <Paragraph className="!text-gray-300 !text-base !leading-relaxed max-w-2xl">
              Real stories. Real results. Discover the impact we’ve created for our clients.
            </Paragraph>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className=" mx-auto py-10 px-4 bg-black">
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {tabs.map((tab) => (
            <Button
              key={tab}
              type="text"
              onClick={() => setActiveTab(tab)}
              className={`
                relative font-semibold text-base px-5 py-2 rounded-full transition-all duration-300
                ${activeTab === tab
                  ? "!text-black !bg-[#cda43d] shadow-lg"
                  : "!text-[#eaeaea] border border-[#3a3a3a] hover:!bg-[#cda43d] hover:!text-black"
                }
              `}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {data[activeTab].map((item, index) => (
            <Card
              key={index}
              hoverable
              cover={
                <img
                  alt={item.title}
                  src={item.image}
                  className="rounded-t-2xl h-60 object-cover"
                />
              }
              className="
  w-full max-w-sm
  rounded-2xl
  bg-gradient-to-b from-[#1a1a1a] to-[#000]
  border border-[#3a3a3a]
  shadow-[0_0_10px_rgba(205,164,61,0.25)]
  hover:shadow-[0_0_22px_rgba(205,164,61,0.65)]
  hover:border-[#cda43d]
  transition-all duration-300
  hover:scale-[1.03]
"
              bodyStyle={{ padding: "1.25rem", textAlign: "center" }}
            >
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                {item.category}
              </p>
              <h3 className="text-lg font-semibold text-[#eaeaea] leading-tight">
                {item.title}
              </h3>
            </Card>

          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesComponent;
