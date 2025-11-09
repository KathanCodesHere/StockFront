"use client";
import React, { useState } from "react";
import { CheckCircle, XCircle, Mail } from "lucide-react";

const ApproveUserId = () => {
  const [users, setUsers] = useState([
    { id: 1, email: "rahul.sharma@gmail.com", status: "Pending" },
    { id: 2, email: "priya.kapoor@gmail.com", status: "Pending" },
    { id: 3, email: "aman.verma@gmail.com", status: "Pending" },
    { id: 4, email: "sohan.sharma@gmail.com", status: "Pending" },
    { id: 5, email: "rohan.verma@gmail.com", status: "Pending" },
    { id: 6, email: "tushar.kapoor@gmail.com", status: "Pending" },
  ]);

  const handleAction = (id, action) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, status: action } : user
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white p-4 sm:p-8 font-sans">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-yellow-400 text-center sm:text-left">
        Approve User IDs
      </h1>

      {/* Table Container */}
      <div className="bg-[#1a1a1a] border border-yellow-400/30 rounded-2xl shadow-xl overflow-x-auto">
        <table className="w-full border-collapse text-sm sm:text-base">
          <thead className="bg-black/80 text-yellow-300">
            <tr>
              <th className="py-4 px-4 sm:px-6 text-left font-semibold">#</th>
              <th className="py-4 px-4 sm:px-6 text-left font-semibold">
                User Email
              </th>
              <th className="py-4 px-4 sm:px-6 text-left font-semibold">
                Status
              </th>
              <th className="py-4 px-4 sm:px-6 text-center font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="border-t border-gray-800 hover:bg-[#222] transition-colors"
              >
                <td className="py-4 px-4 sm:px-6 text-gray-300">{index + 1}</td>

                <td className="py-4 px-4 sm:px-6 flex items-center gap-2 sm:gap-3">
                  <Mail size={18} className="text-yellow-400 shrink-0" />
                  <span className="truncate">{user.email}</span>
                </td>

                <td className="py-4 px-4 sm:px-6">
                  {user.status === "Pending" && (
                    <span className="text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full text-sm">
                      Pending
                    </span>
                  )}
                  {user.status === "Approved" && (
                    <span className="text-green-400 bg-green-400/10 px-3 py-1 rounded-full text-sm">
                      Approved
                    </span>
                  )}
                  {user.status === "Rejected" && (
                    <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm">
                      Rejected
                    </span>
                  )}
                </td>

                <td className="py-4 px-4 sm:px-6 text-center">
                  {user.status === "Pending" ? (
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={() => handleAction(user.id, "Approved")}
                        className="flex items-center justify-center gap-1 bg-green-500/20 border border-green-500 text-green-300 px-3 sm:px-4 py-1.5 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 w-full sm:w-auto"
                      >
                        <CheckCircle size={16} /> Approve
                      </button>
                      <button
                        onClick={() => handleAction(user.id, "Rejected")}
                        className="flex items-center justify-center gap-1 bg-red-500/20 border border-red-500 text-red-300 px-3 sm:px-4 py-1.5 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 w-full sm:w-auto"
                      >
                        <XCircle size={16} /> Reject
                      </button>
                    </div>
                  ) : (
                    <div className="text-gray-500 italic">Action completed</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveUserId;
