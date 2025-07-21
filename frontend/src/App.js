import React, { useState } from 'react';
import { CreditProvider, useCredits } from './context/CreditContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import CustomAd from './Components/CustomAd'; // Add this import

import Login from './Components/Login/LoginComponent';
import Signup from './Components/Signup/SignupComponent';
import Navbar from './Components/Navbar/Navbar';
import AllFeatures from './Pages/AllFeatures';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import ContactUs from './Pages/ContactUs';
import Services from './Pages/Services';

function App() {
  const [showAd, setShowAd] = useState(false);
  
  // This wrapper component will handle the ad system
  const AdWrapper = ({ children }) => {
    const { credits, addCredits } = useCredits(); // Make sure to import useCredits
    
    return (
      <>
        {children}
        
        {/* Add Watch Ad button somewhere in your layout */}
        <button 
          onClick={() => setShowAd(true)}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px 20px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: 100
          }}
        >
          Watch Ad (+50 Credits)
        </button>

        {/* Ad Modal */}
        {showAd && (
          <CustomAd
            onClose={() => setShowAd(false)}
            onAdComplete={() => {
              addCredits(50);
              setShowAd(false);
            }}
          />
        )}
      </>
    );
  };

  return (
    <CreditProvider>
      <AuthProvider>
        <Router>
          <AdWrapper>
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/all-features" element={<AllFeatures />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </AdWrapper>
        </Router>
      </AuthProvider>
    </CreditProvider>
  );
}

export default App;