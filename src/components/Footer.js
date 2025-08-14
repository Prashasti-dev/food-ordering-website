import React from "react";
import { useNavigate } from "react-router-dom";

function FooterSection() {
  const navigate = useNavigate();

  const footerStyle = {
    position: "relative",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "60px 20px 30px",
    borderRadius: "0 0 0 0",
    backgroundColor: "#efa152", // subtle dark background
    color: "#fff",
  };

  const contentWrapper = {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    justifyContent: "space-between",
  };

  const aboutStyle = { flex: "1 1 400px", minWidth: "280px" };

  const linksContainerStyle = {
    flex: "0 0 200px",
    minWidth: "180px",
    borderLeft: "1px solid rgba(255,255,255,0.3)",
    paddingLeft: "20px",
  };

  const headingStyle = {
    fontFamily: "'Montserrat', 'Poppins', sans-serif",
    fontWeight: "700",
    fontSize: "2.2rem",
    color: "#242222ff",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    lineHeight: 1.7,
    color: "#232121ff",
  };

  const linksHeadingStyle = {
    fontWeight: "700",
    fontSize: "1.5rem",
    marginBottom: "15px",
    color: "#242222ff",
  };

  const linkStyle = {
    display: "block",
    color: "#232121ff",
    textDecoration: "none",
    marginBottom: "10px",
    fontSize: "1rem",
    transition: "color 0.3s",
    cursor: "pointer",
  };

  const handleMouseEnter = (e) => (e.currentTarget.style.color = "#201f1eff");
  const handleMouseLeave = (e) => (e.currentTarget.style.color = "#fff");

  // Scroll to section on home page
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyrightStyle = {
    textAlign: "center",
    marginTop: "40px",
    fontSize: "0.9rem",
    color: "#fff",
  };

  return (
    <footer style={footerStyle}>
      <div style={contentWrapper}>
        {/* About Section */}
        <div style={aboutStyle}>
          <h2 style={headingStyle}>About Us</h2>
          <p style={paragraphStyle}>
            Foodiefi is passionate about delivering the freshest, most delicious meals right to your door.
            Our mission is to connect food lovers with the best local restaurants, focusing on quality,
            speed, and exceptional service. We believe food brings people together, and we strive to make every
            order a delightful experience.
          </p>
        </div>

        {/* Quick Links */}
        <div style={linksContainerStyle}>
          <h3 style={linksHeadingStyle}>Quick Links</h3>

          {/* Home: navigate to home page then scroll to top */}
          <span
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "auto" });
            }}
          >
            Home
          </span>

          {/* Menu: navigate to home page then scroll to menu section */}
          <span
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              navigate("/");
              setTimeout(() => scrollToSection("menu"), 100); // delay to ensure home page renders
            }}
          >
            Menu
          </span>

          {/* About: scroll to about section on home page */}
          <span
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              navigate("/");
              setTimeout(() => scrollToSection("about"), 100);
            }}
          >
            About Us
          </span>

          {/* Contact: navigate to contact page from top */}
          <span
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              navigate("/contact");
              window.scrollTo({ top: 0, behavior: "auto" });
            }}
          >
            Contact
          </span>
        </div>
      </div>

      {/* Copyright */}
      <p style={copyrightStyle}>
        © 2025 Foodiefi. All rights reserved.
      </p>
    </footer>
  );
}

export default FooterSection;
