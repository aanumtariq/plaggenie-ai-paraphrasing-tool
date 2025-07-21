import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Can be deleted if unused
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';

import { AuthProvider, useAuth } from "./context/AuthContext";
import { CreditProvider } from "./context/CreditContext"; // ✅ Add this line

import Layout from './Layout.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import ContactUs from './Pages/ContactUs.js';
import Blogs from './Pages/Blogs.js';
import LoginComponent from './Components/Login/LoginComponent.js';
import SignupComponent from './Components/Signup/SignupComponent.js';
import Services from './Pages/Services.js';
import AllFeatures from './Pages/AllFeatures.js';
import Features from './Components/TopFeatures/Features.js';
import CreativeBlogs from './Components/Blogs/CreativeBlogs.js';
import Faq from './Components/FAQ/Faq.js';


const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='services' element={<Services />} />
      <Route path='features/:id' element={<AllFeatures />} />
      <Route path='features' element={<Features />} />
      <Route path='blog/:id' element={<Blogs />} />
      <Route path='blog' element={<CreativeBlogs />} />
      <Route path='login' element={<LoginComponent />} />
      <Route path='signup' element={<SignupComponent />} />
      <Route path='faq' element={<Faq />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CreditProvider> 
        <RouterProvider router={router} />
      </CreditProvider>
    </AuthProvider>
  </React.StrictMode>
);
