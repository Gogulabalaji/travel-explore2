import React from 'react';
import '../Styles/About.css';
import aboutImage from '../assets/about.jpg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Travel-Explore</h2>
          <p>
            Travel-Explore is your trusted travel partner. We specialize in offering customized travel experiences, handpicked
            destinations, and affordable holiday packages. With Travel-Explore, your dream vacation is just a click away.
          </p>
          <p>
            From solo adventures to family getaways, we’re committed to making your journeys memorable and stress-free.
            Let us take care of the planning while you enjoy the .
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Travel-Explore" />
        </div>
      </div>
    </section>
  );
};

export default About;
