import React from "react";
import { Linkedin, Mail, MessageCircle, MapPin, Award, Briefcase, Users } from "lucide-react";
import profilePic from "../assets/profile_picture.jpg";

export default function Hero() {
  return (
    <>
      {/* Inline CSS for animations and custom styles */}
      <style>
        {`
          /* Gradient animation */
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          /* Floating animation */
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          /* Bounce animation for scroll indicator */
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(5px); }
          }
          
          /* Custom gradient text animation */
          .text-gradient-animated {
            background: linear-gradient(90deg, #22d3ee, #3b82f6, #22d3ee);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradient-shift 4s ease infinite;
          }
          
          /* Floating animation class */
          .animate-float-custom {
            animation: float 6s ease-in-out infinite;
          }
          
          /* Bounce animation class */
          .animate-bounce-custom {
            animation: bounce 2s ease-in-out infinite;
          }
          
          /* Glass effect */
          .glass-effect-custom {
            background: rgba(30, 41, 59, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(56, 189, 248, 0.2);
          }
          
          /* Hover lift effect */
          .hover-lift-custom {
            transition: all 0.3s ease;
          }
          .hover-lift-custom:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }
          
          /* Custom scrollbar for this section only */
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #0f172a;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(45deg, #22d3ee, #3b82f6);
            border-radius: 4px;
          }
        `}
      </style>
      
      <section 
        className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 text-white py-12 md:py-20 relative overflow-hidden custom-scrollbar"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
        }}
      >
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)' 
            }}
          ></div>
          <div 
            className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)' 
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1"
            style={{ 
              background: 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.3), transparent)' 
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          
          {/* Profile Picture Container */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative group">
              <div 
                className="absolute -inset-4 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"
                style={{ 
                  background: 'linear-gradient(45deg, #22d3ee, #3b82f6, #22d3ee)',
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 3s ease infinite'
                }}
              ></div>
              <div 
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400/80 shadow-2xl shadow-cyan-500/30 animate-float-custom"
                style={{
                  borderImage: 'linear-gradient(45deg, #22d3ee, #3b82f6) 1'
                }}
              >
                <img
                  src={profilePic}
                  alt="Juma Bakari"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/224x224/1e293b/ffffff?text=JB";
                  }}
                  style={{
                    filter: 'brightness(1.05) contrast(1.05)'
                  }}
                />
              </div>
              {/* Badge on profile picture */}
              <div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full border glass-effect-custom hover-lift-custom"
                style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(56, 189, 248, 0.3)'
                }}
              >
                <MapPin size={16} className="text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">Tanzania 🇹🇿</span>
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className="max-w-3xl mx-auto">
            
            {/* Name with enhanced gradient */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-center">
                <span className="text-gradient-animated">
                  Juma Bakari
                </span>
              </h1>
              <div 
                className="h-1 w-24 md:w-32 mx-auto rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #22d3ee, #3b82f6)'
                }}
              ></div>
            </div>

            {/* Title */}
            <div className="mb-6 text-center">
              <div 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full hover-lift-custom mb-4"
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(56, 189, 248, 0.2)'
                }}
              >
                <Briefcase size={20} className="text-cyan-400" />
                <p className="text-xl md:text-2xl text-gray-200 font-semibold">
                  Data Analyst & Scientist
                </p>
              </div>
            </div>

            {/* Ventures */}
            <div className="mb-8 text-center">
              <p className="text-lg md:text-xl text-gray-300">
                Founder of{" "}
                <span 
                  className="font-semibold transition-colors cursor-pointer hover:text-cyan-200"
                  style={{ color: '#22d3ee' }}
                >
                  EventZetu
                </span>{" "}
                • Co-founder of{" "}
                <span 
                  className="font-semibold transition-colors cursor-pointer hover:text-cyan-200"
                  style={{ color: '#22d3ee' }}
                >
                  ChiwawaPay
                </span>{" "}
                • Founder of{" "}
                <span 
                  className="font-semibold transition-colors cursor-pointer hover:text-cyan-200"
                  style={{ color: '#22d3ee' }}
                >
                  NeoAutomate Agents
                </span>
              </p>
            </div>

            {/* Bio */}
            <div className="mb-12">
              <div 
                className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto leading-relaxed px-4 py-6 rounded-2xl hover-lift-custom"
                style={{
                  background: 'rgba(30, 41, 59, 0.3)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(71, 85, 105, 0.5)'
                }}
              >
                <span className="font-medium" style={{ color: '#22d3ee' }}>
                  Turning data into solutions.
                </span> 
                {" "}I'm a data scientist turned founder, building technology that makes life simpler and more connected across Africa.
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {/* Email Button */}
              <a
                href="mailto:jumakitula0@gmail.com"
                className="group flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover-lift-custom"
                style={{
                  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                  boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)'
                }}
              >
                <div 
                  className="p-2 rounded-lg transition-transform group-hover:scale-110"
                  style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                >
                  <Mail size={20} />
                </div>
                <span className="font-semibold">Email Me</span>
              </a>
              
              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/juma-bakari-4712ab152"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover-lift-custom"
                style={{
                  background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                  boxShadow: '0 10px 25px rgba(15, 23, 42, 0.3)'
                }}
              >
                <div 
                  className="p-2 rounded-lg transition-transform group-hover:scale-110"
                  style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                >
                  <Linkedin size={20} />
                </div>
                <span className="font-semibold">LinkedIn</span>
              </a>
              
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/255711813131"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover-lift-custom"
                style={{
                  background: 'linear-gradient(135deg, #16a34a, #15803d)',
                  boxShadow: '0 10px 25px rgba(22, 163, 74, 0.3)'
                }}
              >
                <div 
                  className="p-2 rounded-lg transition-transform group-hover:scale-110"
                  style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                >
                  <MessageCircle size={20} />
                </div>
                <span className="font-semibold">WhatsApp</span>
              </a>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Years Experience */}
              <div 
                className="rounded-xl p-6 text-center hover-lift-custom transform transition-all duration-300"
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(56, 189, 248, 0.2)'
                }}
              >
                <div className="flex justify-center mb-3">
                  <Award size={32} className="text-cyan-400" />
                </div>
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: '#22d3ee' }}
                >
                  5+
                </div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              
              {/* Ventures Founded */}
              <div 
                className="rounded-xl p-6 text-center hover-lift-custom transform transition-all duration-300"
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(56, 189, 248, 0.2)'
                }}
              >
                <div className="flex justify-center mb-3">
                  <Briefcase size={32} className="text-cyan-400" />
                </div>
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: '#22d3ee' }}
                >
                  3
                </div>
                <div className="text-gray-400">Ventures Founded</div>
              </div>
              
              {/* Projects Completed */}
              <div 
                className="rounded-xl p-6 text-center hover-lift-custom transform transition-all duration-300"
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(56, 189, 248, 0.2)'
                }}
              >
                <div className="flex justify-center mb-3">
                  <Users size={32} className="text-cyan-400" />
                </div>
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: '#22d3ee' }}
                >
                  50+
                </div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center mt-16">
              <div 
                className="flex flex-col items-center gap-2 cursor-pointer transition-colors hover:text-cyan-400"
                style={{ color: '#6b7280' }}
              >
                <span className="text-sm">Scroll to explore</span>
                <div 
                  className="w-6 h-10 rounded-full flex justify-center border"
                  style={{ borderColor: '#4b5563' }}
                >
                  <div 
                    className="w-1 h-3 rounded-full mt-2 animate-bounce-custom"
                    style={{ backgroundColor: '#22d3ee' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
