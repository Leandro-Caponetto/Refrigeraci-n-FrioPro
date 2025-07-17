/** @format */

import React from "react";
import { LogoIcon } from "./IconComponents";

const Footer = () => {
  return (
    <footer className="bg-brand-gray-dark border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* <LogoIcon className="h-8 w-8 text-brand-blue-dark" /> */}
              <p className="text-2xl md:text-5xl">❄️</p>
              <p className="text-2xl font-bold text-brand-gray">
                Frío
                <span
                  className=" text-white rounded-lg"
                  style={{ backgroundColor: "#fda17a" }}>
                  Pro
                </span>
              </p>
            </div>
            <p className="text-brand-gray">
              Tu asistente experto en climatización. Diagnósticos rápidos y
              soluciones efectivas.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-brand-gray-dark mb-4">
              Navegación
            </h4>
            <ul>
              <li>
                <a
                  href="#features"
                  className="text-brand-gray hover:text-brand-blue-dark transition-colors">
                  Características
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#how-it-works"
                  className="text-brand-gray hover:text-brand-blue-dark transition-colors">
                  Cómo Funciona
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#diagnostics"
                  className="text-brand-gray hover:text-brand-blue-dark transition-colors">
                  Diagnóstico
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#testimonials"
                  className="text-brand-gray hover:text-brand-blue-dark transition-colors">
                  Opiniones
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#contact"
                  className="text-brand-gray hover:text-brand-blue-dark transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-brand-gray-dark mb-4">
              Legal
            </h4>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-brand-gray hover:text-brand-blue-dark transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="text-brand-gray hover:text-brand-blue-dark transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-brand-gray text-sm">
          <p>
            &copy; {new Date().getFullYear()} FríoPro. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
