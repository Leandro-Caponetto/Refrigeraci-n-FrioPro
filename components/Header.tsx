/** @format */

import React, { useState } from "react";
import { LogoIcon } from "./IconComponents";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a
      href={href}
      className="text-brand-gray hover:text-brand-blue-dark transition-colors duration-300">
      {children}
    </a>
  );

  const MobileNavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a
      href={href}
      onClick={() => setMobileMenuOpen(false)}
      className="block py-2 text-brand-gray hover:text-brand-blue-dark transition-colors duration-300">
      {children}
    </a>
  );

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3">
            {/* <LogoIcon className="h-8 w-8 text-brand-blue-dark" /> */}

            <p className="text-2xl font-bold text-brand-gray-dark">
              ❄️Frío
              <span
                className=" text-white rounded-lg text-lg px-1 py-1"
                style={{ backgroundColor: "#fda17a" }}>
                Pro
              </span>
            </p>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Características</NavLink>
            <NavLink href="#how-it-works">Cómo Funciona</NavLink>
            <NavLink href="#testimonials">Opiniones</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
            <button
              onClick={() => setShowInfo(true)}
              className="bg-brand-blue text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-brand-blue-dark transition-all duration-300"
              type="button">
              Info
            </button>
          </nav>
          <a
            href="#diagnostics"
            className="hidden md:inline-block bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-2 px-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Empezar Diagnóstico
          </a>
          <button
            id="mobile-menu-button"
            className="md:hidden text-brand-gray-dark"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden px-6 pb-4`}>
        <MobileNavLink href="#features">Características</MobileNavLink>
        <MobileNavLink href="#how-it-works">Cómo Funciona</MobileNavLink>
        <MobileNavLink href="#testimonials">Opiniones</MobileNavLink>
        <MobileNavLink href="#contact">Contacto</MobileNavLink>
        <button
          onClick={() => setShowInfo(true)}
          className="mt-2 block w-full bg-brand-blue text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-brand-blue-dark transition-all duration-300"
          type="button">
          Info
        </button>
        <a
          href="#diagnostics"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-4 block w-full text-center bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-2 px-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          Empezar Diagnóstico
        </a>
      </div>
      {/* Info Popup Modal */}
      {showInfo && (
        <div
          className="bg-brand-gray-dark fixed inset-0 z-50 grid place-items-center bg-black/40"
          onClick={() => setShowInfo(false)}>
          <div
            className="bg-brand-gray-dark rounded-2xl shadow-2xl p-12 max-w-lg w-full relative flex flex-col items-center mx-2 rounded-xl"
            style={{ minHeight: "320px" }}
            onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-brand-blue text-center mb-2">
              Info
            </h2>
            <div className="bg-brand-gray-light p-2 rounded-2xl shadow-[0_4px_10px_rgba(173,216,230,0.5)] mb-2 text-lg w-full text-center mx-2 border-2 border-white-100 rounded-xl">
              <p className="text-2xl font-bold text-brand-gray-dark text-center">
                ❄️Frío
                <span
                  className="text-white rounded-lg text-lg px-1 py-1"
                  style={{ backgroundColor: "#fda17a" }}>
                  Pro
                </span>
              </p>
            </div>

            <div className="bg-brand-gray-light mb-2 rounded-2xl shadow-[0_4px_10px_rgba(173,216,230,0.5)] p-6 text-lg w-full text-center mx-2 border-2 border-white-100 rounded-xl">
              <div className="mb-4 text-lg w-full text-center">
                <span className="font-semibold">☎️ Teléfono:</span>{" "}
                <a href="tel:1161691727" className="text-brand-blue underline">
                  1161691727
                </a>
              </div>
              <div className="mb-4 text-lg w-full text-center">
                <span className="font-semibold">📧 Email:</span>{" "}
                <a
                  href="mailto:contacto@friopro.com"
                  className="text-brand-blue underline">
                  contacto@friopro.com
                </a>
              </div>
            </div>

            <button
              onClick={() => setShowInfo(false)}
              className="mt-2 bg-brand-blue text-white font-bold py-2 px-8 rounded-lg shadow-2xl hover:bg-brand-blue-dark transition-all duration-300 "
              type="button">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
