import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
