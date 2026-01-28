import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = ({ phoneNumber = "9540285572" }) => {
  const handleClick = () => {
    const message = "Hello! I'm interested in knowing more about your gym.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="whatsapp-button-container">
      <div className="whatsapp-pulse"></div>
      <button
        onClick={handleClick}
        style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          backgroundColor: "#25D366",
          color: "white",
          border: "none",
          borderRadius: "50%",
          padding: "16px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
          zIndex: 41,
          transition: "all 0.3s ease",
          fontSize: "24px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#20ba61";
          e.currentTarget.style.transform = "scale(1.15)";
          e.currentTarget.style.boxShadow =
            "0 8px 20px rgba(37, 211, 102, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#25D366";
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 4px 12px rgba(37, 211, 102, 0.4)";
        }}
        title="Chat with us on WhatsApp"
        aria-label="WhatsApp Chat"
      >
        <FaWhatsapp size={32} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
