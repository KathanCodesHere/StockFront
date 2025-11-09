"use client";
import React from "react";
import { CheckCircle, Clock } from "lucide-react";

const PaymentApproved = () => {
  const payments = [
    { amount: "231", date: "2025-10-15 10:14:21", userId: "CXM2133210", status: "Pending" },
    { amount: "1,250", date: "2025-10-17 09:28:45", userId: "CXM2145620", status: "Paid" },
    { amount: "975", date: "2025-10-20 11:05:10", userId: "CXM2187934", status: "Pending" },
    { amount: "3,480", date: "2025-10-22 15:30:59", userId: "CXM2158889", status: "Paid" },
    { amount: "560", date: "2025-10-25 12:17:33", userId: "CXM2164401", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a] text-white font-sans p-4 sm:p-6 md:p-10">
      
      {/* 🔹 Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-yellow-400 tracking-wide mb-2 sm:mb-0">
          💸 Payment Approvals
        </h1>
       
      </div>

      {/* 🔹 Payment Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {payments.map((payment, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl p-5 sm:p-6 border backdrop-blur-md
              ${payment.status === "Paid" ? "border-green-500/30" : "border-red-500/30"}
              bg-gradient-to-br from-[#141414]/90 to-[#0e0e0e]/80 shadow-lg 
              hover:shadow-yellow-400/20 hover:scale-[1.03] transition-all duration-500`}
          >
            {/* Glow Background */}
            <div
              className={`absolute inset-0 blur-xl opacity-20 ${
                payment.status === "Paid" ? "bg-green-400/40" : "bg-red-400/40"
              }`}
            ></div>

            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Amount */}
              <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-3">
                ₹{payment.amount} /-
              </h2>

              {/* Info */}
              <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                <p>
                  <span className="font-semibold text-gray-200">📅 Date:</span>{" "}
                  {payment.date}
                </p>
                <p>
                  <span className="font-semibold text-gray-200">🧾 User ID:</span>{" "}
                  {payment.userId}
                </p>
              </div>

              {/* Status */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                {payment.status === "Paid" ? (
                  <div className="flex items-center gap-2 text-green-400 font-semibold text-sm sm:text-base">
                    <CheckCircle size={18} />
                    <span>Paid</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-400 font-semibold text-sm sm:text-base">
                    <Clock size={18} />
                    <span>Pending</span>
                  </div>
                )}

                <span
                  className={`px-3 py-1 text-xs sm:text-sm rounded-full font-bold tracking-wide ${
                    payment.status === "Paid"
                      ? "bg-green-500/20 text-green-300 border border-green-400/30"
                      : "bg-red-500/20 text-red-300 border border-red-400/30"
                  }`}
                >
                  {payment.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Decorative Bottom Line */}
      <div className="mt-14 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />
    </div>
  );
};

export default PaymentApproved;
