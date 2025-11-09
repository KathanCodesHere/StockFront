"use client";
import React, { useState } from "react";
import { FaQrcode, FaPaperclip } from "react-icons/fa";

const PayIn = () => {
  const [screenshot, setScreenshot] = useState(null);

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-4 sm:px-6 lg:px-10 py-8 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8 text-center sm:text-left">
        <FaQrcode className="text-yellow-400 text-4xl sm:text-5xl" />
        <h1 className="text-2xl sm:text-3xl font-semibold text-yellow-300">
          Pay-In
        </h1>
      </div>

      {/* Main Container */}
      <div className="bg-[#151515] border border-yellow-400/60 rounded-2xl p-6 sm:p-8 shadow-lg w-full max-w-6xl flex flex-col lg:flex-row justify-between gap-10 hover:scale-[1.01] transition-transform duration-300">
        {/* Left Section - QR and Instructions */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
          <img
            src="/paytm.jpeg"
            alt="Paytm QR"
            className="mb-6 rounded-lg border border-yellow-400/40 w-48 sm:w-56 h-48 sm:h-56 object-contain mx-auto lg:mx-0"
          />

          <div className="text-gray-300 text-sm sm:text-base space-y-3 w-full max-w-sm">
            <div>
              <span className="text-yellow-400 font-semibold">(Step 1):</span>{" "}
              Scan the QR code & make payment using this UPI ID.
            </div>
            <div>
              <span className="text-yellow-400 font-semibold">(Step 2):</span>{" "}
              After completing payment, fill out the form on the right side.
            </div>
            <div>
              <span className="text-yellow-400 font-semibold">(Step 3):</span>{" "}
              Take a screenshot of your payment confirmation and attach it below.
            </div>
            <div className="pt-2">
              <span className="text-yellow-400 font-semibold">Note:</span> Your
              deposit amount will reflect within{" "}
              <span className="text-yellow-400 font-semibold">
                10–15 minutes.
              </span>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-[#1e1e1e] rounded-xl p-5 sm:p-6 border border-yellow-400/40 shadow-inner w-full lg:w-1/2">
          <h2 className="text-yellow-300 font-semibold mb-5 text-center text-lg sm:text-xl">
            Submit This Form After UPI Payment
          </h2>

          <form className="space-y-4 text-left">
            {/* Client ID */}
            <div>
              <label className="block text-yellow-400 mb-1 text-sm">
                Your Client ID:
              </label>
              <input
                type="text"
                placeholder="Enter your client ID"
                className="w-full bg-[#0b0b0b] border border-yellow-400/40 rounded-md px-3 py-2 sm:py-2.5 text-gray-200 text-sm sm:text-base focus:outline-none focus:border-yellow-400"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="block text-yellow-400 mb-1 text-sm">
                Amount (₹):
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full bg-[#0b0b0b] border border-yellow-400/40 rounded-md px-3 py-2 sm:py-2.5 text-gray-200 text-sm sm:text-base focus:outline-none focus:border-yellow-400"
              />
            </div>

            {/* Reference Number */}
            <div>
              <label className="block text-yellow-400 mb-1 text-sm">
                UTR / UPI Reference Number:
              </label>
              <input
                type="text"
                placeholder="Enter UTR/UPI reference number"
                className="w-full bg-[#0b0b0b] border border-yellow-400/40 rounded-md px-3 py-2 sm:py-2.5 text-gray-200 text-sm sm:text-base focus:outline-none focus:border-yellow-400"
              />
            </div>

            {/* Screenshot Upload */}
            <div>
              <label className="block text-yellow-400 mb-1 text-sm">
                Attach Payment Screenshot:
              </label>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <label className="flex items-center justify-center gap-2 cursor-pointer bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition text-sm font-medium w-full sm:w-auto">
                  <FaPaperclip /> Browse
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setScreenshot(e.target.files[0])}
                  />
                </label>
                {screenshot && (
                  <span className="text-gray-300 text-xs truncate max-w-[180px] sm:max-w-[200px]">
                    {screenshot.name}
                  </span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-3">
              <button
                type="submit"
                className="bg-yellow-400 text-black px-6 py-2 sm:px-8 sm:py-2.5 rounded-md font-semibold text-sm sm:text-base hover:bg-yellow-300 transition-all shadow-md w-full sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PayIn;
