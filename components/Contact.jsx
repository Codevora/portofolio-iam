"use client";

import Link from "next/link";
import {useState} from "react";
import {
 FiMail,
 FiPhone,
 FiMapPin,
 FiInstagram,
 FiLinkedin,
 FiDribbble,
 FiYoutube,
 FiSend,
} from "react-icons/fi";

export default function Contact() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  service: "",
  message: "",
 });

 const [isSubmitting, setIsSubmitting] = useState(false);
 const [isSubmitted, setIsSubmitted] = useState(false);

 const handleChange = (e) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Ganti YOUR_FORMSPREE_ID dengan ID Formspree Anda
  const formspreeEndpoint = "https://formspree.io/f/mvgrnvqz";

  try {
   const response = await fetch(formspreeEndpoint, {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
   });

   if (response.ok) {
    setIsSubmitted(true);
    setFormData({name: "", email: "", service: "", message: ""});
    setTimeout(() => setIsSubmitted(false), 5000);
   } else {
    alert("Terjadi kesalahan. Silakan coba lagi.");
   }
  } catch (error) {
   console.error("Error:", error);
   alert("Terjadi kesalahan. Silakan coba lagi.");
  } finally {
   setIsSubmitting(false);
  }
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

    {/* Success Message */}
    {isSubmitted && (
     <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg mb-6 text-center">
      ✅ Terima kasih! Pesan Anda telah terkirim. Saya akan menghubungi Anda
      segera.
     </div>
    )}

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
         <option
          value=""
          className=" text-black">
          Pilih Layanan
         </option>
         <option
          value="social-media"
          className=" text-black">
          Social Media Management
         </option>
         <option
          value="graphic-design"
          className=" text-black">
          Graphic Design
         </option>
         <option
          value="content-strategy"
          className=" text-black">
          Content Strategy
         </option>
         <option
          value="branding"
          className=" text-black">
          Brand Identity
         </option>
         <option
          value="campaign"
          className=" text-black">
          Social Media Campaign
         </option>
         <option
          value="other"
          className=" text-black">
          Lainnya
         </option>
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
        disabled={isSubmitting}
        className="w-full py-3 bg-primary rounded-lg font-medium hover:bg-accent transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
        {isSubmitting ? (
         <>
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          Mengirim...
         </>
        ) : (
         <>
          <FiSend className="mr-2" /> Kirim Pesan
         </>
        )}
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
          <FiMail className="text-primary" />
         </div>
         <div>
          <div className="font-medium">Email</div>
          <div className="text-gray-400">kenzyworld29@gmail.com</div>
         </div>
        </div>
        <div className="flex items-center">
         <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
          <FiPhone className="text-primary" />
         </div>
         <div>
          <div className="font-medium">WhatsApp</div>
          <div className="text-gray-400">(+62) 877-4615-6529</div>
         </div>
        </div>
        <div className="flex items-center">
         <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
          <FiMapPin className="text-primary" />
         </div>
         <div>
          <div className="font-medium">Lokasi</div>
          <div className="text-gray-400">
           Kota Tasikmalaya, Indonesia (Remote Available)
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
         {
          name: "Instagram",
          icon: <FiInstagram />,
          url: "https://instagram.com/simp4iammm/",
         },
         {name: "Dribbble", icon: <FiDribbble />, url: "#"},
         {name: "LinkedIn", icon: <FiLinkedin />, url: "#"},
         {
          name: "YouTube",
          icon: <FiYoutube />,
          url: "https://www.youtube.com/@Joaquine999",
         },
        ].map((social, index) => (
         <Link
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors text-xl"
          aria-label={social.name}>
          {social.icon}
         </Link>
        ))}
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
