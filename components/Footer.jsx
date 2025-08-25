import Link from "next/link";
import {
 FiMail,
 FiMapPin,
 FiInstagram,
 FiLinkedin,
 FiYoutube,
} from "react-icons/fi";
import {FaTiktok} from "react-icons/fa";

export default function Footer() {
 const currentYear = new Date().getFullYear();

 return (
  <footer className="bg-black py-12">
   <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
     {/* Brand Info */}
     <div className="lg:col-span-2">
      <div className="text-2xl font-bold gradient-text mb-4">
       Social Design Specialist
      </div>
      <p className="text-gray-400 mb-6">
       Menciptakan pengalaman visual yang menarik dan strategi media sosial yang
       efektif untuk membantu brand Anda tumbuh dan berkembang di dunia digital.
      </p>
      <div className="flex space-x-4">
       {[
        {
         name: "Instagram",
         icon: <FiInstagram />,
         url: "https://instagram.com/simp4iammm/",
        },
        {
         name: "Dribbble",
         icon: <FaTiktok />,
         url: "https://www.tiktok.com/@aidenhaileyy?_t=ZS-8zAYG4bJCRL&_r=1",
        },
        {
         name: "LinkedIn",
         icon: <FiLinkedin />,
         url: "https://www.linkedin.com/in/ilham-ali-wardiana-46a547380?utm_source=share&utm_campaign=share_via&utm_content=profile&ut-m_medium=ios_app",
        },
        {
         name: "YouTube",
         icon: <FiYoutube />,
         url: "https://www.youtube.com/@Joaquine999",
        },
       ].map((social, index) => (
        <Link
         target="_blank"
         rel="noopener noreferrer"
         key={index}
         href={social.url}
         className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#883aea] hover:text-[#883aea] transition-colors text-lg"
         aria-label={social.name}>
         {social.icon}
        </Link>
       ))}
      </div>
     </div>

     {/* Services */}
     <div>
      <h3 className="text-lg font-bold mb-4 text-primary">Services</h3>
      <ul className="space-y-2">
       {[
        "Social Media Management",
        "Content Creation",
        "Graphic Design",
        "Brand Identity",
        "Social Media Strategy",
        "Visual Content Production",
       ].map((service, index) => (
        <li key={index}>
         <Link
          href="#services"
          className="text-gray-400 hover:text-[#883aea] transition-colors">
          {service}
         </Link>
        </li>
       ))}
      </ul>
     </div>

     {/* Contact Info */}
     <div>
      <h3 className="text-lg font-bold mb-4 text-primary">Get In Touch</h3>
      <div className="space-y-3">
       <div className="flex items-center">
        <FiMail className="mr-3 text-primary" />
        <span className="text-gray-400">kenzyworld29@gmail.com</span>
       </div>
       <div className="flex items-center">
        <FiMapPin className="mr-3 text-primary" />
        <span className="text-gray-400">
         Kota Tasikmalaya, Indonesia (Remote Available)
        </span>
       </div>
      </div>
     </div>
    </div>

    {/* Copyright */}
    {/*<div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
     <div className="text-gray-400 text-sm mb-4 md:mb-0">
      © {currentYear} SocialDesign Specialist. All rights reserved.
     </div>
     <div className="flex space-x-6 text-sm text-gray-400">
      <a
       href="#privacy"
       className="hover:text-primary transition-colors">
       Privacy Policy
      </a>
      <a
       href="#terms"
       className="hover:text-primary transition-colors">
       Terms of Service
      </a>
     </div>
    </div>*/}
   </div>
  </footer>
 );
}
