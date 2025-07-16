/** @format */

import React from "react";

const whatsappNumber = "1161691727";
const whatsappLink = `https://wa.me/54${whatsappNumber}`;

const WhatsAppButton: React.FC = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: "fixed",
      left: "20px",
      bottom: "20px",
      zIndex: 1000,
      background: "#25D366",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      textDecoration: "none",
    }}
    aria-label="Contactar por WhatsApp">
    <svg
      width="52"
      height="52"
      viewBox="0 0 32 32"
      fill="white"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        d="M23.5 19.5c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.7.2-.2.3-.8 1.2-1 1.4-.2.2-.4.3-.7.1-.4-.2-1.5-.6-2.8-1.9-1-1-1.7-2.2-1.9-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.7 0-.2 0-.5-.1-.7-.1-.2-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5-.2 0-.5 0-.7 0-.2 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.1 0 1.8 1.3 3.5 1.5 3.7.2.2 2.5 3.8 6.1 5.1.9.3 1.6.5 2.1.6.9.1 1.7.1 2.3.1.7 0 2.3-.7 2.6-1.5.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.7-.4z"
        fill="#fff"
      />
    </svg>
  </a>
);

export default WhatsAppButton;
