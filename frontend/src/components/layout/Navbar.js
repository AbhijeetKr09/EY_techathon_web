import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">App Name</Link>
      </div>
      
      <button className="nav-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`nav-content ${isOpen ? 'show' : ''}`}>
        <div className="nav-links-container">
          <div className="nav-links">
            <Link to="/" className={`nav-item ${isHomePage ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className="nav-item">About Us</Link>
            <Link to="/features" className="nav-item">Features</Link>
            <Link to="/courses" className="nav-item">Courses</Link>
            <Link to="/assessment" className={`nav-item ${location.pathname === '/assessment' ? 'active' : ''}`}>Assessment</Link>
          </div>
        </div>

        {isHomePage ? (
          <div className="auth-buttons">
            <Link to="/login" className="nav-item login">Sign In</Link>
            <Link to="/signup" className="nav-item signup">Get Started</Link>
          </div>
        ) : (
          <div className="user-profile">
            <span className="user-name">User name</span>
            <img 
              src="https://placehold.co/40x40" 
              alt="User profile avatar" 
              className="avatar"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
