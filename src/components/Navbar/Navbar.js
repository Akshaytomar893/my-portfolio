import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faFlag,
  faEnvelope,
  faBars,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; // Make sure to create this CSS file
import { useNavigate } from "react-router-dom";
import { ColorPallete } from "../../assets";
import { Tooltip as ReactTooltip } from "react-tooltip";
import ColorGrid from "./ColorGrid";
import { click, dblClick } from "@testing-library/user-event/dist/click";

const Navbar = () => {
  const tooltipRef = useRef(null);
  const navigate = useNavigate();
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = (index) => setActive(index);
  const handleMouseLeave = () => setActive(null);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { icon: faHome, label: "HOME", route: "/my-portfolio/" },
    { icon: faUser, label: "ABOUT", route: "/my-portfolio/about" },
    { icon: faBriefcase, label: "WORK", route: "/my-portfolio/work" },
    { icon: faFlag, label: "ACHIEVMENT", route: "/my-portfolio/achievement" },
    { icon: faEnvelope, label: "CONTACT", route: "/my-portfolio/contact" },
  ];

  const downloadResume = () => {
    window.open(`${process.env.PUBLIC_URL}/resume.pdf`, "_blank");
  };
  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="hamburger">
        <div onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" color="white" />
        </div>
        <div></div>
        <div className="cta-icons">
          <button className="download-resume" onClick={() => downloadResume()}>
            <FontAwesomeIcon icon={faDownload} size="lg" />
            <p>Resume</p>
          </button>
          <img
            src={ColorPallete}
            height={50}
            width={50}
            data-tooltip-id="color-palette"
          />
        </div>
      </div>

      <div className={`navbar ${menuOpen ? "show" : ""}`}>
        {navItems.map((item, index) => (
          <div
            key={index}
            className="nav-item"
            onClick={() => navigate(item.route)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon
              icon={item.icon}
              size="lg"
              className="navbar-icon"
            />
            <span className={`nav-label ${active === index ? "slide-in" : ""}`}>
              {item.label}
            </span>
          </div>
        ))}
        {/* <img src={ColxorPallete} height={50} width={50}/> */}
      </div>
      <ReactTooltip
        id="color-palette"
        style={{
          zIndex: 9999,
          opacity: 1,
        }}
        place="bottom"
        ref={tooltipRef}
        render={() => <ColorGrid tooltipRef={tooltipRef} />}
        openEvents={{
          mouseenter: true,
          mouseover: true,
          click: true,
        }}
        closeEvents={{ click: true }}
        globalCloseEvents={{
          clickOutsideAnchor: true,
        }}
        clickable={true}
      />
    </div>
  );
};

export default Navbar;
