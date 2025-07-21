import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Usage from '../Components/Usage/Usage';
import Features from '../Components/TopFeatures/Features';
import ContactForm from '../Components/Contact/ContactForm';
import Footer from '../Components/Footer/Footer'
import CreativeBlogs from '../Components/Blogs/CreativeBlogs';
import { Link } from 'react-scroll';
// import Navbar from '../components/Navbar/Navbar'
// import Header from '../components/Header/Header'
// import Usage from '../components/Usage/Usage'
// import Features from '../components/Features/Features'
// import Blogs from '../components/Blogs/Blogs'
// import Contact from '../components/Contact/Contact'
// import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <>
        {/* <Navbar /> */}
        <Header />  
        <Usage />
        <Features />
        <ContactForm />
        
        {/* <Footer /> */}
    </>
  )
}

export default Home