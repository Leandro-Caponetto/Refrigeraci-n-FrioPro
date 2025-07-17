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
        {/* <WhatsAppButton /> */}
      </main>

      {/* Barra inferior tipo app solo en móvil */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg flex justify-around items-center py-2 md:hidden z-50">
        <a
          href="#features"
          className="flex flex-col items-center text-xs text-brand-gray-dark hover:text-brand-blue">
          <span className="material-icons" style={{ fontSize: 24 }}>
            apps
          </span>
          Funciones
        </a>
        <a
          href="#how-it-works"
          className="flex flex-col items-center text-xs text-brand-gray-dark hover:text-brand-blue">
          <span className="material-icons" style={{ fontSize: 24 }}>
            info
          </span>
          Cómo funciona
        </a>
        <a
          href="#diagnostics"
          className="flex flex-col items-center text-xs text-brand-gray-dark hover:text-brand-blue">
          <span className="material-icons" style={{ fontSize: 24 }}>
            build
          </span>
          Diagnóstico
        </a>
        <a
          href="#testimonials"
          className="flex flex-col items-center text-xs text-brand-gray-dark hover:text-brand-blue">
          <span className="material-icons" style={{ fontSize: 24 }}>
            star
          </span>
          Opiniones
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center text-xs text-brand-gray-dark hover:text-brand-blue">
          <span className="material-icons" style={{ fontSize: 24 }}>
            call
          </span>
          Contacto
        </a>
      </nav>

      <Footer />
      <Chatbox />
    </div>
  );
}

export default App;
