import React from 'react';
import '../Styles/Testimonials.css';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';

const Testimonials = () => {
  const reviews = [
    {
      image: user1,
      name: 'Nisha',
      comment: 'Travel honey moon trip to very enjoyfully. perfectly planned!',
    },
    {
      image: user2,
      name: 'John Doe',
      comment: 'Excellent service, affordable packages, and great support! Will book again with Travel',
    },
    {
      image: user3,
      name: 'Angel',
      comment: 'I was nervous about traveling solo,Travel made it smooth and exciting!',
    },
  ];

  return (
    <section className="testimonials-section">
      <h2>What Our Travelers Say</h2>
      <div className="testimonials-grid">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <img src={review.image} alt={review.name} />
            <h4>{review.name}</h4>
            <p>"{review.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
