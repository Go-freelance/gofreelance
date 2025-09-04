
import { useState, useEffect } from "react";


export function BackToTopButton() {

const [visible, setVisible] = useState(false);

  // Quand on scrolle, on active et désactive le bouton
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Remonte au dessus
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-600"
        >
          ↑ Up
        </button>
      )}
    </>
  );
}
