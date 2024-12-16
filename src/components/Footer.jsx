import React from "react";

const Footer = () => {
  const footerStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
    padding: "10px 0",
    boxShadow: "0 -2px 5px rgba(0,0,0,0.1)"
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; Patricia Katherine Saavedra Baptista</p>
    </footer>
  );
};

export default Footer;

