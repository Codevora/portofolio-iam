"use client";

import {useState} from "react";

export default function Contact() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  service: "",
  message: "",
 });

 const handleChange = (e) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission here
  console.log(formData);
  alert(
   "Terima kasih! Saya akan menghubungi Anda segera untuk diskusi project Anda."
  );
  setFormData({name: "", email: "", service: "", message: ""});
 };

 return (
  <section
   id="contact"
   className="py-16 bg-dark">
   <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
     Let's <span className="gradient-text">Collaborate</span>
    </h2>
    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
     Tertarik untuk mengembangkan brand Anda di media sosial dengan konten
     visual yang menarik? Mari berbicara!
    </p>

    <div className="flex flex-col lg:flex-row gap-12">
     {/* Contact Form */}
     <div className="lg:w-1/2">
      <form
       onSubmit={handleSubmit}
       className="space-y-6">
       <div>
        <label
         htmlFor="name"
         className="block mb-2 font-medium">
         Nama Lengkap
        </label>
        <input
         type="text"
         id="name"
         name="name"
         value={formData.name}
         onChange={handleChange}
         required
         className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
         placeholder="Nama Anda"
        />
       </div>
       <div>
        <label
         htmlFor="email"
         className="block mb-2 font-medium">
         Email
        </label>
        <input
         type="email"
         id="email"
         name="email"
         value={formData.email}
         onChange={handleChange}
         required
         className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
         placeholder="email@contoh.com"
        />
       </div>
       <div>
        <label
         htmlFor="service"
         className="block mb-2 font-medium">
         Jenis Layanan
        </label>
        <select
         id="service"
         name="service"
         value={formData.service}
         onChange={handleChange}
         required
         className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
         <option value="">Pilih Layanan</option>
         <option value="social-media">Social Media Management</option>
         <option value="graphic-design">Graphic Design</option>
         <option value="content-strategy">Content Strategy</option>
         <option value="branding">Brand Identity</option>
         <option value="campaign">Social Media Campaign</option>
         <option value="other">Lainnya</option>
        </select>
       </div>
       <div>
        <label
         htmlFor="message"
         className="block mb-2 font-medium">
         Pesan
        </label>
        <textarea
         id="message"
         name="message"
         value={formData.message}
         onChange={handleChange}
         required
         rows="5"
         className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
         placeholder="Ceritakan tentang project Anda..."></textarea>
       </div>
       <button
        type="submit"
        className="w-full py-3 bg-primary rounded-lg font-medium hover:bg-accent transition-colors">
        Kirim Pesan
       </button>
      </form>
     </div>

     {/* Contact Information */}
     <div className="lg:w-1/2">
      <div className="glass p-6 rounded-lg mb-6">
       <h3 className="text-xl font-bold mb-4">Informasi Kontak</h3>
       <div className="space-y-4">
        <div className="flex items-center">
         <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
          <span>📧</span>
         </div>
         <div>
          <div className="font-medium">Email</div>
          <div className="text-gray-400">hello@socialdesign.com</div>
         </div>
        </div>
        <div className="flex items-center">
         <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
          <span>📱</span>
         </div>
         <div>
          <div className="font-medium">WhatsApp/Instagram</div>
          <div className="text-gray-400">@socialdesignspecialist</div>
         </div>
        </div>
        <div className="flex items-center">
         <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
          <span>📍</span>
         </div>
         <div>
          <div className="font-medium">Lokasi</div>
          <div className="text-gray-400">
           Jakarta, Indonesia (Remote Available)
          </div>
         </div>
        </div>
       </div>
      </div>

      {/* Social Media Links */}
      <div className="glass p-6 rounded-lg">
       <h3 className="text-xl font-bold mb-4">Follow My Work</h3>
       <div className="flex space-x-4">
        {[
         {name: "Instagram", icon: "📷", url: "#"},
         {name: "Behance", icon: "🎨", url: "#"},
         {name: "Dribbble", icon: "✨", url: "#"},
         {name: "TikTok", icon: "🎵", url: "#"},
        ].map((social, index) => (
         <a
          key={index}
          href={social.url}
          className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
          aria-label={social.name}>
          <span className="text-xl">{social.icon}</span>
         </a>
        ))}
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
