import React from "react";
import { FiClock, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div
        className="w-full h-[300px] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full bg-black/60 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-[#EDEDED]">
            <h1 className="text-5xl font-bold text-[#D4AF37] drop-shadow-lg mb-3">
              Contact Us
            </h1>
            <p className="text-lg opacity-90">
              Explore our Contact Us page for prompt assistance from our dedicated team.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
<section className="w-full bg-gradient-to-b from-[#000000] via-[#0b0b0b] to-[#111111] py-20">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12">

    {/* Left Info Box */}
    <div className="bg-[#0d0d0d] border border-[#D4AF37]/40 text-[#EDEDED] p-8 rounded-xl shadow-[0_0_25px_rgba(212,175,55,0.15)]">
      <h2 className="text-3xl font-semibold mb-4 text-[#D4AF37]">Get In Touch</h2>
      <p className="text-gray-400 mb-6">
        We will get back to you within 24 hours, or call us any day.
      </p>

      <div className="space-y-5 text-sm">
        <p className="flex items-center gap-3">
          <FiClock className="text-[#D4AF37]" /> 10AM - 6PM, Mon - Sat
        </p>
        <p className="flex items-center gap-3">
          <FiPhone className="text-[#D4AF37]" /> +91 7879182142
        </p>
        <p className="flex items-center gap-3 break-words">
          <FiMail className="text-[#D4AF37]" /> support@example.com
        </p>
        <p className="flex items-center gap-3 leading-relaxed">
          <FiMapPin className="text-[#D4AF37]" /> Indore, Madhya Pradesh, India
        </p>
      </div>
    </div>

    {/* Right Form */}
    <div>
      <h2 className="text-3xl font-semibold text-[#D4AF37] mb-2">Request A Quote</h2>
      <p className="text-gray-400 mb-6">
        We respond within 24 hours.
      </p>

      <form className="space-y-5">

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#0D0D0D] border border-[#444] text-[#EDEDED] rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-[#0D0D0D] border border-[#444] text-[#EDEDED] rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none"
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="bg-[#0D0D0D] border border-[#444] text-[#EDEDED] rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none"
        />

        <select className="bg-[#0D0D0D] border border-[#444] text-[#EDEDED] rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none">
          <option>Financial Planning</option>
          <option>Consulting Support</option>
          <option>Business Strategy</option>
        </select>

        <textarea
          rows="5"
          placeholder="Your Message"
          className="bg-[#0D0D0D] border border-[#444] text-[#EDEDED] rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#D4AF37] outline-none"
        ></textarea>

        <button
          type="submit"
          className="bg-[#D4AF37] hover:bg-[#b8922f] text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-[#D4AF37]/50"
        >
          Submit Request
        </button>
      </form>
    </div>
  </div>
</section>


    </div>
  );
};

export default Contact;
