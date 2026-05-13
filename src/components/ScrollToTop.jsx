"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window?.scrollY > 300);
    };

    window?.addEventListener("scroll", toggleVisibility);
    return () => window?.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-12  left-6 z-30 bg-primary text-white p-3 rounded-full shadow-md hover:bg-secondary transition"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
};

export default ScrollToTopButton;
