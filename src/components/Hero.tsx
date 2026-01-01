import React from "react";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import profilePic from "../assets/profile_picture.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-slate-800 text-white py-12 md:py-20">
      <div className="container mx-auto px-6">
        {/* Profile Picture at the very top */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/30">
            <img
              src={profilePic}
              alt="Juma Bakari"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/224x224/1e293b/ffffff?text=JB";
              }}
            />
          </div>
        </div>

        {/* All content below the picture */}
        <div className="max-w-3xl mx-auto">
          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Juma Bakari
          </h1>

          {/* Title with location badge */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <p className="text-xl md:text-2xl text-gray-300 font-semibold">
              Data Analyst & Scientist
            </p>
            <div className="flex items-center gap-2 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700">
              <span className="text-lg">🇹🇿</span>
              <span>Tanzania</span>
            </div>
          </div>

          {/* Ventures */}
          <p className="text-lg md:text-xl text-gray-400 text-center mb-8">
            Founder of <span className="text-cyan-300">EventZetu</span> • 
            Co-founder of <span className="text-cyan-300">ChiwawaPay</span> • 
            Founder of <span className="text-cyan-300">NeoAutomate Agents</span>
          </p>

          {/* Bio */}
          <p className="text-lg md:text-xl text-gray-300 text-center mb-12 leading-relaxed px-4">
            Turning data into solutions. I'm a data scientist turned founder, building technology that makes life simpler and more connected across Africa.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:jumakitula0@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/juma-bakari-4712ab152"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://wa.me/255711813131"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
