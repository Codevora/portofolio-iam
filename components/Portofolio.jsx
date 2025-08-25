"use client";

import {useState} from "react";
import {
 FiFolder,
 FiCheck,
 FiFilter,
 FiX,
 FiExternalLink,
 FiGithub,
 FiArrowLeft,
 FiArrowRight,
} from "react-icons/fi";

export default function Portfolio() {
 const [activeFilter, setActiveFilter] = useState("all");
 const [selectedItem, setSelectedItem] = useState(null);
 const [currentIndex, setCurrentIndex] = useState(0);

 const portfolioItems = [
  {
   id: 1,
   title: "Social Media Campaign",
   category: "social",
   image: "/api/placeholder/400/300",
   banner: "/api/placeholder/800/400",
   description:
    "Kampanye media sosial lengkap dengan konten visual yang meningkatkan engagement hingga 150%",
   results: "2.5M Reach, 45K Engagement",
   fullDescription:
    "Sebuah kampanye media sosial komprehensif yang dirancang untuk meningkatkan brand awareness dan engagement. Saya membuat serangkaian konten visual yang konsisten, termasuk carousel posts, stories, dan reels yang dioptimalkan untuk algoritma Instagram.",
   technologies: ["Instagram", "Canva", "Meta Business Suite", "Analytics"],
   features: [
    "Content Strategy Development",
    "Visual Design Creation",
    "Performance Analytics",
    "Community Management",
   ],
   liveUrl: "#",
   githubUrl: "#",
   images: [
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
   ],
  },
  {
   id: 2,
   title: "Brand Identity Design",
   category: "design",
   image: "/api/placeholder/400/300",
   banner: "/api/placeholder/800/400",
   description:
    "Mendesain identitas brand yang konsisten untuk media sosial dan marketing materials",
   results: "Complete Brand Package",
   fullDescription:
    "Pembuatan identitas brand lengkap mulai dari logo, color palette, typography, hingga guideline untuk media sosial. Desain ini memastikan konsistensi visual across semua platform.",
   technologies: [
    "Adobe Illustrator",
    "Photoshop",
    "Figma",
    "Brand Guidelines",
   ],
   features: [
    "Logo Design",
    "Color Palette",
    "Typography System",
    "Social Media Kit",
   ],
   liveUrl: "#",
   githubUrl: "#",
   images: ["/api/placeholder/600/400", "/api/placeholder/600/400"],
  },
  {
   id: 3,
   title: "Content Calendar Strategy",
   category: "strategy",
   image: "/api/placeholder/400/300",
   banner: "/api/placeholder/800/400",
   description:
    "Perencanaan dan strategi konten bulanan untuk berbagai platform media sosial",
   results: "30% Time Saved, Consistent Posting",
   fullDescription:
    "Pengembangan strategi konten dan calendar management untuk multiple social media platforms. Termasuk content planning, scheduling, dan performance tracking.",
   technologies: ["Notion", "Trello", "Google Sheets", "Social Media Tools"],
   features: [
    "Content Planning",
    "Scheduling System",
    "Performance Metrics",
    "Optimization Strategy",
   ],
   liveUrl: "#",
   githubUrl: "#",
   images: ["/api/placeholder/600/400"],
  },
  {
   id: 4,
   title: "Instagram Reels Series",
   category: "video",
   image: "/api/placeholder/400/300",
   banner: "/api/placeholder/800/400",
   description:
    "Serial video pendek yang viral dengan efek visual menarik dan storytelling kuat",
   results: "1.2M Views, 15K New Followers",
   fullDescription:
    "Produksi serial Instagram Reels dengan efek visual kreatif dan storytelling yang engaging. Setiap reel dioptimalkan untuk viral potential dan audience engagement.",
   technologies: ["CapCut", "Adobe Premiere", "After Effects", "Instagram"],
   features: [
    "Video Editing",
    "Motion Graphics",
    "Sound Design",
    "Optimization",
   ],
   liveUrl: "#",
   githubUrl: "#",
   images: [
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
   ],
  },
  {
   id: 5,
   title: "Social Media Branding",
   category: "branding",
   image: "/api/placeholder/400/300",
   banner: "/api/placeholder/800/400",
   description:
    "Rebranding lengkap presence media sosial dengan visual yang cohesive dan engaging",
   results: "85% Follower Growth",
   fullDescription:
    "Proses rebranding lengkap untuk social media presence, termasuk profile optimization, content strategy, dan visual identity development.",
   technologies: ["Canva", "Instagram", "Facebook", "Analytics"],
   features: [
    "Profile Optimization",
    "Content Strategy",
    "Visual Identity",
    "Growth Strategy",
   ],
   liveUrl: "#",
   githubUrl: "#",
   images: ["/api/placeholder/600/400", "/api/placeholder/600/400"],
  },
  {
   id: 6,
   title: "Advertisement Designs",
   category: "ads",
   image: "/api/placeholder/400/300",
   banner: "/api/placeholder/800/400",
   description:
    "Desain iklan media sosial yang eye-catching dan high-converting untuk berbagai produk",
   results: "5.2% CTR, 320% ROAS",
   fullDescription:
    "Desain iklan media sosial yang dioptimalkan untuk conversion dan engagement. Setiap design melalui proses A/B testing untuk memastikan performa terbaik.",
   technologies: ["Facebook Ads", "Instagram Ads", "Canva", "Analytics"],
   features: [
    "Ad Design",
    "A/B Testing",
    "Performance Tracking",
    "Optimization",
   ],
   liveUrl: "#",
   githubUrl: "#",
   images: [
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
   ],
  },
 ];

 const filters = [
  {id: "all", name: "All Projects"},
  {id: "social", name: "Social Media"},
  {id: "design", name: "Graphic Design"},
  {id: "strategy", name: "Strategy"},
  {id: "video", name: "Video Content"},
  {id: "branding", name: "Branding"},
  {id: "ads", name: "Advertisement"},
 ];

 const filteredItems =
  activeFilter === "all"
   ? portfolioItems
   : portfolioItems.filter((item) => item.category === activeFilter);

 const openModal = (item, index) => {
  setSelectedItem(item);
  setCurrentIndex(index);
  document.body.style.overflow = "hidden"; // Prevent background scrolling
 };

 const closeModal = () => {
  setSelectedItem(null);
  document.body.style.overflow = "auto"; // Re-enable scrolling
 };

 const navigateItems = (direction) => {
  const currentArray = activeFilter === "all" ? portfolioItems : filteredItems;
  let newIndex;

  if (direction === "next") {
   newIndex = (currentIndex + 1) % currentArray.length;
  } else {
   newIndex = (currentIndex - 1 + currentArray.length) % currentArray.length;
  }

  setSelectedItem(currentArray[newIndex]);
  setCurrentIndex(newIndex);
 };

 // Close modal on escape key
 if (typeof window !== "undefined") {
  window.addEventListener("keydown", (e) => {
   if (e.key === "Escape" && selectedItem) {
    closeModal();
   }
  });
 }

 return (
  <section
   id="portfolio"
   className="py-16 bg-dark">
   <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
     Creative <span className="gradient-text">Portfolio</span>
    </h2>
    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
     Kumpulan project terbaik dalam social media management dan graphic design
     untuk berbagai brand
    </p>

    {/* Filters */}
    <div className="flex flex-wrap justify-center gap-2 mb-12 items-center">
     <FiFilter className="mr-2 text-primary" />
     {filters.map((filter) => (
      <button
       key={filter.id}
       onClick={() => setActiveFilter(filter.id)}
       className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
        activeFilter === filter.id
         ? "bg-primary text-white"
         : "glass hover:bg-white/10"
       }`}>
       {filter.name}
      </button>
     ))}
    </div>

    {/* Portfolio Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {filteredItems.map((item, index) => (
      <div
       key={item.id}
       className="glass rounded-lg overflow-hidden hover:bg-white/5 transition-all duration-300 group cursor-pointer"
       onClick={() => openModal(item, index)}>
       <div className="h-48 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
         <FiFolder className="text-4xl opacity-70" />
        </div>
       </div>
       <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-400 mb-3">{item.description}</p>
        <div className="flex items-center text-sm text-primary">
         <FiCheck className="mr-2" />
         <span>{item.results}</span>
        </div>
       </div>
      </div>
     ))}
    </div>

    {/* Modal Popup */}
    {selectedItem && (
     <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Navigation Arrows - DI LUAR MODAL */}
      <button
       onClick={() => navigateItems("prev")}
       className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors border border-primary z-60">
       <FiArrowLeft className="text-xl" />
      </button>

      <button
       onClick={() => navigateItems("next")}
       className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors border border-primary z-60">
       <FiArrowRight className="text-xl" />
      </button>

      {/* Modal Container */}
      <div
       className="bg-dark border-2 border-primary rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-glow relative"
       onClick={(e) => e.stopPropagation()}>
       {/* Glow effect overlay */}
       <div className="absolute inset-0 rounded-xl bg-primary/10 pointer-events-none"></div>

       {/* Header dengan glow */}
       <div className="relative">
        <img
         src={selectedItem.banner}
         alt={selectedItem.title}
         className="w-full h-48 object-cover rounded-t-xl"
        />
        <button
         onClick={closeModal}
         className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors border border-primary z-50">
         <FiX className="text-xl" />
        </button>
       </div>

       {/* Content */}
       <div className="p-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6">
         {/* Main Content */}
         <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-white">
           {selectedItem.title}
          </h2>
          <p className="text-gray-300 mb-6">{selectedItem.fullDescription}</p>

          {/* Results dengan glow */}
          <div className="glass p-4 rounded-lg mb-6 border border-primary ">
           <div className="flex items-center text-primary mb-2">
            <FiCheck className="mr-2" />
            <span className="font-semibold">Hasil yang Dicapai:</span>
           </div>
           <p className="text-gray-300">{selectedItem.results}</p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
           <h3 className="text-xl font-bold mb-3 text-white">
            Teknologi yang Digunakan
           </h3>
           <div className="flex flex-wrap gap-2">
            {selectedItem.technologies.map((tech, index) => (
             <span
              key={index}
              className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary ">
              {tech}
             </span>
            ))}
           </div>
          </div>
         </div>

         {/* Sidebar */}
         <div className="lg:w-1/3">
          {/* Gallery */}
          <div className="mb-6">
           <h3 className="text-xl font-bold mb-3 text-white">Galeri Project</h3>
           <div className="grid grid-cols-2 gap-2">
            {selectedItem.images.map((image, index) => (
             <div
              key={index}
              className="relative group">
              <img
               src={image}
               alt={`${selectedItem.title} ${index + 1}`}
               className="w-full h-24 object-cover rounded-lg cursor-pointer group-hover:opacity-80 transition-opacity border border-primary "
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
             </div>
            ))}
           </div>
          </div>

          {/* Features */}
          <div className="mb-6">
           <h3 className="text-xl font-bold mb-3 text-white">Fitur Utama</h3>
           <ul className="space-y-2">
            {selectedItem.features.map((feature, index) => (
             <li
              key={index}
              className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-glow"></div>
              {feature}
             </li>
            ))}
           </ul>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    )}
   </div>
  </section>
 );
}
