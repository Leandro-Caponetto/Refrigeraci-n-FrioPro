/** @format */

import React, { useState } from "react";
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
import ScrollingTechnician from './components/ScrollingTechnician';
import {
  FaRegListAlt,
  FaQuestionCircle,
  FaClipboardList,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";

function App() {
  const [active, setActive] = useState("Funciones");

  const tabs = [
    { key: "Funciones", href: "#features", icon: FaRegListAlt },
    { key: "Cómo funciona", href: "#how-it-works", icon: FaQuestionCircle },
    { key: "Diagnóstico", href: "#diagnostics", icon: FaClipboardList },
    { key: "Opiniones", href: "#testimonials", icon: FaCog },
    { key: "Contacto", href: "#contact", icon: FaUserCircle },
  ];

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
        {/* <WhatsAppButton /> */}
        <ScrollingTechnician />
      </main>

      {/* Barra inferior tipo app y Chatbox solo en móvil */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg flex justify-around items-center py-2 md:hidden z-50">
        {tabs.map(({ key, href, icon: Icon }) => (
          <a
            key={key}
            href={href}
            onClick={() => setActive(key)}
            className={`flex flex-col items-center text-xs transition-transform duration-200 ${
              active === key
                ? "text-cyan-500 scale-125"
                : "text-brand-gray-dark hover:text-cyan-400 active:scale-110"
            }`}>
            <Icon className="mb-1" size={28} />
            {key}
          </a>
        ))}
      </nav>

      <div className="mb-40 md:mb-0">
        <Chatbox />
      </div>

      <Footer />
    </div>
  );
}

export default App;
