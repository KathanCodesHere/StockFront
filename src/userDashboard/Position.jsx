import React from "react";
import { FaChartLine } from "react-icons/fa";

const TradeReport = () => {
  const trades = [
    {
      title: "ETHUSS OPTIONS 15-Oct-25 1",
      buyPrice: 10,
      buyQty: 21,
      buyValue: 210,
      profit: 231.0,
      sellPrice: 21,
      sellQty: 21,
      sellValue: 441,
    },
    {
      title: "ETHUSS OPTIONS 15-Oct-25 2",
      buyPrice: 51.5,
      buyQty: 7250,
      buyValue: 373375,
      profit: 166750.0,
      sellPrice: 74.5,
      sellQty: 7250,
      sellValue: 540125,
    },
    {
      title: "ETHUSS OPTIONS 15-Oct-25 3",
      buyPrice: 21.6,
      buyQty: 3050,
      buyValue: 65880,
      profit: 112850.0,
      sellPrice: 58.6,
      sellQty: 3050,
      sellValue: 178730,
    },
    {
      title: "ETHUSS OPTIONS 17-Oct-25 4",
      buyPrice: 39,
      buyQty: 1650,
      buyValue: 64350,
      profit: 54450.0,
      sellPrice: 72,
      sellQty: 1650,
      sellValue: 118800,
    },
  ];

  const summary = {
    subTotal: 334281,
    brokerage: 20,
    gst: 1.8,
    stt: 2.5,
    tax: 1.25,
    netValue: 334158.8,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0b0b] via-[#101010] to-[#181818] text-white py-8 px-4 sm:px-6 md:px-10">
      {/* Header */}
      <div className="mb-8 sm:mb-12 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-2">
          <FaChartLine className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl animate-pulse" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-wide uppercase">
            Trade Report
          </h1>
        </div>
        
      </div>

      {/* Trade Cards */}
      <div className="space-y-6 max-w-6xl mx-auto">
        {trades.map((trade, idx) => (
          <div
            key={idx}
            className="bg-[#151515]/90 border border-yellow-400/30 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-yellow-400/30 hover:scale-[1.01] transition-all duration-300"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-300 mb-3 sm:mb-4 text-center sm:text-left">
              {trade.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-gray-300 text-sm sm:text-base">
              {/* Buy Section */}
              <div className="bg-[#1d1d1d] p-4 rounded-xl border border-yellow-400/20">
                <p>
                  <span className="font-medium text-yellow-300">Buy Price:</span> ₹{trade.buyPrice} |{" "}
                  <span className="font-medium text-yellow-300">Qty:</span> {trade.buyQty}
                </p>
                <p className="mt-1">
                  <span className="font-medium text-yellow-300">Buy Value:</span> ₹
                  {trade.buyValue.toLocaleString()}
                </p>
                <p className="text-green-400 font-semibold mt-2 text-sm sm:text-base">
                  Profit: +₹{trade.profit.toLocaleString()}
                </p>
              </div>

              {/* Sell Section */}
              <div className="bg-[#1d1d1d] p-4 rounded-xl border border-yellow-400/20">
                <p>
                  <span className="font-medium text-yellow-300">Sell Price:</span> ₹{trade.sellPrice} |{" "}
                  <span className="font-medium text-yellow-300">Qty:</span> {trade.sellQty}
                </p>
                <p className="mt-1">
                  <span className="font-medium text-yellow-300">Sell Value:</span> ₹
                  {trade.sellValue.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="max-w-4xl mx-auto mt-10 sm:mt-12 bg-[#151515]/90 border border-yellow-400/40 rounded-2xl shadow-lg p-5 sm:p-6 md:p-8">
        <h2 className="text-yellow-300 text-xl sm:text-2xl font-semibold mb-5 border-b border-yellow-400/30 pb-3 text-center sm:text-left">
          Summary
        </h2>
        <div className="space-y-3 text-gray-300 text-sm sm:text-base">
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span className="font-semibold text-yellow-400">₹{summary.subTotal.toLocaleString()} /-</span>
          </div>
          <div className="flex justify-between">
            <span>Brokerage</span>
            <span>₹{summary.brokerage} /-</span>
          </div>
          <div className="flex justify-between">
            <span>GST</span>
            <span>₹{summary.gst} /-</span>
          </div>
          <div className="flex justify-between">
            <span>STT</span>
            <span>₹{summary.stt} /-</span>
          </div>
          <div className="flex justify-between">
            <span>Tax / Txn</span>
            <span>₹{summary.tax} /-</span>
          </div>
          <hr className="border-yellow-400/30 my-3" />
          <div className="flex justify-between text-base sm:text-lg font-bold text-green-400">
            <span>Net Value</span>
            <span>₹{summary.netValue.toLocaleString()} /-</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeReport;
