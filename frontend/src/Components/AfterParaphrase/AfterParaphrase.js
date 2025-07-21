import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import '../../CSS/Styles.css' 


const AfterParaphrase = ({ paraphrasedText, humanizePercent, grammarlyPercent, plagiarismPercent }) => {
  console.log("AfterParaphrase Props:", { paraphrasedText, humanizePercent, grammarlyPercent, plagiarismPercent });

  return (
    <div className="field after rounded shadow">
      <h2>After Paraphrase</h2>
      <textarea
        value={paraphrasedText}
        readOnly
        placeholder="Your paraphrased text will appear here..."
      />
      
      <div className="results-footer">
        <p> <span>{humanizePercent}</span> <br/> Humanized</p>
        <p> <span>{grammarlyPercent}</span><br/> Grammarly Correct</p>
        <p> <span>{plagiarismPercent}</span><br/> Plagiarism Free</p>
      </div>
    </div>
  );
};

export default AfterParaphrase;
