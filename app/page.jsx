import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portofolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
 return (
  <main className="min-h-screen text-white">
   <Header />
   <Hero />
   <Portfolio />
   <Skills />
   <Contact />
   <Footer />
   <ScrollToTop />
  </main>
 );
}
