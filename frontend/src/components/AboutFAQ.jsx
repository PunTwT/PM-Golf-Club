import {Link} from "react-router-dom";
import { useState } from "react";
import "../css/AboutFAQ.css";

const faqs = [
  { id: 1, question: "How can I track my order?",      answer: "You can track your order via the tracking link sent to your email." },
  { id: 2, question: "What is the return policy?",     answer: "We accept returns within 30 days of purchase." },
  { id: 3, question: "How long does shipping take?",   answer: "Standard shipping takes 3-5 business days." },
  { id: 4, question: "Do you ship internationally?",   answer: "Yes, we ship to over 50 countries worldwide." },
];

function AboutFAQ() {
  const [openId, setOpenId] = useState(null);  // tracks which FAQ is open

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));  // close if already open
  };

  return (
    <section className="aboutfaq-section">
      <section className="aboutus-container">
            <h3 className="aboutus-heading">About Us</h3>
            <p className="aboutus-text">
                Welcome to PM Golf Club. We are dedicated to providing the finest
                golf equipment for players of all levels.Welcome to PM Golf Club. We are dedicated to providing the finest
                golf equipment for players of all levels.Welcome to PM Golf Club. We are dedicated to providing the finest
                golf equipment for players of all levels.Welcome to PM Golf Club. We are dedicated to providing the finest
                golf equipment for players of all levels.Welcome to PM Golf Club. We are dedicated to providing the finest
                golf equipment for players of all levels.Welcome to PM Golf Club. We are dedicated to providing the finest
                golf equipment for players of all levels.
            </p>
        <Link to="/teams" className="aboutus-btn">Our Team...</Link>
        </section>

      <div className="aboutfaq-divider" />

      <div className="faqs-container">
      <h3 className="faqs-heading">FAQs</h3>
      <ul className="faqs-list">
        {faqs.map((faq) => (
          <li key={faq.id} className="faqs-item">

            <button className="faqs-question" onClick={() => toggle(faq.id)}>
              <span>{faq.question}</span>
              <span className={`faqs-arrow ${openId === faq.id ? "open" : ""}`}>
                ❯
              </span>
            </button>

            {openId === faq.id && (
              <p className="faqs-answer">{faq.answer}</p>
            )}

          </li>
        ))}
      </ul>
    </div>
    </section>
  );
}

export default AboutFAQ;