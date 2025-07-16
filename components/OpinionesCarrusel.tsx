/** @format */

import React, { useEffect, useRef, useState } from "react";

const opiniones = [
  {
    nombre: "María G.",
    texto:
      "¡Excelente servicio! Solucionaron mi problema de climatización en minutos.",
  },
  {
    nombre: "Juan P.",
    texto: "Muy profesionales y atentos. Recomiendo totalmente.",
  },
  {
    nombre: "Lucía R.",
    texto: "La atención al cliente fue impecable y el diagnóstico muy preciso.",
  },
  {
    nombre: "Carlos S.",
    texto: "Rápidos y eficientes, mi aire funciona perfecto.",
  },
  {
    nombre: "Sofía M.",
    texto: "Me guiaron paso a paso y resolví todo desde casa. ¡Gracias!",
  },
];

const INTERVALO = 3500; // ms

const OpinionesCarrusel: React.FC = () => {
  const [indice, setIndice] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndice((prev) => (prev + 1) % opiniones.length);
    }, INTERVALO);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [indice]);

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 24,
        borderRadius: 16,
        background: "#f8fafc",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        position: "relative",
        minHeight: 160,
        textAlign: "center",
      }}>
      <div style={{ minHeight: 80, transition: "opacity 0.5s" }}>
        <p
          style={{
            fontSize: 18,
            color: "#222",
            marginBottom: 12,
            fontStyle: "italic",
          }}>
          “{opiniones[indice].texto}”
        </p>
        <span style={{ fontWeight: 600, color: "#0ea5e9" }}>
          {opiniones[indice].nombre}
        </span>
      </div>
      <div
        style={{
          marginTop: 18,
          display: "flex",
          justifyContent: "center",
          gap: 8,
        }}>
        {opiniones.map((_, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: i === indice ? "#0ea5e9" : "#cbd5e1",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OpinionesCarrusel;
