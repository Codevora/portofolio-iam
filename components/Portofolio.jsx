'use client'

import { useState } from 'react'
import { FiFolder, FiCheck, FiFilter } from 'react-icons/fi'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const portfolioItems = [
   {
    id: 1,
    title: "Social Media Campaign",
    category: "social",
    image: "/api/placeholder/400/300",
    description:
     "Kampanye media sosial lengkap dengan konten visual yang meningkatkan engagement hingga 150%",
    results: "2.5M Reach, 45K Engagement",
   },
   {
    id: 2,
    title: "Brand Identity Design",
    category: "design",
    image: "/api/placeholder/400/300",
    description:
     "Mendesain identitas brand yang konsisten untuk media sosial dan marketing materials",
    results: "Complete Brand Package",
   },
   {
    id: 3,
    title: "Content Calendar Strategy",
    category: "strategy",
    image: "/api/placeholder/400/300",
    description:
     "Perencanaan dan strategi konten bulanan untuk berbagai platform media sosial",
    results: "30% Time Saved, Consistent Posting",
   },
   {
    id: 4,
    title: "Instagram Reels Series",
    category: "video",
    image: "/api/placeholder/400/300",
    description:
     "Serial video pendek yang viral dengan efek visual menarik dan storytelling kuat",
    results: "1.2M Views, 15K New Followers",
   },
   {
    id: 5,
    title: "Social Media Branding",
    category: "branding",
    image: "/api/placeholder/400/300",
    description:
     "Rebranding lengkap presence media sosial dengan visual yang cohesive dan engaging",
    results: "85% Follower Growth",
   },
   {
    id: 6,
    title: "Advertisement Designs",
    category: "ads",
    image: "/api/placeholder/400/300",
    description:
     "Desain iklan media sosial yang eye-catching dan high-converting untuk berbagai produk",
    results: "5.2% CTR, 320% ROAS",
   },
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'social', name: 'Social Media' },
    { id: 'design', name: 'Graphic Design' },
    { id: 'strategy', name: 'Strategy' },
    { id: 'video', name: 'Video Content' },
    { id: 'branding', name: 'Branding' },
    { id: 'ads', name: 'Advertisement' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Creative <span className="gradient-text">Portfolio</span></h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Kumpulan project terbaik dalam social media management dan graphic design untuk berbagai brand
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 items-center">
          <FiFilter className="mr-2 text-primary" />
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                activeFilter === filter.id 
                  ? 'bg-primary text-white' 
                  : 'glass hover:bg-white/10'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="glass rounded-lg overflow-hidden hover:bg-white/5 transition-all duration-300 group">
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
      </div>
    </section>
  )
}

