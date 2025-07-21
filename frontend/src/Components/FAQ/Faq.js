import React, { useState } from "react";
import faq from '../../Images/faq.png'

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Plagiarism Removal?",
      answer:
        "Plagiarism removal is the process of eliminating copied content to ensure originality in writing. It is crucial for academic, professional, and creative integrity."
    },
    {
      question: "What is Paraphrasing?",
      answer:
        "Paraphrasing is rewriting text in a unique way while retaining its original meaning. It helps improve readability and avoids plagiarism."
    },
    {
      question: "What is Content Detection?",
      answer:
        "Content detection identifies duplicated or plagiarized text in documents, ensuring the content's authenticity and originality."
    },
    {
      question: "What is Creative Content Generation?",
      answer:
        "Creative content generation involves crafting original and engaging content tailored to specific audiences, often using advanced AI tools."
    },
    {
      question: "Why is PlagGenie website necessary?",
      answer:
        "PlagGenie is essential because it offers tools for plagiarism detection, paraphrasing, and content creation, ensuring originality and quality in your work."
    },
    {
      question: "How does PlagGenie work?",
      answer:
        "PlagGenie uses advanced AI algorithms to analyze text, detect plagiarism, and offer paraphrased and original content for academic and professional use."
    },
    {
      question: "What makes PlagGenie different from others?",
      answer:
        "PlagGenie stands out because of its accuracy, user-friendly interface, and comprehensive tools for plagiarism detection, paraphrasing, and creative content creation."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-search">
          <input type="text" placeholder="Describe your issue" className="faq-input" />
          <button className="faq-search-btn">Search</button>
        </div>
        <div className="faq-illustration">
        <img
          src={faq} 
          alt="FAQ Illustration"
          className="faq-image"
        />
      </div>
      </div>

     

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
