"use client";

import {useState} from "react";

export default function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
 };

 return (
  <header className="fixed top-0 w-full glass z-50">
   <div className="container mx-auto px-4 py-4">
    <div className="flex justify-between items-center">
     <div className="text-2xl font-bold gradient-text flex items-center">
      <span className="mr-2">✨</span>
      SocialDesign
     </div>

     {/* Desktop Navigation */}
     <nav className="hidden md:flex space-x-8">
      <a
       href="#home"
       className="hover:text-primary transition-colors flex items-center">
       <span className="mr-1">🏠</span> Home
      </a>
      <a
       href="#portfolio"
       className="hover:text-primary transition-colors flex items-center">
       <span className="mr-1">🎨</span> Portfolio
      </a>
      <a
       href="#skills"
       className="hover:text-primary transition-colors flex items-center">
       <span className="mr-1">⚡</span> Skills
      </a>
      <a
       href="#contact"
       className="hover:text-primary transition-colors flex items-center">
       <span className="mr-1">📞</span> Contact
      </a>
     </nav>

     {/* Mobile Menu Button */}
     <button
      className="md:hidden text-white focus:outline-none"
      onClick={toggleMenu}
      aria-label="Toggle menu">
      <svg
       className="w-6 h-6"
       fill="none"
       stroke="currentColor"
       viewBox="0 0 24 24">
       {isMenuOpen ? (
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M6 18L18 6M6 6l12 12"
        />
       ) : (
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M4 6h16M4 12h16M4 18h16"
        />
       )}
      </svg>
     </button>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
     <nav className="md:hidden mt-4 pb-4">
      <div className="flex flex-col space-y-4">
       <a
        href="#home"
        className="hover:text-primary transition-colors flex items-center py-2"
        onClick={() => setIsMenuOpen(false)}>
        <span className="mr-2">🏠</span> Home
       </a>
       <a
        href="#portfolio"
        className="hover:text-primary transition-colors flex items-center py-2"
        onClick={() => setIsMenuOpen(false)}>
        <span className="mr-2">🎨</span> Portfolio
       </a>
       <a
        href="#skills"
        className="hover:text-primary transition-colors flex items-center py-2"
        onClick={() => setIsMenuOpen(false)}>
        <span className="mr-2">⚡</span> Skills
       </a>
       <a
        href="#contact"
        className="hover:text-primary transition-colors flex items-center py-2"
        onClick={() => setIsMenuOpen(false)}>
        <span className="mr-2">📞</span> Contact
       </a>
      </div>
     </nav>
    )}
   </div>
  </header>
 );
}
