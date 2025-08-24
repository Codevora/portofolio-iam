import Image from "next/image";

export default function Hero() {
 return (
  <section
   id="home"
   className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-dark to-black">
   <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-between">
     <div className="md:w-1/2 mb-10 md:mb-0 animate-slide-in">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
       Creative <span className="gradient-text">Visual Stories</span> That
       Engage
      </h1>
      <p className="text-xl mb-8 text-gray-300">
       Social Media Specialist & Graphic Designer yang berfokus pada penciptaan
       konten visual yang menarik, strategi engagement, dan desain yang memukau
       untuk meningkatkan brand presence di media sosial.
      </p>
      <div className="flex flex-wrap gap-4">
       <a
        href="#portfolio"
        className="px-6 py-3 bg-primary rounded-lg font-medium hover:bg-accent transition-colors">
        Lihat Portfolio
       </a>
       <a
        href="#contact"
        className="px-6 py-3 glass rounded-lg font-medium hover:bg-white/10 transition-colors">
        Hubungi Saya
       </a>
      </div>
     </div>
     <div className="md:w-1/2 flex justify-center animate-float">
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary animate-glow">
       <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-30 z-10"></div>

       <Image
        src="/profile/iam.JPG"
        alt="Social Media Specialist & Graphic Designer"
        fill
        className="object-cover"
        priority
       />

       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-20"></div>
      </div>
     </div>
    </div>

    {/* Social Media Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
     {[
      {number: "500+", label: "Designs Created"},
      {number: "120%", label: "Engagement Rate"},
      {number: "80+", label: "Clients Satisfied"},
      {number: "2M+", label: "Total Reach"},
     ].map((stat, index) => (
      <div
       key={index}
       className="glass p-4 rounded-lg text-center">
       <div className="text-2xl md:text-3xl font-bold text-primary">
        {stat.number}
       </div>
       <div className="text-sm md:text-base">{stat.label}</div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}
