// components/ScrollToTop.jsx
"use client";

import {useState, useEffect} from "react";

export default function ScrollToTop() {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const toggleVisibility = () => {
   if (window.pageYOffset > 300) {
    setIsVisible(true);
   } else {
    setIsVisible(false);
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
   {isVisible && (
    <button
     onClick={scrollToTop}
     className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center glass hover:bg-accent transition-colors z-40"
     aria-label="Scroll to top">
     <span className="text-xl">↑</span>
    </button>
   )}
  </>
 );
}
