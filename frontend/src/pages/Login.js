import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaLinkedin, FaGithub, FaFacebook, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';
import '../styles/Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-left">
        <Link to="/" className="go-back">
          <FaArrowLeft /> Go Back
        </Link>
        <Link to="/signup" className="mobile-auth-link">
          Sign Up
        </Link>
        
        <div className="auth-content-wrapper">
          <div className="auth-content">
            <h1>Login to Your Account</h1>
            <div className="social-login">
              <p>Login using social networks</p>
              <div className="social-icons">
                <FaGoogle className="social-icon" />
                <FaLinkedin className="social-icon" />
                <FaGithub className="social-icon" />
                <FaFacebook className="social-icon" />
              </div>
            </div>
            
            <div className="divider">
              <span>or</span>
            </div>
            
            <form className="auth-form">
              <div className="input-group">
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-group">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                />
                <button 
                  type="button" 
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <button type="submit" className="submit-button">Login</button>
            </form>
            
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="auth-right">
        <div className="shapes">
          <div className="triangle"></div>
          <div className="circle"></div>
        </div>
        <h2>New Here?</h2>
        <p>Discover Your Ideal Career with AI-Powered Personalized Pathways</p>
        <Link to="/signup" className="switch-auth-btn">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;