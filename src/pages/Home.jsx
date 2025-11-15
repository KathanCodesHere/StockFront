import React from "react";
import Hero from "../component/Hero";
import PackagesGrid from "../component/PackagesGrid";
import Testimonials from "../component/Testimonials";
import CTA from "../component/CTA";
import Footer from "../component/Footer";
import ServicesSection from "../component/Services";
import CallbackSection from "../component/CallBackSection";
import Newstock from "../component/Newstock"
export default function Home(){
  return (
    <main>
      <Hero />
      <section className="bg-white">
        <PackagesGrid />
      </section>
      <Testimonials />
      <Newstock/>
      <CallbackSection/>
      <ServicesSection/>
      <CTA />
    </main>
  );
}
