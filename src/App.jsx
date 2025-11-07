

// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ServicesSection from "./component/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import RegisterForm from "./pages/SignUp";
import ServicesComponent from "./pages/ServicesComponent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* "/" route renders the Home (which includes multiple sections) */}
        <Route index element={<Home />} />

        {/* Separate routes for other pages */}
        <Route path="about" element={<About />} />
        <Route path="services" element={<ServicesComponent />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<RegisterForm/>} />
      </Route>
    </Routes>
  );
};

export default App;