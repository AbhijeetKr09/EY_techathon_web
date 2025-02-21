import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaLinkedin, FaGithub, FaFacebook, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';
import '../styles/Signup.css'; // Use the dedicated Signup styles

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-left">
        <Link to="/" className="go-back">
          <FaArrowLeft /> Go Back
        </Link>
        
        <Link to="/login" className="mobile-auth-link">
          Login
        </Link>

        <div className="auth-content-wrapper">
          <div className="auth-content">
            <h1>Create a new Account</h1>
            <div className="social-login">
              <p>Sign Up using social networks</p>
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
              <div className="name-row">
                <div className="input-group">
                  <input type="text" placeholder="First Name" required />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Last Name" required />
                </div>
              </div>
              
              <div className="input-group">
                <input type="email" placeholder="Email" required />
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
              
              <div className="input-group">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="Confirm Password" 
                />
                <button 
                  type="button" 
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              
              <div className="textarea-group">
                <textarea placeholder="Tell us about yourself..." required></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="shapes">
          <div className="triangle"></div>
          <div className="circle"></div>
        </div>
        <h2>Already have an account?</h2>
        <Link to="/login" className="switch-auth-btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
