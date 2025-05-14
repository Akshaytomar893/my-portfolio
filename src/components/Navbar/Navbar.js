import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faFlag, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Make sure to create this CSS file
import { useNavigate } from 'react-router-dom';
import { ColorPallete } from '../../assets';

const Navbar = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMouseEnter = (index) => setActive(index);
    const handleMouseLeave = () => setActive(null);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navItems = [
        { icon: faHome, label: 'HOME', route:"/"},
        { icon: faUser, label: 'ABOUT' , route:"/about"},
        { icon: faBriefcase, label: 'WORK', route:"/work" },
        { icon: faFlag, label: 'ACHIEVMENT', route:"/achievement" },
        { icon: faEnvelope, label: 'CONTACT' , route:"/contact"}
    ];

    return (
        <div className="navbar-container">
            <div className="hamburger" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} size="lg" color='white'/>
            </div>
               

            <div className={`navbar ${menuOpen ? 'show' : ''}`}>
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        className="nav-item"
                        onClick={()=>navigate(item.route)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <FontAwesomeIcon icon={item.icon} size="lg" />
                        <span className={`nav-label ${active === index ? 'slide-in' : ''}`}>
                            {item.label}
                        </span>
                    </div>
                ))}
                 {/* <img src={ColorPallete} height={50} width={50}/> */}
            </div>
        </div>
    );
};

export default Navbar;
