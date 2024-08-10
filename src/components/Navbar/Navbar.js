import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faFlag, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [active, setActive] = useState(null);

    const handleMouseEnter = (index) => {
        setActive(index);
    };

    const handleMouseLeave = () => {
        setActive(null);
    };

    const navItems = [
        { icon: faHome, label: 'HOME' },
        { icon: faUser, label: 'ABOUT' },
        { icon: faBriefcase, label: 'WORK' },
        { icon: faFlag, label: 'PORTFOLIO' },
        { icon: faEnvelope, label: 'CONTACT' }
    ];

    return (
        <div className="navbar">
            {navItems.map((item, index) => (
                <div 
                    key={index} 
                    className={`nav-item ${active === index ? 'active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <FontAwesomeIcon icon={item.icon} />
                    {active === index && <span className="nav-label">{item.label}</span>}
                </div>
            ))}
        </div>
    );
};

export default Navbar;
