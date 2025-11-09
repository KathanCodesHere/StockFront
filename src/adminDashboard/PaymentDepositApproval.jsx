"use client";
import React, { useState } from "react";
import { CheckCircle2, XCircle, Eye, IndianRupee } from "lucide-react";

const PaymentDepositApproval = () => {
  const [deposits, setDeposits] = useState([
    {
      id: 1,
      clientId: "CXM2133210",
      amount: 5000,
      screenshot: "/nifty.png",
      status: "Pending",
    },
    {
      id: 2,
      clientId: "CXM2133215",
      amount: 12000,
      screenshot: "/deposit2.jpg",
      status: "Pending",
    },
    {
      id: 3,
      clientId: "CXM2133222",
      amount: 3000,
      screenshot: "/deposit3.jpg",
      status: "Pending",
    },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleAction = (id, action) => {
    setDeposits((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: action } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#111827] px-4 sm:px-6 lg:px-8 py-8 text-white font-[Poppins]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 border-b border-yellow-400/30 pb-5 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-wide mb-3 sm:mb-0">
          💰 Payment Deposit Approvals
        </h1>
      </div>

      {/* Deposit Cards Grid */}
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {deposits.map((deposit) => (
          <div
            key={deposit.id}
            className="relative group bg-[#111] border border-yellow-400/30 rounded-2xl p-5 sm:p-6 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:shadow-[0_0_25px_rgba(255,215,0,0.25)] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Card Header */}
            <div className="mb-4 space-y-3">
              <div className="flex justify-between items-center flex-wrap text-sm sm:text-base">
                <span className="text-gray-400">Client ID</span>
                <span className="text-yellow-400 font-semibold tracking-wide break-all">
                  {deposit.clientId}
                </span>
              </div>

              <div className="flex justify-between items-center flex-wrap text-sm sm:text-base">
                <span className="text-gray-400">Deposit Amount</span>
                <span className="text-lg sm:text-xl font-bold text-green-400 flex items-center gap-1">
                  <IndianRupee size={17} /> {deposit.amount.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Screenshot Section */}
            <div
              className="relative group cursor-pointer rounded-xl overflow-hidden border border-yellow-400/30"
              onClick={() => setSelectedImage(deposit.screenshot)}
            >
              <img
                src={deposit.screenshot}
                alt="Payment Screenshot"
                className="object-cover w-full h-40 sm:h-44 md:h-48 rounded-xl transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <Eye className="text-yellow-400 w-6 h-6 sm:w-7 sm:h-7" />
              </div>
            </div>

            {/* Status + Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <span
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border text-center ${
                  deposit.status === "Approved"
                    ? "bg-green-500/20 border-green-500/40 text-green-400"
                    : deposit.status === "Rejected"
                    ? "bg-red-500/20 border-red-500/40 text-red-400"
                    : "bg-yellow-500/20 border-yellow-500/40 text-yellow-400"
                }`}
              >
                {deposit.status}
              </span>

              <div className="flex flex-wrap justify-center sm:justify-end gap-2">
                <button
                  onClick={() => handleAction(deposit.id, "Approved")}
                  className="flex items-center justify-center gap-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-semibold shadow-md hover:shadow-green-500/20 transition-all"
                >
                  <CheckCircle2 size={16} /> Approve
                </button>

                <button
                  onClick={() => handleAction(deposit.id, "Rejected")}
                  className="flex items-center justify-center gap-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-semibold shadow-md hover:shadow-red-500/20 transition-all"
                >
                  <XCircle size={16} /> Reject
                </button>
              </div>
            </div>

            {/* Glow Line Animation */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400/40 to-transparent animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 transition-all p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative animate-fadeIn">
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[75vh] sm:max-h-[80vh] max-w-full rounded-lg border border-yellow-400/50 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 shadow-md"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentDepositApproval;
