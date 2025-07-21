import React from 'react'
import { Link } from 'react-router-dom'

function FeatureCard() {
    const FeatureCard = ({ title, description }) => {
        return (
            <div className="col-md-6">
              <div className="p-4 rounded shadow feature-card bg-clr-f">
                <h5 className="text-info">{title}</h5>
                <p>{description}</p>
              </div>
            </div>
          );
        };
    }
export default FeatureCard