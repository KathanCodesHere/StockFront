"use client";
import React from "react";

const Payout = () => {
  const bankAccounts = [
    {
      bankName: "HDFC Bank",
      accountNumber: "05031000005876",
      ifsc: "HDFC0000503",
    },
    {
      bankName: "State Bank of India",
      accountNumber: "32165498732",
      ifsc: "SBIN0004201",
    },
    {
      bankName: "ICICI Bank",
      accountNumber: "231008745123",
      ifsc: "ICIC0000671",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-4 sm:px-6 lg:px-10 py-10 flex justify-center items-start">
      <div className="bg-[#151515] border border-yellow-400/60 rounded-2xl shadow-2xl w-full max-w-4xl p-6 sm:p-8 lg:p-10">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-8 text-center">
          Account Details
        </h1>

        {/* Client Info */}
        <div className="bg-[#1a1a1a] rounded-xl p-4 sm:p-5 mb-6 shadow-md">
          <p className="text-gray-300 mb-2 text-sm sm:text-base">
            <span className="text-yellow-400 font-semibold">Client ID:</span>{" "}
            CXM2133210
          </p>
          <p className="text-gray-300 text-sm sm:text-base">
            <span className="text-yellow-400 font-semibold">Client Name:</span>{" "}
            Sukhvinder Singh
          </p>
        </div>

        {/* Bank Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {bankAccounts.map((account, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl p-5 shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
            >
              <p className="text-gray-300 text-sm sm:text-base mb-1">
                <span className="text-yellow-400 font-semibold">Bank:</span>{" "}
                {account.bankName}
              </p>
              <p className="text-gray-300 text-sm sm:text-base mb-1">
                <span className="text-yellow-400 font-semibold">
                  Account No.:
                </span>{" "}
                {account.accountNumber}
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                <span className="text-yellow-400 font-semibold">IFSC:</span>{" "}
                {account.ifsc}
              </p>
            </div>
          ))}
        </div>

        {/* Current Balance */}
        <div className="bg-[#1a1a1a] border border-yellow-500/40 p-5 rounded-xl mb-8 text-center shadow-md">
          <p className="text-yellow-300 text-lg sm:text-xl font-semibold">
            Current Balance: ₹ 4,53,892
          </p>
        </div>

        {/* Notes Section */}
        <div className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed space-y-3 mb-8">
          <p>
            <span className="text-yellow-400 font-semibold">Note 1:</span> You
            can withdraw a minimum of ₹500. Funds are sent within 24 hours.
          </p>
          <p>
            <span className="text-yellow-400 font-semibold">Note 2:</span> 30%
            profit must be paid before withdrawal.
          </p>
          <p>
            <span className="text-yellow-400 font-semibold">Note 3:</span> Daily
            profit is 5%–40% of investment. 18% STT charge applies.
          </p>
        </div>

        {/* Withdraw Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
            <label
              htmlFor="amount"
              className="text-yellow-400 font-medium whitespace-nowrap text-sm sm:text-base"
            >
              Enter Amount ₹:
            </label>
            <input
              id="amount"
              type="number"
              placeholder="500"
              className="w-full sm:w-28 px-3 py-2 bg-[#0b0b0b] border border-yellow-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-center text-sm sm:text-base"
            />
          </div>

          <button className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400 text-black font-semibold px-6 sm:px-8 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm sm:text-base">
            Withdraw Funds
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payout;
