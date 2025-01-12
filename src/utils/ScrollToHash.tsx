import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove the "#" and find the element by ID
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll into view
      }
    }
  }, [hash]);

  return null;
};
