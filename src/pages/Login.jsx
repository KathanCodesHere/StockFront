import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      {/* Card */}
      <div className="bg-[#0E0E0E] w-full max-w-md p-10 rounded-xl shadow-[0_0_25px_rgba(255,215,0,0.3)] border border-[#2A2A2A]">
        
        {/* Logo / Title */}
        <h1 className="text-center text-white text-3xl font-semibold tracking-wider mb-8">
          <span className="text-[#FFD700]">C</span>xMeta
        </h1>

        {/* Username */}
        <label className="text-gray-300 text-sm">Username</label>
        <input
          type="text"
          className="w-full mt-1 mb-5 px-4 py-2 rounded-md bg-[#1A1A1A] border border-[#333] text-gray-200 focus:outline-none focus:border-[#FFD700]"
          placeholder="Enter Username"
        />

        {/* Password */}
        <label className="text-gray-300 text-sm">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          className="w-full mt-1 px-4 py-2 rounded-md bg-[#1A1A1A] border border-[#333] text-gray-200 focus:outline-none focus:border-[#FFD700]"
          placeholder="Enter Password"
        />

        {/* Show Password Checkbox */}
        <div className="flex items-center gap-2 mt-3 mb-6">
          <input
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
            className="accent-[#FFD700]"
          />
          <span className="text-gray-400 text-sm">Show Password</span>
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#FFD700] hover:bg-[#e6c200] text-black font-semibold py-2 rounded-md transition">
          Log In
        </button>

      </div>
    </div>
  );
};

export default Login;
