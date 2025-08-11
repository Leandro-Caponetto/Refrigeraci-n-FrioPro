/** @format */

import React, { useState } from "react";
import {
  FaRegListAlt,
  FaQuestionCircle,
  FaClipboardList,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";

const BottomNavBar = () => {
  const [active, setActive] = useState("Funciones");

  const tabs = [
    { key: "Funciones", icon: <FaRegListAlt /> },
    { key: "Cómo funciona", icon: <FaQuestionCircle /> },
    { key: "Diagnóstico", icon: <FaClipboardList /> },
    { key: "Opciones", icon: <FaCog /> },
    { key: "Contacto", icon: <FaUserCircle /> },
  ];

  return (
    <nav style={styles.container}>
      {tabs.map((tab) => (
        <div
          key={tab.key}
          style={{
            ...styles.tab,
            ...(active === tab.key ? styles.activeTab : {}),
          }}
          onClick={() => setActive(tab.key)}>
          <div style={{ fontSize: 24 }}>{tab.icon}</div>
          <div style={{ fontSize: 12 }}>{tab.key}</div>
        </div>
      ))}
    </nav>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTop: "1px solid #ddd",
    backgroundColor: "#fff",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
  tab: {
    cursor: "pointer",
    color: "#222",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "6px 0",
  },
  activeTab: {
    color: "#6200ee",
    fontWeight: "bold",
  },
};

export default BottomNavBar;
