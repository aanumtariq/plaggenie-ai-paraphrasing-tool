// import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
// import logo2 from '../../Images/logo2.png'
// import '../../CSS/Styles.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { Link, NavLink } from 'react-router-dom'


// export default function Footer() {
//   return (
//     <>
//       <footer className="footer text-white py-5 mb-5 custom-border ">
//         <div className="container">
//           <div className="row">
//             {/* Logo and description */}
//             <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//               <div className="d-flex align-items-center mb-3">
//                 <Link className="" to="/">
//                   <img src={logo2} alt="Logo2" width="200px" height="50px" />
//                 </Link>

//               </div>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aperiam velit sequi labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aperiam velit sequi labore.
//               </p>
//             </div>

//             {/* Pages Links */}
//             <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 col-mq">
//               <h5 className="mb-3">Pages</h5>
//               <ul className="list-unstyled">
//                 <li className="nav-item">
//                   <NavLink to="/" className={({ isActive }) => ` ${isActive ? "active" : 'nav-link'} text-white text-decoration-none `}  > Home </NavLink>
//                 </li>

//                 <li className="nav-item">
//                   <NavLink to="/blog" className={({ isActive }) => ` ${isActive ? "active" : 'nav-link'} text-white text-decoration-none `}>Blog</NavLink></li>
//                 <li className="nav-item">
//                   <NavLink to="/about" className={({ isActive }) => ` ${isActive ? "active" : 'nav-link'} text-white text-decoration-none`} >About Us</NavLink></li>
//               </ul>
//             </div>
//             {/* Service Links */}
//             <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 col-mq">
//               <h5 className="mb-3">Service</h5>
//               <ul className="list-unstyled">
//                 <li className="nav-item">
//                   <NavLink to="/" className={({ isActive }) => ` ${isActive ? "active" : 'nav-link'} text-white text-decoration-none `}  > Home </NavLink>
//                 </li>

//                 <li className="nav-item">
//                   <NavLink to="/blog" className={({ isActive }) => ` ${isActive ? "active" : 'nav-link'} text-white text-decoration-none `}>Blog</NavLink></li>
//                 <li className="nav-item">
//                   <NavLink to="/about" className={({ isActive }) => ` ${isActive ? "active" : 'nav-link'} text-white text-decoration-none`} >About Us</NavLink></li>

//               </ul>
//             </div>
//             {/* Follow Us */}
//             <div className="col-lg-3 col-md-6 col-mq">
//               <h5 className="mb-3 follow">Follow</h5>
//               <hr className="border border-white w-50" />
//               <ul className="list-unstyled mt-3">
//               <li>
//       <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//       <FontAwesomeIcon icon="fa-brands fa-facebook" /> Facebook
//       </a>
      
//     </li>
//     <li>
//       <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//       <i class="fa-brands fa-instagram"></i> Instagram
//       </a>
//     </li>
               
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div class="container text-center">
//           <p>&copy; 2024 PlagGenie. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </>
//   )
// }
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Images/logo.png";
import "../../CSS/Styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faGoogle, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer text-white py-5 bg-dark">
        <div className="container text-center">
          {/*logo*/}
          <Link className="" to="/">
                 <img src={logo} alt="Logo" width="200px" height="50px" />
           </Link>
          {/* Social Media Links */}
          <div className="mb-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://plus.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FontAwesomeIcon icon={faGoogle} size="lg" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className=" nav-foot-link">
            <NavLink to="/" className="text-white mx-3 text-decoration-none">
              Home
            </NavLink>
           <NavLink to="/about" className="text-white mx-3 text-decoration-none">
              About
            </NavLink>
            <NavLink to="/contact" className="text-white mx-3 text-decoration-none">
              Contact Us
            </NavLink>
            <NavLink to="/About" className="text-white mx-3 text-decoration-none">
              Our Team
            </NavLink>
          </div>

          {/* Copyright Section */}
          <div className="copy-right">
            <p>&copy; 2024; Designed by <strong>A.M.P.S</strong></p>
          </div>
        </div>
      </footer>
    </>
  );
}

