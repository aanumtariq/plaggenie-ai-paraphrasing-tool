import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../CSS/Styles.css";
import { useAuth } from "../../context/AuthContext";
import { ClipLoader } from "react-spinners";
import { useCredits } from "../../context/CreditContext";

const ActionButton = ({ onParaphrase, setParaphrasedText, tone, setHumanization, setGrammarly, setPlagiarism }) => {
  const { isLoggedIn } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { /*credits*/ deductCredits, getRequiredCredits, addCredits} = useCredits();

  const handleClick = async () => {
    if (!isLoggedIn) {
      setShowModal(true);
      return;
    }

    // Calculate required credits (1 per 100 chars, min 1)
    const required = getRequiredCredits(onParaphrase.length);
    
    // Check and deduct credits immediately
    if (!deductCredits(onParaphrase.length)) {
      alert(`You need ${Math.ceil(onParaphrase.length/100)*20} credits!`);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/paraphrase", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ text: onParaphrase, tone }),
      });

      const data = await response.json();

      if (response.ok) {
        setParaphrasedText(data.paraphrased_text);
        if (typeof setHumanization === "function") setHumanization(`${data.humanization_score}%`);
        if (typeof setGrammarly === "function") setGrammarly(`${data.grammar_score}%`);
        if (typeof setPlagiarism === "function") setPlagiarism(`${data.plagiarism_free_score}%`);
      } else {
        // Refund credits if API fails
        addCredits(required);
        console.error("Error in paraphrasing:", data.message);
      }
    } catch (error) {
      // Refund credits on network errors
      addCredits(required);
      console.error("API call failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="action-button">
      <button onClick={handleClick} className="btn btn-primary paraphrase-btn" disabled={loading}>
        {loading ? "Paraphrasing..." : "Paraphrase" }
      </button>
      
      {/* Credit balance display */}
      

      {loading && <div className="spinner-container"><ClipLoader color="#ffffff" size={25} /></div>}
      
      {showModal && (
        <div className="modal fade show d-block custom-modal-backdrop" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content custom-modal-content">
              <div className="modal-header custom-modal-header">
                <h5 className="modal-title"><i className="bi bi-shield-lock-fill"></i> Login Required</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className="custom-modal-text">You need to log in to access this feature.</p>
              </div>
              <div className="modal-footer custom-modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => (window.location.href = "/login")}>
                  Go to Login
                </button>
                <button type="button" className="btn btn-outline-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionButton;