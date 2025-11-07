import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    gender: "",
    dob: "",
    aadhar: "",
    pan: "",
    state: "",
    account: "",
    city: "",
    password: "",
    confirmPassword: "",
    address: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0c0c0c] py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-[#111] border border-[#222] text-[#e6e6e6] shadow-lg rounded-lg p-10"
      >
        <h2 className="text-2xl font-semibold text-center mb-10 text-[#FFD447] tracking-wide uppercase">
          Register New Customer Demat Account
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Full Name */}
          <div>
            <label className="text-sm">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md p-3 focus:outline-none focus:border-[#FFD447]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm">Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email ID"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md p-3 focus:outline-none focus:border-[#FFD447]"
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="text-sm">Mobile Number *</label>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md p-3 focus:outline-none focus:border-[#FFD447]"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm">Gender *</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md p-3 focus:border-[#FFD447]"
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* DOB */}
          <div>
            <label className="text-sm">DOB *</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md p-3 focus:border-[#FFD447]"
              required
            />
          </div>

          {/* Aadhar */}
          <div>
            <label className="text-sm">Aadhar Number *</label>
            <input
              type="text"
              name="aadhar"
              placeholder="Enter your Aadhar number"
              value={formData.aadhar}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md p-3 focus:border-[#FFD447]"
              required
            />
          </div>

          {/* PAN */}
          <div>
            <label className="text-sm">PAN Number *</label>
            <input
              type="text"
              name="pan"
              placeholder="Enter your PAN number"
              value={formData.pan}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md p-3 focus:border-[#FFD447]"
              required
            />
          </div>

          {/* State */}
          <div>
            <label className="text-sm">State *</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md p-3 focus:border-[#FFD447]"
              required
            >
              <option value="">Select State</option>
              <option>Maharashtra</option>
              <option>Karnataka</option>
              <option>Delhi</option>
              <option>Gujarat</option>
            </select>
          </div>

          {/* Account */}
          <div>
            <label className="text-sm">New Account *</label>
            <select
              name="account"
              value={formData.account}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md p-3 focus:border-[#FFD447]"
              required
            >
              <option value="">Select Account</option>
              <option>Savings</option>
              <option>Trading</option>
              <option>Demat</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="text-sm">City *</label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md p-3 focus:border-[#FFD447]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm">Password *</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md p-3 focus:border-[#FFD447]"
              required
            />
          </div>

          {/* Confirm */}
          <div>
            <label className="text-sm">Confirm Password *</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-md p-3 focus:border-[#FFD447]"
              required
            />
          </div>

        </div>

        {/* Address */}
        <div className="mt-6">
          <label className="text-sm">Address *</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="w-full bg-[#1a1a1a] border border-[#333] rounded-md p-3 h-24 focus:border-[#FFD447]"
            required
          ></textarea>
        </div>

        {/* Upload */}
        <div className="mt-6">
          <label className="text-sm">Upload Aadhar / PAN *</label>
          <input
            type="file"
            name="document"
            onChange={handleChange}
            className="w-full bg-[#1a1a1a] border border-[#333] rounded-md p-3 focus:border-[#FFD447]"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-6 mt-8">
          <button
            type="button"
            className="px-6 py-2 rounded-md border border-[#666] text-[#e6e6e6] hover:text-[#FFD447]"
          >
            Previous
          </button>

          <button
            type="submit"
            className="px-6 py-2 rounded-md font-semibold bg-gradient-to-r from-[#F5D37E] to-[#E0A627] text-[#0c0c0c] hover:opacity-90"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
