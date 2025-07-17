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
          className="flex flex-col items-center text-xs text-brand-gray-dark hover:text-brand-blue active:scale-110 transition-transform duration-200">
          {/* apps icon */}
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="mb-1"
            viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="2.5" />
            <circle cx="18" cy="6" r="2.5" />
            <circle cx="6" cy="18" r="2.5" />
            <circle cx="18" cy="18" r="2.5" />
          </svg>
          Funciones
        </a>
        <a
          href="#how-it-works"
          className="flex flex-col items-center text-xs text-brand-gray-dark hover:text-brand-blue active:scale-110 transition-transform duration-200">
          {/* info icon */}
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="mb-1"
            viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <rect x="11" y="10" width="2" height="6" rx="1" />
            <rect x="11" y="7" width="2" height="2" rx="1" />
          </svg>
          Cómo funciona
        </a>
        <a
          href="#diagnostics"
          className="flex flex-col items-center text-xs text-brand-gray-dark hover:text-brand-blue active:scale-110 transition-transform duration-200">
          {/* nuevo icono diagnóstico */}
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="mb-1"
            viewBox="0 0 24 24">
            <path
              d="M12 21s-6.7-5.3-8.5-8.2C2.1 10.1 2 8.6 2.7 7.4 3.5 6 5.1 5.2 6.7 5.7c1.1.3 2.1 1.2 2.7 2.2.6-1 1.6-1.9 2.7-2.2 1.6-.5 3.2.3 4 1.7.7 1.2.6 2.7-.8 5.4l-1.1-2.2c-.2-.4-.8-.4-1 0l-1.2 2.5-1.1-2.2c-.2-.4-.8-.4-1 0l-1.2 2.5-1.1-2.2c-.2-.4-.8-.4-1 0l-1.2 2.5"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <polyline
              points="7 13 9 17 11 13 13 17 15 13"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          Diagnóstico
        </a>
        <a
          href="#testimonials"
          className="flex flex-col items-center text-xs text-brand-gray-dark hover:text-brand-blue active:scale-110 transition-transform duration-200">
          {/* star icon */}
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="mb-1"
            viewBox="0 0 24 24">
            <polygon points="12,2 15,8.5 22,9.3 17,14.1 18.2,21 12,17.8 5.8,21 7,14.1 2,9.3 9,8.5" />
          </svg>
          Opiniones
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center text-xs text-brand-gray-dark hover:text-brand-blue active:scale-110 transition-transform duration-200">
          {/* call icon */}
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="mb-1"
            viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.61a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.61a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.21 1.11z" />
          </svg>
          Contacto
        </a>
      </nav>
      {/* Chatbox subido para no tapar la barra */}
      <div className="mb-40 md:mb-0">
        <Chatbox />
      </div>

      <Footer />
    </div>
  );
}

export default App;
