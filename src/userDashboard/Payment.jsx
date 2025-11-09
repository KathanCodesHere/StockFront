"use client";
import React from "react";
import { FaShieldAlt, FaMoneyBillWave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const policies = [
    {
      id: 1,
      text: "As part of a secure payment, your credit card number, expiry date, and cryptogram are encrypted during transmission to protect you and ensure that no data flows in the clear via the internet.",
    },
    {
      id: 2,
      text: "The country of origin is the country you come from in general; it is the country of nationality.",
    },
    {
      id: 3,
      text: "It guarantees secure online payment that ensures the protection of every transaction and customer data from fraud and other incidents of unauthorized access.",
    },
    {
      id: 4,
      text: "Right now, we are accepting payments directly. For some security reasons, we are not providing online services at the moment.",
    },
  ];

  return (
    <div className="bg-[#0b0b0b] min-h-screen text-white px-4 sm:px-6 lg:px-10 py-8 flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-8 text-center sm:text-left">
        <FaShieldAlt className="text-yellow-400 text-4xl sm:text-5xl" />
        <h1 className="text-2xl sm:text-3xl font-semibold text-yellow-300">
          Policy & Terms & Conditions
        </h1>
      </div>

      {/* Content Box */}
      <div className="bg-[#151515] border border-yellow-400/60 rounded-2xl p-6 sm:p-8 shadow-lg w-full max-w-3xl hover:scale-[1.01] transition-transform duration-300">
        <div className="space-y-5">
          {policies.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <p className="text-yellow-400 font-semibold text-base sm:text-lg">
                {item.id}.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          <button
            onClick={() => navigate("/payin")}
            className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-6 py-2 sm:px-8 sm:py-3 rounded-md font-semibold text-sm sm:text-base hover:bg-yellow-300 transition-all duration-300 shadow-md w-full sm:w-auto"
          >
            <FaMoneyBillWave className="text-lg" /> Pay-In
          </button>

          <button
            onClick={() => navigate("/payout")}
            className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-6 py-2 sm:px-8 sm:py-3 rounded-md font-semibold text-sm sm:text-base hover:bg-yellow-300 transition-all duration-300 shadow-md w-full sm:w-auto"
          >
            <FaMoneyBillWave className="text-lg" /> Pay-Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
