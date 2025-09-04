
import { ArrowUp } from "lucide-react";
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
          className="fixed bottom-5 right-5 bg-primary text-white  w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-pink-600 "
        >
          < ArrowUp className="w-8 h-6" />
        </button>
      )}
    </>
  );
}
