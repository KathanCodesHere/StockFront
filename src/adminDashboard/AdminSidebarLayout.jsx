import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  CreditCard,
  UserCheck,
  FileCheck,
  Briefcase,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const AdminSidebarLayout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    navigate("/"); // Redirect to home/login
  };

  const menuItems = [
    { name: "Approve User ID", icon: <UserCheck size={18} />, path: "/admin/approve-userid" },
    { name: "Payment Deposit Approval", icon: <CreditCard size={18} />, path: "/admin/payment-deposit" },
    { name: "Withdrawal Approval", icon: <FileCheck size={18} />, path: "/admin/withdrawal-approval" },
    { name: "Approved Payments", icon: <CheckCircle size={18} />, path: "/admin/approved-payments" },
    { name: "Approved Users", icon: <UserCheck size={18} />, path: "/admin/approved-users" },
    { name: "Stock Assignment", icon: <Briefcase size={18} />, path: "/admin/stock-assignment" },
  ];

  return (
    <div className="flex min-h-screen bg-[#111] text-white">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-black/90 text-yellow-400 p-4 border-b border-yellow-400">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-yellow-400 hover:text-yellow-300 focus:outline-none"
        >
          {isSidebarOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {/* Sidebar (Desktop & Mobile) */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-full w-64 bg-black/95 border-r border-yellow-400 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="p-6 text-center border-b border-yellow-400">
          <h1 className="text-2xl font-bold text-yellow-400 tracking-wide">
            Admin Panel
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)} // Close sidebar on mobile
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-yellow-400 text-black font-semibold"
                    : "text-gray-300 hover:bg-yellow-300 hover:text-black"
                }`
              }
            >
              {item.icon}
              <span className="text-sm sm:text-base">{item.name}</span>
            </NavLink>
          ))}

          {/* Logout */}
          <button
            onClick={() => {
              handleLogout();
              setIsSidebarOpen(false);
            }}
            className="mt-4 flex items-center gap-3 px-4 py-2 w-full text-gray-300 hover:bg-red-500 hover:text-white rounded-md transition"
          >
            <LogOut size={18} /> Log Out
          </button>
        </nav>
      </aside>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 bg-[#181818] p-6 lg:p-8 mt-16 lg:mt-0 overflow-y-auto w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminSidebarLayout;
