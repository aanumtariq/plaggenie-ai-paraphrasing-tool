import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../CSS/Styles.css";
import logo from '../../Images/gennie.png';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      alert("Signup successful! You can now log in.");
      navigate("/login"); // Redirect to login page after successful signup
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 signup-bg">
      <div className="card signup-card shadow-lg">
        <div className="card-body">
          <div className="login-avatar">
            <i className="fa">
              <img src={logo} alt="gennie" />
            </i>
          </div>
          <h2 className="card-title text-center mb-4 signup-title">Signup</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-control signup-input"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control signup-input"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control signup-input"
              />
            </div>
            <button
              type="submit"
              className="btn btn-success w-100 signup-btn"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Signup"}
            </button>
          </form>
          {error && <p className="text-center mt-3 text-danger">{error}</p>}
          <p className="text-center mt-3 text-white">
            Already have an account? 
            <Link to="/login" className="text-success text-danger"> Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
