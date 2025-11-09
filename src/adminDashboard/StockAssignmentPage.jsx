"use client";
import React, { useState } from "react";
import { BarChart3, IndianRupee, User, Package, Hash } from "lucide-react";

const StockAssignment = () => {
  const [stocks] = useState([
    { id: "STK101", name: "TCS LIMITED", pricePerStock: 3520, clientId: "CXM2133210", quantity: 5 },
    { id: "STK102", name: "INFY TECH", pricePerStock: 1498, clientId: "CXM2145620", quantity: 10 },
    { id: "STK103", name: "RELIANCE IND.", pricePerStock: 2725, clientId: "CXM2189054", quantity: 3 },
    { id: "STK104", name: "HDFC BANK", pricePerStock: 1620, clientId: "CXM2195561", quantity: 8 },
  ]);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-4 sm:p-6 md:p-10 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 tracking-wide flex items-center gap-2">
          <BarChart3 className="text-yellow-400" />
          Stock Assignment
        </h1>
      </div>

      {/* Stock Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {stocks.map((stock) => (
          <div
            key={stock.id}
            className="bg-[#141414] border border-yellow-400/30 rounded-2xl shadow-lg hover:shadow-yellow-400/20 transition-all p-4 sm:p-6 flex flex-col justify-between"
          >
            {/* Stock Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2 sm:gap-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400 break-words">
                {stock.name}
              </h2>
              <span className="text-gray-400 text-xs sm:text-sm flex items-center gap-1">
                <Hash size={14} />
                {stock.id}
              </span>
            </div>

            {/* Stock Details */}
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <div className="flex justify-between text-gray-300">
                <span className="flex items-center gap-1">
                  <IndianRupee size={16} className="text-yellow-400" />
                  Price per Stock
                </span>
                <span className="font-medium text-white">
                  ₹{stock.pricePerStock.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-gray-300">
                <span className="flex items-center gap-1">
                  <User size={16} className="text-yellow-400" />
                  Client ID
                </span>
                <span className="font-medium break-words">{stock.clientId}</span>
              </div>

              <div className="flex justify-between text-gray-300">
                <span className="flex items-center gap-1">
                  <Package size={16} className="text-yellow-400" />
                  Quantity
                </span>
                <span className="font-medium">{stock.quantity}</span>
              </div>

              <div className="flex justify-between font-semibold text-green-400 border-t border-yellow-400/20 pt-2 mt-2 text-sm sm:text-base">
                <span>Total Value</span>
                <span>
                  ₹{(stock.pricePerStock * stock.quantity).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockAssignment;
