import { Linkedin, Mail, MessageCircle } from "lucide-react";
import profilePic from "../assets/profile_picture.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Profile Picture ON TOP */}
          <div className="flex justify-center mb-6">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Juma Bakari
          </h1>

          {/* Titles */}
          <p className="text-xl md:text-2xl text-slate-300 mb-2">
            Data Analyst & Scientist
          </p>
          <p className="text-lg md:text-xl text-slate-400 mb-8">
            Founder of EventZetu | Co-founder of ChiwawaPay | Founder of NeoAutomate Agents
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Turning data into solutions. Building technology that makes life simpler and more connected across Africa.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:jumakitula0@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-lg"
            >
              <Mail size={20} />
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/juma-bakari-4712ab152"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all shadow-lg"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://wa.me/255711813131"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-all shadow-lg"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>

          <div className="text-slate-400 text-sm">Tanzania</div>
        </div>
      </div>
    </section>
  );
}
