/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Testimonial } from "../types";

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

const testimonials: Testimonial[] = [
  {
    text: "¡Increíble! Pensé que tendría que llamar a un técnico carísimo, pero con FríoPro descubrí que solo era un filtro sucio. Lo limpié yo mismo en 15 minutos. ¡Me ahorró un montón de plata!",
    author: {
      name: "Juan Carlos M.",
      role: "Usuario particular",
      avatarUrl: "https://placehold.co/48x48/E0F2FE/333?text=JC",
    },
  },
  {
    text: "La app es súper intuitiva. Me guió para identificar una fuga en la heladera que no encontraba. Las instrucciones fueron clarísimas. ¡100% recomendada!",
    author: {
      name: "Mariana P.",
      role: "Dueña de casa",
      avatarUrl: "https://placehold.co/48x48/E0F2FE/333?text=MP",
    },
  },
  {
    text: "Como técnico, uso FríoPro para un pre-diagnóstico rápido. Me ayuda a llegar al cliente con una idea clara del problema y los repuestos necesarios. Optimiza mi tiempo.",
    author: {
      name: "Ricardo G.",
      role: "Técnico en Refrigeración",
      avatarUrl: "https://placehold.co/48x48/E0F2FE/333?text=RG",
    },
  },
];

const TestimonialCard = ({
  text,
  author,
  delay,
}: Testimonial & { delay: number }) => {
  const { ref, isVisible } = useFadeInOnScroll();
  return (
    <div
      ref={ref}
      className={`bg-white p-8 rounded-2xl shadow-lg fade-in-up ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}>
      <p className="text-brand-gray mb-6">"{text}"</p>
      <div className="flex items-center">
        <img
          src={author.avatarUrl}
          alt={`Foto de ${author.name}`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="font-bold text-brand-gray-dark">{author.name}</p>
          <p className="text-sm text-brand-gray">{author.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-dark mb-4">
            Nuestros usuarios nos avalan
          </h2>
          <p className="text-lg text-brand-gray">
            Descubrí por qué la gente confía en FríoPro para sus reparaciones.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
