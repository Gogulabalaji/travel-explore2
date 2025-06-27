import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/packages');
  }
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Your Journey Your Story</h1>
        <p>Choose Your Favourite Destination.</p>
        <button className="hero-btn" onClick={handleClick}>Start Your Journey</button>
      </div>
    </section>
  );
};

export default Hero;
