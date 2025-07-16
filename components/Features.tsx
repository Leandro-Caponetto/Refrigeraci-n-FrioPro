/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Feature } from "../types";
import {
  AiDiagnoseIcon,
  StepByStepIcon,
  ProSupportIcon,
} from "./IconComponents";

const useFadeInOnScroll = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};

const featureList: Feature[] = [
  {
    icon: <AiDiagnoseIcon className="text-brand-blue-dark" />,
    title: "Diagnóstico con IA",
    description:
      "Describí el problema y nuestra inteligencia artificial identificará la causa más probable en segundos.",
  },
  {
    icon: <StepByStepIcon className="text-brand-blue-dark" />,
    title: "Guías Paso a Paso",
    description:
      "Recibí instrucciones claras y sencillas para que puedas realizar la reparación vos mismo.",
  },
  {
    icon: <ProSupportIcon className="text-brand-blue-dark" />,
    title: "Soporte Profesional",
    description:
      "Si el problema es complejo, te conectamos con técnicos calificados en tu zona.",
  },
];

const FeatureCard = ({
  icon,
  title,
  description,
  delay,
}: Feature & { delay: number }) => {
  const { ref, isVisible } = useFadeInOnScroll();
  return (
    <div
      ref={ref}
      className={`p-8 bg-brand-gray-light rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 fade-in-up ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}>
      <div className="inline-block bg-brand-blue-light p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-brand-gray-dark mb-2">{title}</h3>
      <p className="text-brand-gray">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-dark mb-4">
            Tu asistente de climatización inteligente
          </h2>
          <p className="text-lg text-brand-gray">
            Todo lo que necesitás para resolver problemas de refrigeración, en
            un solo lugar.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {featureList.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
