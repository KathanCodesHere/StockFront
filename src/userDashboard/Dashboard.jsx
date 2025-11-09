"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRupeeSign, FaUserCircle, FaUniversity, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const user = {
    name: "Sukhvinder Singh",
    funds: 453892,
    email: "sukhvinder@example.com",
    phone: "+91 9876543210",
    accountType: "Demat Account",
  };

  const bankDetails = [
    { bankName: "HDFC Bank", accountNumber: "05031000005876", ifsc: "HDFC0000503" },
    { bankName: "State Bank of India", accountNumber: "32165498732", ifsc: "SBIN0004201" },
    { bankName: "ICICI Bank", accountNumber: "231008745123", ifsc: "ICIC0000671" },
  ];

  const handleAddFunds = () => navigate("/PayIn");
  const handlePayout = () => navigate("/PayOut");
  const handleViewTrades = () => navigate("/position");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a] text-white p-4 sm:p-6 md:p-8 lg:p-10 space-y-8 transition-all">
      
      {/* 🔹 Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-center md:text-left px-5 py-3 rounded-lg shadow-lg text-base sm:text-lg md:text-xl">
        Welcome, {user.name}
      </div>

      {/* 🔹 Main Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        
        {/* Available Funds */}
        <div className="bg-[#151515] border border-yellow-400/60 rounded-2xl p-5 sm:p-6 text-center hover:scale-[1.03] hover:shadow-yellow-400/20 transition-all duration-500">
          <FaRupeeSign className="text-green-400 text-3xl sm:text-4xl mx-auto mb-2" />
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300">
            ₹ {user.funds.toLocaleString()}
          </h2>
          <p className="text-gray-400 text-sm mt-1">Available Funds</p>
          <button
            onClick={handleAddFunds}
            className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Pay In
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-[#151515] border border-yellow-400/60 rounded-2xl p-5 sm:p-6 text-center hover:scale-[1.03] hover:shadow-yellow-400/20 transition-all duration-500">
          <div className="flex justify-center mb-4">
            <div className="bg-yellow-400/90 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <FaUserCircle className="text-black text-4xl sm:text-5xl" />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-yellow-300">{user.name}</h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-3">{user.accountType}</p>
          <div className="text-gray-300 text-xs sm:text-sm space-y-1">
            <p><span className="text-yellow-400">Email:</span> {user.email}</p>
            <p><span className="text-yellow-400">Phone:</span> {user.phone}</p>
          </div>
        </div>

        {/* Payout Card */}
        <div className="bg-[#151515] border border-yellow-400/60 rounded-2xl p-5 sm:p-6 text-center hover:scale-[1.03] hover:shadow-yellow-400/20 transition-all duration-500">
          <div className="bg-yellow-400/80 p-3 sm:p-4 rounded-full mx-auto mb-3 w-fit">
            <FaRupeeSign className="text-black text-xl sm:text-2xl" />
          </div>
          <h3 className="text-yellow-300 font-semibold text-base sm:text-lg">Request For Payout</h3>
          <p className="text-gray-400 text-xs sm:text-sm mt-1 mb-3">
            Get Payment Instantly into your Bank Account
          </p>
          <button
            onClick={handlePayout}
            className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Pay Out
          </button>
        </div>
      </div>

      {/* 🔹 Bank Details Section */}
      <div className="bg-[#151515] border border-yellow-400/60 rounded-2xl p-5 sm:p-6 hover:shadow-yellow-400/20 transition-all duration-500">
        <h2 className="text-yellow-300 text-lg sm:text-xl font-semibold mb-4 border-b border-yellow-400/30 pb-2">
          Linked Bank Accounts
        </h2>
        <div className="space-y-3">
          {bankDetails.map((bank, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#202020] p-4 rounded-xl hover:bg-[#2a2a2a] transition"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-yellow-400/90 p-2 sm:p-3 rounded-full">
                  <FaUniversity className="text-black text-lg sm:text-xl" />
                </div>
                <div>
                  <h3 className="text-yellow-300 font-semibold text-sm sm:text-base">
                    {bank.bankName}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    <span className="text-yellow-400">A/C:</span> {bank.accountNumber}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    <span className="text-yellow-400">IFSC:</span> {bank.ifsc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Trade Reports */}
      <div className="bg-[#151515] border border-yellow-400/60 rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center hover:shadow-yellow-400/20 hover:scale-[1.02] transition-all duration-500">
        <div className="bg-yellow-400/90 p-3 sm:p-4 rounded-full mb-3">
          <FaChartLine className="text-black text-xl sm:text-2xl" />
        </div>
        <h3 className="text-yellow-300 font-semibold text-base sm:text-lg">View Your All Trades</h3>
        <p className="text-gray-400 text-xs sm:text-sm mt-1 mb-3">
          Check Your Complete Trade Reports Instantly
        </p>
        <button
          onClick={handleViewTrades}
          className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
        >
          Click Here
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
