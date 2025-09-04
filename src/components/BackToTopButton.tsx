
import { useState, useEffect } from "react";
import {ArrowUp} from "lucide-react"



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
          className="fixed h-16 w-16 bottom-5 right-5 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-600"
        >
          <ArrowUp size={24} className="text-center font-bold" />
        </button>
      )}
    </>
  );
}
