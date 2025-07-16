/** @format */

import React from "react";
import { AboutPoint } from "../types";
import {
  ShieldCheckIcon,
  ToolIcon,
  LightbulbIcon,
  ZapIcon,
} from "./IconComponents";

const aboutPoints: AboutPoint[] = [
  {
    icon: <ShieldCheckIcon className="h-7 w-7 text-slate-600" />,
    title: "Técnicos Certificados y en Formación Continua",
    description:
      "Nuestro equipo está altamente capacitado y se actualiza constantemente para dominar las últimas tecnologías del sector, garantizando un servicio de calidad superior.",
  },
  {
    icon: <ToolIcon className="h-7 w-7 text-slate-600" />,
    title: "Herramientas Profesionales de Vanguardia",
    description:
      "Utilizamos herramientas de diagnóstico avanzadas como Ref Tools y bases de datos técnicas para asegurar precisión y eficiencia en cada trabajo.",
  },
  {
    icon: <ZapIcon className="h-7 w-7 text-slate-600" />,
    title: "Enfoque en Eficiencia y Sostenibilidad",
    description:
      "Somos expertos en sistemas Inverter y promovemos el uso de refrigerantes ecológicos. Nuestro objetivo es maximizar tu confort y minimizar tu factura eléctrica.",
  },
  {
    icon: <LightbulbIcon className="h-7 w-7 text-slate-600" />,
    title: "Transparencia y Confianza",
    description:
      "Creemos en una comunicación clara. Te explicamos el problema, las posibles soluciones y te entregamos un reporte detallado del servicio realizado.",
  },
];

const AboutCard = ({ icon, title, description }: AboutPoint) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-slate-200">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

function About() {
  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="space-y-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Tu Socio de Confianza en Climatización
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              En FríoPro, combinamos años de experiencia con la tecnología más
              avanzada para ofrecerte un servicio inigualable. No somos solo
              técnicos; somos expertos apasionados por crear ambientes
              confortables y eficientes.
            </p>
          </div>
          <div className="space-y-8">
            {aboutPoints.map((point, index) => (
              <AboutCard key={index} {...point} />
            ))}
          </div>
        </div>
        <div className="relative h-96 lg:h-auto lg:self-stretch rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Técnico profesional revisando una unidad de aire acondicionado"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-white text-xl font-semibold">
              "Comprometidos con la excelencia y la innovación en cada
              servicio."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
