/** @format */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import DiagnosticsWrapper from "./components/DiagnosticsWrapper";
import Footer from "./components/Footer";
import Chatbox from "./components/Chatbox";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import OpinionesCarrusel from "./components/OpinionesCarrusel";

function App() {
  return (
    <div className="min-h-screen bg-brand-gray-light text-brand-gray-dark">
      <Header />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <DiagnosticsWrapper />
        <Testimonials />
        <OpinionesCarrusel />
        <Contact />
        <WhatsAppButton />
      </main>
      <Footer />
      <Chatbox />
    </div>
  );
}

export default App;
