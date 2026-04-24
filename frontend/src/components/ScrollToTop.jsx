// components/ScrollToTop.jsx
// Floating button that appears after scrolling down and smoothly returns to the top

import { useState, useEffect } from "react";
import "../css/ScrollToTop.css";

function ScrollToTop() {
  // Controls whether the button is visible
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls more than 300px from the top
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smoothly scroll back to the top of the page
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button className="scroll-to-top" onClick={scrollUp}>
        <i class="fa-solid fa-angles-up"></i>
      </button>
    )
  );
}

export default ScrollToTop;
