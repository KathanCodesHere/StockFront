// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import RegisterForm from "./pages/SignUp";
import ServicesComponent from "./pages/ServicesComponent";
import SidebarLayout from "./userDashboard/SidebarLayout";
import Dashboard from "./userDashboard/Dashboard";
import Profile from "./userDashboard/Profile";
import Position from "./userDashboard/Position";
import Markets from "./userDashboard/Markets";
import Payment from "./userDashboard/Payment";
import PayIn from "./userDashboard/PayIn";
import PayOut from "./userDashboard/PayOut";
import PaymentApproved from "./userDashboard/PaymentApproved";
import AdminSidebarLayout from "./adminDashboard/AdminSidebarLayout";
import ApproveUserId from "./adminDashboard/ApproveUserId";
import PaymentDepositApproval from "./adminDashboard/PaymentDepositApproval";
import WithdrawalApproval from "./adminDashboard/WithdrawalApproval";
import ApprovedUsers from "./adminDashboard/ApprovedUsers";
import EditProfile from "./userDashboard/EditProfile";
import ApprovedPayments from "./adminDashboard/ApprovedPayments";
import StockAssignment from "./adminDashboard/StockAssignmentPage";
const App = () => {
  return (
    <Routes>
      {/* 🌐 Public Website Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<ServicesComponent />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<RegisterForm />} />
      </Route>

      {/* 👤 User Dashboard Layout */}
      <Route path="/" element={<SidebarLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="payment" element={<Payment />} />
        <Route path="payin" element={<PayIn />} />
        <Route path="payout" element={<PayOut />} />
        <Route path="profile" element={<Profile />} />
        <Route path="edit-profile" element={<EditProfile />} /> 
        <Route path="position" element={<Position />} />
        <Route path="markets" element={<Markets />} />
        <Route path="payment-approved" element={<PaymentApproved />} />
      </Route>

      {/* 🧑‍💼 Admin Dashboard Layout */}
      {/* 🔁 Redirect /admin to /admin/approve-userid */}
      <Route path="/admin" element={<Navigate to="/admin/approve-userid" replace />} />

      <Route path="/admin" element={<AdminSidebarLayout />}>
        <Route path="approve-userid" element={<ApproveUserId />} />
        <Route path="payment-deposit" element={<PaymentDepositApproval />} />
        <Route path="withdrawal-approval" element={<WithdrawalApproval />} />
        <Route path="approved-users" element={<ApprovedUsers />} />
        <Route path="approved-payments" element={<ApprovedPayments/>}/>
         <Route path="stock-assignment" element={<StockAssignment/>}/>
      </Route>
    </Routes>
  );
};

export default App;
