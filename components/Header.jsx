"use client";

import {useState} from "react";
import {FiHome, FiFolder, FiAward, FiMail, FiMenu, FiX} from "react-icons/fi";

export default function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
 };

 return (
  <header className="fixed top-0 w-full glass z-50">
   <div className="container mx-auto px-4 py-4">
    <div className="flex justify-between items-center">
     <div className="text-2xl font-bold text-white flex items-center">
      My.<span className="gradient-text">Portfolio</span>
     </div>

     {/* Desktop Navigation */}
     <nav className="hidden md:flex space-x-8">
      <a
       href="#home"
       className="hover:text-primary transition-colors flex items-center">
       <FiHome className="mr-1" /> Home
      </a>
      <a
       href="#portfolio"
       className="hover:text-primary transition-colors flex items-center">
       <FiFolder className="mr-1" /> Portfolio
      </a>
      <a
       href="#skills"
       className="hover:text-primary transition-colors flex items-center">
       <FiAward className="mr-1" /> Skills
      </a>
      <a
       href="#contact"
       className="hover:text-primary transition-colors flex items-center">
       <FiMail className="mr-1" /> Contact
      </a>
     </nav>

     {/* Mobile Menu Button */}
     <button
      className="md:hidden text-white focus:outline-none"
      onClick={toggleMenu}
      aria-label="Toggle menu">
      {isMenuOpen ? (
       <FiX className="w-6 h-6" />
      ) : (
       <FiMenu className="w-6 h-6" />
      )}
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
        <FiHome className="mr-2" /> Home
       </a>
       <a
        href="#portfolio"
        className="hover:text-primary transition-colors flex items-center py-2"
        onClick={() => setIsMenuOpen(false)}>
        <FiFolder className="mr-2" /> Portfolio
       </a>
       <a
        href="#skills"
        className="hover:text-primary transition-colors flex items-center py-2"
        onClick={() => setIsMenuOpen(false)}>
        <FiAward className="mr-2" /> Skills
       </a>
       <a
        href="#contact"
        className="hover:text-primary transition-colors flex items-center py-2"
        onClick={() => setIsMenuOpen(false)}>
        <FiMail className="mr-2" /> Contact
       </a>
      </div>
     </nav>
    )}
   </div>
  </header>
 );
}
