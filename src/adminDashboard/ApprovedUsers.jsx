"use client";
import React, { useState } from "react";
import { Pencil, Wallet, IndianRupee, Save, X } from "lucide-react";

const ApprovedUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, clientId: "CXM2133210", walletBalance: 12500 },
    { id: 2, clientId: "CXM2133221", walletBalance: 8300 },
    { id: 3, clientId: "CXM2133250", walletBalance: 20500 },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [newBalance, setNewBalance] = useState("");

  const handleSave = () => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === selectedUser.id
          ? { ...user, walletBalance: parseInt(newBalance) }
          : user
      )
    );
    setSelectedUser(null);
    setNewBalance("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a] text-white p-4 sm:p-6 md:p-8 font-[Poppins]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-yellow-400/30 pb-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-wide mb-2 sm:mb-0">
          ✅ Approved Users
        </h1>
      </div>

      {/* User Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="relative bg-[#111] border border-yellow-400/30 rounded-2xl p-4 sm:p-6 shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:shadow-[0_0_25px_rgba(255,215,0,0.25)] hover:scale-[1.02] transition-all duration-300"
          >
            {/* Glow Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400/50 to-transparent animate-pulse rounded-t-xl"></div>

            {/* Client Info */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-xs text-gray-400">Client ID</span>
                <span className="text-yellow-400 font-semibold text-sm sm:text-xs">
                  {user.clientId}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-xs text-gray-400">Wallet Balance</span>
                <span className="text-green-400 font-semibold flex items-center gap-1 text-sm sm:text-xs">
                  <Wallet size={16} /> ₹{user.walletBalance.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Edit Button */}
            <div className="mt-4 sm:mt-6 flex justify-end">
              <button
                onClick={() => {
                  setSelectedUser(user);
                  setNewBalance(user.walletBalance);
                }}
                className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm shadow-md hover:shadow-yellow-500/30 transition-all"
              >
                <Pencil size={16} /> Edit
              </button>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('/graph-pattern.png')] bg-cover bg-center rounded-2xl pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Modal for Editing Wallet */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 px-4">
          <div className="bg-[#111] border border-yellow-400/40 rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-[0_0_30px_rgba(255,215,0,0.2)] relative">
            <button
              className="absolute top-3 right-3 text-red-500 hover:text-red-400"
              onClick={() => setSelectedUser(null)}
            >
              <X size={22} />
            </button>

            <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-5 sm:mb-6">
              ✏️ Edit Wallet Balance
            </h2>

            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-1">Client ID</label>
              <input
                type="text"
                value={selectedUser.clientId}
                disabled
                className="w-full bg-[#1a1a1a] border border-yellow-400/30 text-yellow-300 rounded-md px-2 sm:px-3 py-2 text-sm sm:text-base"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-1">New Wallet Balance</label>
              <div className="flex items-center bg-[#1a1a1a] border border-yellow-400/30 rounded-md px-2 sm:px-3">
                <IndianRupee size={16} className="text-yellow-400" />
                <input
                  type="number"
                  value={newBalance}
                  onChange={(e) => setNewBalance(e.target.value)}
                  className="w-full bg-transparent outline-none text-green-400 px-2 py-2 text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 mt-2">
              <button
                onClick={() => setSelectedUser(null)}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-4 sm:px-5 py-2 rounded-md font-semibold shadow-md hover:shadow-green-500/20 transition-all text-sm sm:text-base"
              >
                <Save size={16} /> Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApprovedUsers;
