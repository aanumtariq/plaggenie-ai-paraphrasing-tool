import React from 'react';

const CustomAd = ({ onAdComplete }) => (
  <div style={{
    position: 'fixed',
    inset: 0, // Covers entire screen
    backgroundColor: 'black',
    zIndex: 2000, // Higher than all elements
    display: 'grid',
    placeItems: 'center'
  }}>
    <video
      autoPlay
      muted
      playsInline
      onEnded={onAdComplete}
      style={{ width: '90vw', maxHeight: '90vh' }}
    >
      <source src="/ads/custom_ad1.mp4" type="video/mp4" />
      Your browser doesn't support HTML5 video.
    </video>
  </div>
);

export default CustomAd;