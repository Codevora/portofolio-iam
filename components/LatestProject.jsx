import Image from "next/image";
import Link from "next/link";
import {FiArrowRight} from "react-icons/fi";

export default function LatestProject() {
 const projects = [
  {
   id: 1,
   title: "Social Media Campaign",
   category: "Social Media",
   image: "/brand_identity.jpg",
   description:
    "Kampanye media sosial lengkap dengan konten visual yang meningkatkan engagement hingga 120%",
   results: "1.5M Reach, 45K Engagement",
   link: "https://www.instagram.com/911coffee.tasik?utm_source=ig_web_button_share_sheet&igsh=MWZoNTl1M2I2amR5eg==",
  },
  {
   id: 2,
   title: "Brand Identity Design",
   category: "Graphic Design",
   image: "/social_media.jpg",
   description:
    "Mendesain identitas brand yang konsisten untuk media sosial dan marketing materials",
   results: "Complete Brand Package",
   link: "https://www.instagram.com/911coffee.tasik?utm_source=ig_web_button_share_sheet&igsh=MWZoNTl1M2I2amR5eg==",
  },
  {
   id: 3,
   title: "Instagram Reels Series",
   category: "Video Content",
   image: "/reels_series.jpg",
   description: "Serial video pendek yang viral dengan storytelling kuat",
   results: "2M+ Views, 10K New Followers",
   link: "https://www.instagram.com/911coffee.tasik?utm_source=ig_web_button_share_sheet&igsh=MWZoNTl1M2I2amR5eg==",
  },
 ];

 return (
  <section
   id="latest-projects"
   className="py-20 bg-dark">
   <div className="container mx-auto px-4">
    <div className="text-center mb-16 animate-slide-in">
     <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Latest <span className="gradient-text">Projects</span>
     </h2>
     <p className="text-xl text-gray-300 max-w-2xl mx-auto">
      Kumpulan project terbaru dalam social media management dan graphic design
      yang telah saya selesaikan
     </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {projects.map((project) => (
      <div
       key={project.id}
       className="glass rounded-lg overflow-hidden hover:bg-white/5 transition-all duration-300 group">
       <div className="relative h-64 overflow-hidden">
        <Image
         src={project.image}
         alt={project.title}
         fill
         className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
         <span className="text-sm text-primary bg-black/50 px-3 py-1 rounded-full">
          {project.category}
         </span>
        </div>
       </div>

       <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex items-center text-sm text-primary mb-4">
         <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
         <span>{project.results}</span>
        </div>

        <Link
         href={project.link}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium">
         View Project <FiArrowRight className="ml-2" />
        </Link>
       </div>
      </div>
     ))}
    </div>

    <div className="text-center mt-12">
     <Link
      href="/projects"
      className="px-6 py-3 glass rounded-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center">
      View All Projects <FiArrowRight className="ml-2" />
     </Link>
    </div>
   </div>
  </section>
 );
}
