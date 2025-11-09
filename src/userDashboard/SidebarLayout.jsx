import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  BarChart2,
  Briefcase,
  CreditCard,
  CheckCircle,
  LogOut,
} from "lucide-react";

const SidebarLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // If you have auth tokens, clear them here
    // localStorage.removeItem("token");
    navigate("/");
  };

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/dashboard" },
    { name: "Profile", icon: <User size={18} />, path: "/profile" },
    { name: "Position", icon: <BarChart2 size={18} />, path: "/position" },
    { name: "Markets", icon: <Briefcase size={18} />, path: "/markets" },
    { name: "Payment", icon: <CreditCard size={18} />, path: "/payment" },
    { name: "Payment Approved", icon: <CheckCircle size={18} />, path: "/payment-approved" },
  ];

  return (
    <div className="flex min-h-screen bg-[#111] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-black/90 border-r border-yellow-400 flex flex-col">
        {/* Logo */}
        <div className="p-6 text-center border-b border-yellow-400">
          <h1 className="text-2xl font-bold text-yellow-400 tracking-wide">CxMeta</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                  isActive
                    ? "bg-yellow-400 text-black font-semibold"
                    : "text-gray-300 hover:bg-yellow-300 hover:text-black"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}

          {/* Logout Button placed after Payment Approved */}
          <button
            onClick={handleLogout}
            className="mt-4 flex items-center gap-3 px-4 py-2 w-full text-gray-300 hover:bg-yellow-300 hover:text-black rounded-md transition"
          >
            <LogOut size={18} /> Log Out
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#181818] p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
