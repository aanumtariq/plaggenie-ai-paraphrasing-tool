import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../CSS/Styles.css';
import PropTypes from 'prop-types';

const BeforeParaphrase = ({ text, charCount, handleInputChange, setTone }) => {
  const [selectedTone, setSelectedTone] = useState("formal"); // Default tone

  useEffect(() => {
    setTone(selectedTone);
  }, [selectedTone, setTone]);

  return (
    <div className="field before rounded shadow">
      <h2>Before Paraphrase</h2>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text here..."
      />
      <div className="field-footer">
        <span>{`Characters: ${charCount}/1000`}</span>

        <select id="mode-select" onChange={(e) => {
            console.log("Selected Tone:", e.target.value); 
            setTone(e.target.value);
        }}>
          <option value="formal">Formal</option>
          <option value="casual">Casual</option>
          <option value="funny">Funny</option>
          <option value="blogger">Blogger</option>
          <option value="news">News</option>
          <option value="laws">Laws</option>
        </select>
      </div>
    </div>
  );
};

BeforeParaphrase.propTypes = {
  text: PropTypes.string.isRequired,
  charCount: PropTypes.number.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  setTone: PropTypes.func.isRequired,
};

export default BeforeParaphrase;
