import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group fixed bottom-6 right-6 z-50 rounded-full border border-[var(--color-line)] bg-[var(--color-accent)] p-3 shadow-lg shadow-[rgba(255,106,0,0.25)] transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
          <ChevronUp className="relative z-10 h-5 w-5 text-white transition-transform duration-300 group-hover:translate-y-[-1px]" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
