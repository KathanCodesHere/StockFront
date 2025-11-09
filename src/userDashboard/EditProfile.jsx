"use client";
import React, { useState } from "react";
import { FaUserEdit, FaLock, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Static demo data
  const [formData, setFormData] = useState({
    name: "Sukhvinder Singh",
    username: "Sukhvinder@3210",
    city: "New Delhi",
    gender: "Male",
    dob: "1959-09-22",
    state: "Uttar Pradesh",
    address: "NA",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    verifyPassword: "",
  });

  const [contactData, setContactData] = useState({
    phone: "+91 9876543210",
    email: "support@stockmaster.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (activeStep === 1)
      setFormData((prev) => ({ ...prev, [name]: value }));
    else if (activeStep === 2)
      setPasswords((prev) => ({ ...prev, [name]: value }));
    else setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => navigate("/profile");

  const handlePersonalSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const { currentPassword, newPassword, verifyPassword } = passwords;
    const correctCurrentPassword = "123456"; // demo

    if (currentPassword !== correctCurrentPassword) {
      setErrorMessage("❌ Current password does not match!");
      return;
    }

    if (newPassword !== verifyPassword) {
      setErrorMessage("❌ New password and Verify password do not match!");
      return;
    }

    setShowSuccess(true);
    setPasswords({ currentPassword: "", newPassword: "", verifyPassword: "" });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const StepLabel = ["Personal Info", "Change Password", "Manage Contact"];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white flex flex-col items-center px-4 sm:px-6 md:px-10 py-8 sm:py-12">
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-600/90 px-5 sm:px-6 py-3 rounded-2xl text-sm sm:text-lg mb-6 text-center animate-bounce w-full max-w-sm">
          ✅ Details updated successfully!
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="bg-red-600/90 px-5 sm:px-6 py-3 rounded-2xl text-sm sm:text-lg mb-6 text-center animate-bounce w-full max-w-sm">
          {errorMessage}
        </div>
      )}

      {/* Stepper */}
      <div className="flex flex-col sm:flex-row justify-center items-center mb-8 sm:mb-12 w-full max-w-3xl gap-4 sm:gap-0">
        {StepLabel.map((label, idx) => {
          const step = idx + 1;
          const isActive = activeStep === step;
          return (
            <div
              key={label}
              className="flex items-center w-full cursor-pointer"
              onClick={() => setActiveStep(step)}
            >
              <div className="flex flex-col items-center w-full transition duration-300">
                <div
                  className={`rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-sm sm:text-base ${
                    isActive
                      ? "bg-yellow-400 text-black font-bold shadow-lg"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {step}
                </div>
                <p
                  className={`mt-2 text-xs sm:text-sm text-center ${
                    isActive ? "text-yellow-300 font-semibold" : "text-gray-400"
                  }`}
                >
                  {label}
                </p>
              </div>
              {step !== StepLabel.length && (
                <div className="hidden sm:block flex-1 h-[2px] bg-gray-600 mx-2"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Form Card */}
      <div className="bg-[#1a1a1a] border border-yellow-400/40 rounded-3xl shadow-lg w-full max-w-4xl p-5 sm:p-8 space-y-8">
        {/* Step 1: Personal Info */}
        {activeStep === 1 && (
          <>
            <div className="flex items-center gap-3 mb-4">
              <FaUserEdit className="text-yellow-400 text-2xl sm:text-3xl" />
              <h2 className="text-yellow-300 text-xl sm:text-2xl font-semibold">
                Personal Information
              </h2>
            </div>

            <form onSubmit={handlePersonalSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { label: "Name", name: "name" },
                  { label: "User Name", name: "username" },
                  { label: "City", name: "city" },
                  { label: "Gender", name: "gender" },
                  { label: "Date of Birth", name: "dob", type: "date" },
                  { label: "State", name: "state" },
                  { label: "Address", name: "address" },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col">
                    <label className="text-gray-300 mb-2 text-sm sm:text-base">
                      {field.label}
                    </label>
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="bg-[#222] border border-gray-600 rounded-xl px-4 py-2 sm:py-3 focus:outline-none focus:border-yellow-400 text-gray-200 text-sm sm:text-base"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-4 sm:gap-6 mt-8">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-600 hover:bg-gray-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold transition shadow-md text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold transition shadow-md text-sm sm:text-base"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}

        {/* Step 2: Change Password */}
        {activeStep === 2 && (
          <>
            <div className="flex items-center gap-3 mb-4">
              <FaLock className="text-yellow-400 text-2xl sm:text-3xl" />
              <h2 className="text-yellow-300 text-xl sm:text-2xl font-semibold">
                Change Password
              </h2>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { label: "Current Password", name: "currentPassword" },
                  { label: "New Password", name: "newPassword" },
                  { label: "Verify Password", name: "verifyPassword" },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col">
                    <label className="text-gray-300 mb-2 text-sm sm:text-base">
                      {field.label}
                    </label>
                    <input
                      type="password"
                      name={field.name}
                      value={passwords[field.name]}
                      onChange={handleChange}
                      className="bg-[#222] border border-gray-600 rounded-xl px-4 py-2 sm:py-3 focus:outline-none focus:border-yellow-400 text-gray-200 text-sm sm:text-base"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-4 sm:gap-6 mt-8">
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className="bg-gray-600 hover:bg-gray-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold transition shadow-md text-sm sm:text-base"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold transition shadow-md text-sm sm:text-base"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}

        {/* Step 3: Manage Contact */}
        {activeStep === 3 && (
          <>
            <div className="flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-yellow-400 text-2xl sm:text-3xl" />
              <h2 className="text-yellow-300 text-xl sm:text-2xl font-semibold">
                Manage Contact
              </h2>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col">
                  <label className="text-gray-300 mb-2 text-sm sm:text-base">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={contactData.phone}
                    onChange={handleChange}
                    className="bg-[#222] border border-gray-600 rounded-xl px-4 py-2 sm:py-3 focus:outline-none focus:border-yellow-400 text-gray-200 text-sm sm:text-base"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-300 mb-2 text-sm sm:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactData.email}
                    onChange={handleChange}
                    className="bg-[#222] border border-gray-600 rounded-xl px-4 py-2 sm:py-3 focus:outline-none focus:border-yellow-400 text-gray-200 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-4 sm:gap-6 mt-8">
                <button
                  type="button"
                  onClick={() => setActiveStep(2)}
                  className="bg-gray-600 hover:bg-gray-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold transition shadow-md text-sm sm:text-base"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold transition shadow-md text-sm sm:text-base"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
