import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../CSS/Styles.css';
import logo from '../../Images/logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth(); // Use context for login state and logout function
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();  // Call the logout function from context
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => `${isActive ? "active" : 'nav-link'}`}> Home </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/blog" className={({ isActive }) => `${isActive ? "active" : 'nav-link'}`}> Blogs </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => `${isActive ? "active" : 'nav-link'}`}> About Us </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => `${isActive ? "active" : 'nav-link'}`}> Contact Us </NavLink>
              </li>
    
              {/* Show Sign Up button if not logged in */}
              {!isLoggedIn && (
                <li className="nav-item">
                  <NavLink to="/signup" className="nav-btn nav-link"> Sign Up </NavLink>
                </li>
              )}

              {/* Show Logout button if logged in */}
              {isLoggedIn && (
                <button onClick={handleLogout} className="text-gray-300 hover:text-white focus:outline-none logout">
                  Logout
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import '../../CSS/Styles.css';
// import logo from '../../Images/logo.png';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { useAuth } from "../../context/AuthContext"; // Import the useAuth hook

// const Navbar = () => {
//   const { isLoggedIn, logout } = useAuth(); // Use context for login state and logout function
//   const navigate = useNavigate();

//   const handleLogout = (e) => {
//     e.preventDefault();
//     logout();  // Call the logout function from context
//     navigate("/login"); // Redirect to login page after logout
//   };

//   return (
//     <nav className="navbar navbar-expand-lg py-3">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           <img src={logo} alt="Logo" />
//         </Link>
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <NavLink to="/" className="nav-link">Home</NavLink>
//             </li>
//             {/* Other Nav items */}
//             {!isLoggedIn ? (
//               <>
//                 <li className="nav-item">
//                   <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink to="/login" className="nav-link">Login</NavLink>
//                 </li>
//               </>
//             ) : (
//               <li className="nav-item">
//                 <button onClick={handleLogout} className="nav-link btn btn-link">Logout</button>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

