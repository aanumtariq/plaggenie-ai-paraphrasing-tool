
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../CSS/Styles.css";
// import {Link,  useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (login(email, password)) {
//       navigate("/");
//     } else {
//       alert("Invalid credentials or user not registered.");
//     }
//   };

//   return (
    
//     <div className="d-flex justify-content-center align-items-center vh-100 login-bg">
//       <div className="card login-card shadow-lg">
//         <div className="card-body">
//           <h2 className="card-title text-center mb-4 login-title">Login</h2>
//           <form onSubmit={handleLogin}>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="form-control login-input"
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="form-control login-input"
//               />
//             </div>
//             <button
//               type="submit"
//               className="btn btn-primary w-100 login-btn"
//             >
//               Login
//             </button>
//           </form>
//           <p className="text-center mt-3 text-white">
//             Or create new  account
//             <Link to="/signup" className="text-success text-danger"> Signup  here</Link>
//           </p>
//         </div>
//       </div>
//       <div>

//       <p className="text-center mt-3 text-white">
//             Back to home
//             <Link to="/" className="text-success text-danger"> Home</Link>
//           </p>
//       </div>
        
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../CSS/Styles.css";
import logo from '../../Images/gennie.png';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Import the useAuth hook

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth(); // Get login function from context
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // On successful login, call the login function from context
      login();
      navigate("/"); // Redirect to homepage after successful login
    } catch (err) {
      setError(err.message || "Invalid credentials or user not registered.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-bg">
      <div className="card login-card">
        <div className="login-avatar">
          <i className="fa fa-user-circle">
            <img src={logo} alt="gennie" />
          </i>
        </div>
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control login-input"
          />
          <button type="submit" className="btn btn-primary w-100 login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {error && <p className="text-center mt-3 text-danger">{error}</p>}
        <p className="text-center mt-3 text-white">
          Or create a new account
          <Link to="/signup" className="text-success ms-2">Signup here</Link>
        </p>
        <p className="text-center mt-3 text-white">
          Back to
          <Link to="/" className="text-danger ms-2">Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
