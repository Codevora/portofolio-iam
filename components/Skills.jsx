import {FiTool, FiAward, FiStar} from "react-icons/fi";
import {SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiCanva, SiMeta} from "react-icons/si";

export default function Skills() {
 const skills = [
  {name: "Social Media Strategy", level: 95},
  {name: "Content Creation", level: 90},
  {name: "Graphic Design", level: 88},
  {name: "Visual Storytelling", level: 85},
  {name: "Brand Identity Design", level: 82},
  {name: "Community Management", level: 80},
 ];

 const tools = [
  {name: "Adobe Photoshop", icon: <SiAdobephotoshop />},
  {name: "Adobe Illustrator", icon: <SiAdobeillustrator />},
  {name: "Canva", icon: <SiCanva />},
  {name: "Adobe Premiere Pro", icon: <SiAdobepremierepro />},
  {name: "CapCut", icon: <FiTool />},
  {name: "Meta Business Suite", icon: <SiMeta />},
 ];

 return (
  <section
   id="skills"
   className="py-16 bg-black">
   <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
     Skills & <span className="gradient-text">Expertise</span>
    </h2>
    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
     Keahlian dalam menciptakan konten visual yang engaging dan strategi media
     sosial yang efektif
    </p>

    <div className="flex flex-col lg:flex-row gap-12">
     {/* Skills Progress */}
     <div className="lg:w-1/2">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
       <FiAward className="mr-2 text-primary" /> Skills Proficiency
      </h3>
      <div className="space-y-6">
       {skills.map((skill, index) => (
        <div key={index}>
         <div className="flex justify-between mb-2">
          <span className="font-medium">{skill.name}</span>
          <span>{skill.level}%</span>
         </div>
         <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
           className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
           style={{width: `${skill.level}%`}}></div>
         </div>
        </div>
       ))}
      </div>
     </div>

     {/* Tools & Technologies */}
     <div className="lg:w-1/2">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
       <FiTool className="mr-2 text-primary" /> Tools & Software
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
       {tools.map((tool, index) => (
        <div
         key={index}
         className="glass p-4 rounded-lg text-center group hover:bg-primary/20 transition-colors">
         <div className="text-2xl mb-2 flex justify-center">{tool.icon}</div>
         <div className="font-medium">{tool.name}</div>
        </div>
       ))}
      </div>

      {/* Services */}
      <div className="mt-8">
       <h3 className="text-xl font-bold mb-4 flex items-center">
        <FiStar className="mr-2 text-primary" /> Services Offered
       </h3>
       <div className="grid grid-cols-1 gap-3">
        {[
         "Social Media Management",
         "Content Creation & Strategy",
         "Graphic Design for Social Media",
         "Brand Identity Development",
         "Social Media Campaigns",
         "Visual Content Production",
        ].map((service, index) => (
         <div
          key={index}
          className="flex items-center glass p-3 rounded-lg">
          <span className="text-primary mr-2">✦</span>
          <span>{service}</span>
         </div>
        ))}
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
