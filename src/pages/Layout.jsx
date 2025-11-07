import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/Footer";
import { FaWhatsapp } from "react-icons/fa";

const Layout = () => {

  const location = useLocation();
  const path = location.pathname;


  return (
    <>
      {/* <Navbar /> */}
      {path !== '/login' && path !== '/signup' && <Navbar />}
      <main className="min-h-screen">
        <Outlet /> {/* This renders the child routes */}
      </main>
      {path !== '/login' && path !== '/signup' && <Footer />}
      {path !== '/login' && path !== '/signup' &&
      <>
          <a
        href="https://wa.me/917879182142"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all z-50"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>

      <a
        href="tel:+917879182142"
        className="fixed right-4 bottom-6 bg-[#D4AF37] text-black p-3 rounded-full shadow-lg hover:scale-110 transition-all z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 512 512"
          className="w-6 h-6"
        >
          <path d="M511.1 387.3c1.3 12.8-8.4 24.3-21.2 25.5-66.1 6.2-132.1-10.8-190.4-49.9-52.6-35.2-95.8-83.5-124.9-138.8C144.6 158.9 129.9 95.5 136.3 29.3c1.3-12.8 12.7-22.5 25.5-21.2l85.2 9.9c11.6 1.3 20.6 10.8 21.1 22.5l4.3 90.3c.5 10.9-6.7 20.7-17.3 23.5l-56.9 15.1c17.2 32.7 40.8 62 69.2 86.1 28.5 24.1 60.7 43.2 95.2 56l16.6-55.4c3.1-10.5 12.7-17.6 23.5-17.2l90.3 4.3c11.7.6 21.1 9.5 22.4 21.1l9.9 85.2z" />
        </svg>
      </a></>
  
}

    </>
  );
};

export default Layout;