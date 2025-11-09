"use client";
import React, { useState } from "react";
import { CheckCircle2, XCircle, Wallet } from "lucide-react";

const WithdrawalApproval = () => {
  const [withdrawals, setWithdrawals] = useState([
    { id: 1, clientId: "CXM2133210", walletBalance: 12500, status: "Pending" },
    { id: 2, clientId: "CXM2133221", walletBalance: 8300, status: "Pending" },
    { id: 3, clientId: "CXM2133250", walletBalance: 20500, status: "Pending" },
  ]);

  const handleAction = (id, action) => {
    setWithdrawals((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: action } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a] p-4 sm:p-6 md:p-8 text-white font-[Poppins]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 sm:mb-10 border-b border-yellow-400/30 pb-4 sm:pb-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-wide text-center sm:text-left">
          💸 Withdrawal Approvals
        </h1>
      </div>

      {/* Approval Cards */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {withdrawals.map((withdrawal) => (
          <div
            key={withdrawal.id}
            className="relative group bg-[#111] border border-yellow-400/30 rounded-2xl p-4 sm:p-6 shadow-[0_0_25px_rgba(255,215,0,0.1)] 
              hover:shadow-[0_0_25px_rgba(255,215,0,0.25)] hover:scale-[1.02] sm:hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Glow Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400/50 to-transparent animate-pulse"></div>

            {/* Client Info */}
            <div className="space-y-3 mb-5">
              <div className="flex justify-between items-center text-sm sm:text-base">
                <span className="text-gray-400">Client ID</span>
                <span className="text-yellow-400 font-semibold">
                  {withdrawal.clientId}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm sm:text-base">
                <span className="text-gray-400">Wallet Balance</span>
                <span className="text-green-400 font-semibold flex items-center gap-1">
                  <Wallet size={16} /> ₹{withdrawal.walletBalance.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Status + Buttons */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mt-auto">
              <span
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border self-start sm:self-auto ${
                  withdrawal.status === "Approved"
                    ? "bg-green-500/20 border-green-500/40 text-green-400"
                    : withdrawal.status === "Rejected"
                    ? "bg-red-500/20 border-red-500/40 text-red-400"
                    : "bg-yellow-500/20 border-yellow-500/40 text-yellow-400"
                }`}
              >
                {withdrawal.status}
              </span>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleAction(withdrawal.id, "Approved")}
                  className="flex items-center justify-center gap-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white 
                    px-3 py-2 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-semibold shadow-md hover:shadow-green-500/20 transition-all w-full sm:w-auto"
                >
                  <CheckCircle2 size={16} /> Approve
                </button>

                <button
                  onClick={() => handleAction(withdrawal.id, "Rejected")}
                  className="flex items-center justify-center gap-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white 
                    px-3 py-2 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-semibold shadow-md hover:shadow-red-500/20 transition-all w-full sm:w-auto"
                >
                  <XCircle size={16} /> Reject
                </button>
              </div>
            </div>

            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('/graph-pattern.png')] bg-cover bg-center rounded-2xl pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WithdrawalApproval;
