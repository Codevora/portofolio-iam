"use client";

import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {
 FiHome,
 FiFolder,
 FiAward,
 FiMail,
 FiMenu,
 FiX,
 FiDownload,
} from "react-icons/fi";

export default function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const router = useRouter();

 const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/profile/CV_Ilham_Ali_Wardiana.pdf";
  link.download = "CV_Ilham_Ali_Wardiana_Social_Media_Specialist.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
 };

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
      <Link
       href="#home"
       className="hover:text-[#883aea] transition-colors flex items-center">
       <FiHome className="mr-1" /> Home
      </Link>
      <Link
       href="#portfolio"
       className="hover:text-[#883aea] transition-colors flex items-center">
       <FiFolder className="mr-1" /> Portfolio
      </Link>
      <Link
       href="#skills"
       className="hover:text-[#883aea] transition-colors flex items-center">
       <FiAward className="mr-1" /> Skills
      </Link>
      <Link
       href="#contact"
       className="hover:text-[#883aea] transition-colors flex items-center">
       <FiMail className="mr-1" /> Contact
      </Link>
      <button
       onClick={handleDownloadCV}
       className="hover:text-[#883aea] transition-colors flex items-center bg-transparent border-none cursor-pointer">
       <FiDownload className="mr-1" /> Download CV
      </button>
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
       <Link
        href="#home"
        className="hover:text-primary transition-colors flex items-center py-2"
        onClick={() => setIsMenuOpen(false)}>
        <FiHome className="mr-2" /> Home
       </Link>
       <Link
        href="#portfolio"
        className="hover:text-primary transition-colors flex items-center py-2"
        onClick={() => setIsMenuOpen(false)}>
        <FiFolder className="mr-2" /> Portfolio
       </Link>
       <Link
        href="#skills"
        className="hover:text-primary transition-colors flex items-center py-2"
        onClick={() => setIsMenuOpen(false)}>
        <FiAward className="mr-2" /> Skills
       </Link>
       <Link
        href="#contact"
        className="hover:text-primary transition-colors flex items-center py-2"
        onClick={() => setIsMenuOpen(false)}>
        <FiMail className="mr-2" /> Contact
       </Link>
       <button
        onClick={handleDownloadCV}
        className="hover:text-[#883aea] transition-colors flex items-center bg-transparent border-none cursor-pointer">
        <FiDownload className="mr-1" /> Download CV
       </button>
      </div>
     </nav>
    )}
   </div>
  </header>
 );
}
