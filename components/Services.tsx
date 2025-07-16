/** @format */

import React from "react";
import { Service } from "../types";
import {
  WrenchIcon,
  TurbineIcon,
  ShieldCheckIcon,
  ZapIcon,
  ToolIcon,
  CheckCircleIcon,
} from "./IconComponents";

const servicesList: Service[] = [
  {
    icon: <WrenchIcon className="h-8 w-8 text-slate-700" />,
    title: "Diagnóstico y Reparación Profesional",
    description:
      "Detectamos y reparamos cualquier avería en equipos split, de ventana, industriales, neveras y congeladores con precisión experta.",
  },
  {
    icon: <TurbineIcon className="h-8 w-8 text-slate-700" />,
    title: "Mantenimiento Preventivo",
    description:
      "Limpieza profunda de filtros, turbinas y serpentines para mejorar el flujo de aire, la eficiencia y prolongar la vida útil de tu equipo.",
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-slate-700" />,
    title: "Gestión de Gas Refrigerante",
    description:
      "Detección de fugas con métodos avanzados, corrección y recarga de gas para un rendimiento óptimo y seguro.",
  },
  {
    icon: <ZapIcon className="h-8 w-8 text-slate-700" />,
    title: "Instalación y Desinstalación",
    description:
      "Servicio profesional que sigue las mejores prácticas, incluyendo la recuperación adecuada del gas refrigerante.",
  },
  {
    icon: <ToolIcon className="h-8 w-8 text-slate-700" />,
    title: "Reparación de Componentes",
    description:
      "Solucionamos fallos específicos en termostatos, sensores, compresores y ventiladores para evitar reemplazos costosos.",
  },
  {
    icon: <CheckCircleIcon className="h-8 w-8 text-slate-700" />,
    title: "Optimización de Eficiencia",
    description:
      "Asesoría y ajustes para sistemas Inverter y convencionales, enfocados en reducir tu consumo eléctrico y mejorar el confort.",
  },
];

const ServiceCard = ({ icon, title, description }: Service) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-100 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

function Services() {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Nuestros Servicios Expertos
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Ofrecemos una gama completa de soluciones para mantener tus ambientes
          frescos y tus equipos en perfecto estado.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
