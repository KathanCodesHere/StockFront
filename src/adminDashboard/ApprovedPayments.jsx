"use client";
import React, { useState } from "react";
import { CheckCircle, Clock } from "lucide-react";

const ApprovedPayments = () => {
  const [approvedPayments] = useState([
    { id: "PAY1001", clientId: "CXM2133210", amount: "₹12,500", time: "2025-11-08 14:23" },
    { id: "PAY1002", clientId: "CXM2145567", amount: "₹8,000", time: "2025-11-07 10:45" },
    { id: "PAY1003", clientId: "CXM2158799", amount: "₹15,750", time: "2025-11-06 18:12" },
    { id: "PAY1004", clientId: "CXM2160342", amount: "₹22,000", time: "2025-11-05 09:35" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#080808] via-[#0d0d0d] to-[#141414] text-white p-4 sm:p-6 md:p-10 font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 tracking-wide">
          Approved Payments
        </h1>
        <div className="flex items-center gap-2 bg-green-500/10 border border-green-500 rounded-full px-3 py-1 text-green-400 font-medium text-sm">
          <CheckCircle size={16} />
          <span>{approvedPayments.length} Approved</span>
        </div>
      </div>

      {/* Table / Cards */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm sm:text-base min-w-[500px] md:min-w-[600px]">
          <thead className="bg-gradient-to-r from-[#111] to-[#222] text-yellow-300 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-2 sm:px-4 text-left font-semibold">Payment ID</th>
              <th className="py-3 px-2 sm:px-4 text-left font-semibold">Client ID</th>
              <th className="py-3 px-2 sm:px-4 text-left font-semibold">Amount</th>
              <th className="py-3 px-2 sm:px-4 text-left font-semibold">Time</th>
              <th className="py-3 px-2 sm:px-4 text-center font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {approvedPayments.map((payment) => (
              <tr
                key={payment.id}
                className="border-t border-gray-800 hover:bg-yellow-400/5 transition-all duration-300"
              >
                <td className="py-3 px-2 sm:px-4 text-gray-200 font-medium whitespace-nowrap">{payment.id}</td>
                <td className="py-3 px-2 sm:px-4 text-gray-300 whitespace-nowrap">{payment.clientId}</td>
                <td className="py-3 px-2 sm:px-4 text-green-400 font-semibold whitespace-nowrap">{payment.amount}</td>
                <td className="py-3 px-2 sm:px-4 text-gray-400 whitespace-nowrap flex items-center gap-1 sm:gap-2">
                  <Clock size={14} className="text-yellow-400" />
                  {payment.time}
                </td>
                <td className="py-3 px-2 sm:px-4 text-center">
                  <span className="bg-green-500/20 border border-green-500/30 text-green-400 px-2 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md">
                    Approved
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards View */}
      <div className="md:hidden mt-6 flex flex-col gap-4">
        {approvedPayments.map((payment) => (
          <div
            key={payment.id}
            className="bg-[#1a1a1a]/80 border border-yellow-400/30 backdrop-blur-xl rounded-2xl p-4 shadow-md"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-200 font-semibold">{payment.id}</span>
              <span className="bg-green-500/20 border border-green-500/30 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                Approved
              </span>
            </div>
            <div className="text-gray-300 text-sm mb-1">Client ID: {payment.clientId}</div>
            <div className="text-green-400 font-semibold text-sm mb-1">Amount: {payment.amount}</div>
            <div className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
              <Clock size={14} className="text-yellow-400" />
              {payment.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovedPayments;
