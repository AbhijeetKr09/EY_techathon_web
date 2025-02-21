import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar'; // Import the Navbar component
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Use the Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Perfect Career Path</h1>
          <p>Use AI-powered assessments to find your ideal career match and get personalized guidance for your professional journey.</p>
          <div className="hero-buttons">
            <Link to="/signup" className="primary-btn">Start Free Assessment</Link>
            <Link to="/about" className="secondary-btn">Learn More</Link>
          </div>
          <div className="stats">
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Career Paths</p>
            </div>
            <div className="stat-item">
              <h3>10K+</h3>
              <p>Success Stories</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why Choose CareerGuide?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>AI-Powered Assessment</h3>
            <p>Get personalized career recommendations based on your skills, interests, and personality.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Detailed Analysis</h3>
            <p>Receive comprehensive reports with actionable insights about your career potential.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Learning Paths</h3>
            <p>Access customized learning resources and roadmaps for your chosen career.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Expert Guidance</h3>
            <p>Connect with industry professionals and career counselors for personalized advice.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Start Your Career Journey?</h2>
          <p>Join thousands of successful professionals who found their perfect career path with us.</p>
          <Link to="/signup" className="cta-button">Get Started Now</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CareerGuide</h3>
            <p>Empowering careers through AI-driven guidance</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#features">Features</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: support@careerguide.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              {/* Add social media icons/links here */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 CareerGuide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
