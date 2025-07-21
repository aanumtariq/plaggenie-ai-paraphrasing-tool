import Features from '../Components/TopFeatures/Features'

// function AllFeatures() {
//   return (
//     <Features />
//   )
// }

// export default AllFeatures

import React from 'react';
import { useLocation } from 'react-router-dom';

export default function AllFeatures() {
  const location = useLocation();
  const feature = location.state?.feature;

  if (!feature) {
    return <div className="container mt-5"><h2>Feature not found!</h2></div>;
  }

  return (
    <div className="container mt-5">
      <div className="p-5 rounded shadow bg-clr-f">
        <h2 className="text-info">{feature.title}</h2>
        <p>{feature.description}</p>
      </div>
    </div>
  );
}
