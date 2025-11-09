import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaEnvelope, FaPhone, FaUniversity } from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();

  // Mock user data
  const user = {
    name: "Sukhvinder Singh",
    accountType: "Demat Account",
    email: "sukhvinder@example.com",
    phone: "+91 9876543210",
    funds: 453892,
  };

  const bankDetails = [
    { bankName: "HDFC Bank", accountNumber: "05031000005876", ifsc: "HDFC0000503" },
    { bankName: "State Bank of India", accountNumber: "32165498732", ifsc: "SBIN0004201" },
    { bankName: "ICICI Bank", accountNumber: "231008745123", ifsc: "ICIC0000671" },
  ];

  const accountDetails = {
    id: "CXM2133210",
    pan: "AATPS2705D",
    aadhar: "962584078966",
    city: "New Delhi",
    state: "Uttar Pradesh",
    address: "NA",
    account: "Demat Account",
    dob: "1959-09-22",
    registerDate: "2025-10-13 09:10:25",
  };

  // Navigation handlers
  const handleAddFunds = () => navigate("/PayIn");
  const handleBackToDashboard = () => navigate("/Dashboard");
  const handleEditData = () => navigate("/edit-profile");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b0b] to-[#111111] text-white px-4 sm:px-6 md:px-10 py-10">
      {/* Profile Card */}
      <div className="max-w-5xl mx-auto bg-[#1a1a1a]/90 border border-yellow-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-center flex flex-col items-center space-y-4">
        <div className="bg-yellow-400/90 rounded-full w-28 sm:w-32 md:w-40 h-28 sm:h-32 md:h-40 flex items-center justify-center shadow-lg">
          <FaUserCircle className="text-black text-6xl sm:text-7xl md:text-8xl" />
        </div>

        <h1 className="text-yellow-300 text-2xl sm:text-3xl md:text-4xl font-bold">{user.name}</h1>
        <p className="text-gray-400 text-base sm:text-lg">{user.accountType}</p>

        <div className="flex flex-col sm:flex-row sm:space-x-6 items-center text-gray-300 text-sm sm:text-base mt-3 space-y-1 sm:space-y-0">
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" /> {user.email}
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-yellow-400" /> {user.phone}
          </p>
        </div>

        <p className="mt-4 text-yellow-300 font-semibold text-lg sm:text-xl">
          Account Balance: ₹ {user.funds.toLocaleString()}
        </p>

        <button
          onClick={handleAddFunds}
          className="mt-4 bg-yellow-400 text-black px-8 sm:px-10 py-2.5 sm:py-3 rounded-2xl font-semibold hover:bg-yellow-300 transition shadow-md w-full sm:w-auto"
        >
          Add Funds
        </button>
      </div>

      {/* Bank Details */}
      <div className="max-w-5xl mx-auto bg-[#151515]/90 border border-yellow-400/30 rounded-3xl mt-10 p-5 sm:p-8 shadow-lg">
        <h2 className="text-yellow-300 text-xl sm:text-2xl font-semibold mb-5 text-center sm:text-left">
          Bank Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bankDetails.map((bank, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-[#202020] p-4 rounded-xl hover:bg-[#2a2a2a] transition shadow-md"
            >
              <FaUniversity className="text-yellow-400 text-2xl shrink-0" />
              <div className="text-gray-300 text-sm">
                <p className="font-semibold text-yellow-300">{bank.bankName}</p>
                <p>A/C: {bank.accountNumber}</p>
                <p>IFSC: {bank.ifsc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Account Details */}
      <div className="max-w-5xl mx-auto bg-[#151515]/90 border border-yellow-400/30 rounded-3xl mt-10 p-5 sm:p-8 shadow-lg">
        <h2 className="text-yellow-300 text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">
          Account Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-sm sm:text-base">
          {Object.entries(accountDetails).map(([key, value]) => (
            <p key={key}>
              <span className="text-yellow-400 font-medium capitalize">
                {key.replace(/([A-Z])/g, " $1")}:
              </span>{" "}
              {value}
            </p>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <button
          onClick={handleEditData}
          className="bg-yellow-400 text-black px-10 py-3 rounded-2xl font-semibold hover:bg-yellow-300 transition shadow-md w-full sm:w-auto"
        >
          Edit Data
        </button>
        <button
          onClick={handleBackToDashboard}
          className="bg-gray-700 text-white px-10 py-3 rounded-2xl font-semibold hover:bg-gray-600 transition shadow-md w-full sm:w-auto"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Profile;
