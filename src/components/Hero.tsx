import React from "react";
import {
  Linkedin,
  Mail,
  MessageCircle,
  MapPin,
  Award,
  Briefcase,
  Users,
} from "lucide-react";
import profilePic from "../assets/profile_picture.jpg";

export default function Hero() {
  return (
    <>
      {/* Inline CSS for animations and custom styles */}
      <style>
        {`
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(5px); }
          }

          .text-gradient-animated {
            background: linear-gradient(90deg, #22d3ee, #3b82f6, #22d3ee);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradient-shift 4s ease infinite;
          }

          .animate-float-custom {
            animation: float 6s ease-in-out infinite;
          }

          .animate-bounce-custom {
            animation: bounce 2s ease-in-out infinite;
          }

          .glass-effect-custom {
            background: rgba(30, 41, 59, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(56, 189, 248, 0.2);
          }

          .hover-lift-custom {
            transition: all 0.3s ease;
          }

          .hover-lift-custom:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>

      <section className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

          {/* PROFILE IMAGE */}
          <div className="mb-10">
            <div className="relative group flex flex-col items-center">
              <div
                className="absolute -inset-4 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity"
                style={{
                  background:
                    "linear-gradient(45deg, #22d3ee, #3b82f6, #22d3ee)",
                }}
              ></div>

              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl animate-float-custom">
                <img
                  src={profilePic}
                  alt="Juma Bakari"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 flex items-center gap-2 px-4 py-2 rounded-full glass-effect-custom hover-lift-custom">
                <MapPin size={16} className="text-cyan-400" />
                <span className="text-sm text-cyan-300">Tanzania 🇹🇿</span>
              </div>
            </div>
          </div>

          {/* NAME */}
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-gradient-animated">Juma Bakari</span>
            </h1>
            <div className="h-1 w-32 mx-auto mt-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          </div>

          {/* TITLE */}
          <div className="mb-6">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full glass-effect-custom hover-lift-custom">
              <Briefcase size={20} className="text-cyan-400" />
              <span className="text-xl font-semibold">
                Data Analyst & Scientist
              </span>
            </div>
          </div>

          {/* VENTURES */}
          <p className="text-center text-lg text-gray-300 mb-6 max-w-2xl">
            Founder of <span className="text-cyan-400 font-semibold">EventZetu</span> •
            Co-founder of <span className="text-cyan-400 font-semibold">ChiwawaPay</span> •
            Founder of <span className="text-cyan-400 font-semibold">NeoAutomate Agents</span>
          </p>

          {/* BIO */}
          <div className="mb-10 max-w-2xl text-center text-lg text-gray-300 glass-effect-custom px-6 py-6 rounded-2xl hover-lift-custom">
            <span className="text-cyan-400 font-medium">
              Turning data into solutions.
            </span>{" "}
            I'm a data scientist turned founder, building technology that makes
            life simpler and more connected across Africa.
          </div>

          {/* CONTACT BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:jumakitula0@gmail.com"
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover-lift-custom"
            >
              <Mail size={20} />
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/juma-bakari-4712ab152"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-800 hover-lift-custom"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://wa.me/255711813131"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-green-600 hover-lift-custom"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>

          {/* STATS */}
          <div className="flex flex-col md:flex-row gap-6 mb-16">
            <Stat icon={Award} value="5+" label="Years Experience" />
            <Stat icon={Briefcase} value="3" label="Ventures Founded" />
            <Stat icon={Users} value="50+" label="Projects Completed" />
          </div>

          {/* SCROLL INDICATOR */}
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce-custom"></div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

/* STAT CARD COMPONENT */
function Stat({ icon: Icon, value, label }) {
  return (
    <div className="glass-effect-custom px-8 py-6 rounded-xl text-center hover-lift-custom w-64">
      <Icon size={32} className="text-cyan-400 mx-auto mb-2" />
      <div className="text-3xl font-bold text-cyan-400">{value}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}
