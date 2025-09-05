import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [showtooltip, setShowtooltip] = useState(false);

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
          onMouseEnter={() => setShowtooltip(true)}
          onMouseLeave={() => setShowtooltip(false)}
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-primary text-white  w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-pink-600 "
        >
          <ArrowUp className="w-8 h-6" />
          {showtooltip && (
            <div className="absolute bottom-10 right-10 bg-white text-secondary px-4 py-2 rounded-md shadow-lg">
              Retour en haut
            </div>
          )}
        </button>
      )}
    </>
  );
}
