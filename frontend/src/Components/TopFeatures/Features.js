import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../CSS/Styles.css';

// Feature Card Component
const FeatureCard = ({ title, description, onClick }) => (
  <div className="col-md-6">
    <div 
      className="p-4 rounded shadow feature-card bg-clr-f" 
      onClick={onClick} 
      style={{ cursor: 'pointer' }}
    >
      <h5 className="text-info">{title}</h5>
      <p>{description}</p>
    </div>
  </div>
);

export default function Features() {
  const navigate = useNavigate();

  const features = [
    { id: 1, title: 'Standard', description: 'Provides a middle ground between changing the input text and keeping its meaning.' },
    { id: 2, title: 'Custom', description: 'Rewrites text to match the unique description provided.and keeping its meaning. '  },
    { id: 3, title: 'Creative', description: 'Rephrases text with the most inventiveness and expressionand keeping its meaning. .' },
    { id: 4, title: 'Formal', description: 'Rewrites ideas in a more sophisticated and professional way and keeping its meaning.x.' },
  ];

  const handleCardClick = (feature) => {
    navigate(`/features/${feature.id}`, { state: { feature } });
  };

  return (
    <section className="mb-5">
      <div className="container feature-container">
        <div className="d-flex justify-content-between align-items-center pt-5 pb-3 mt-5 mb-4">
          <h2>Top Features</h2>
          <Link to='/features' className="btn btn-outline-info btn-sm features">See All Features →</Link>
        </div>
        <div className="row g-4 feature-row">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.id} 
              title={feature.title} 
              description={feature.description} 
              onClick={() => handleCardClick(feature)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
