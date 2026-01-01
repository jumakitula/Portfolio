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
      <style>
        {`
          @keyframes float {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .float { animation: float 6s ease-in-out infinite; }

          .glass {
            background: rgba(30,41,59,0.75);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(56,189,248,0.25);
          }

          .hover-lift {
            transition: all .3s ease;
          }
          .hover-lift:hover {
            transform: translateY(-4px);
          }
        `}
      </style>

      <section className="min-h-screen bg-slate-900 text-white flex justify-center items-start py-16">
        
        {/* 🔒 LOCKED VERTICAL COLUMN */}
        <div className="w-full max-w-md flex flex-col items-center gap-6 px-6">

          {/* PHOTO */}
          <div className="relative flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-400 float">
              <img
                src={profilePic}
                alt="Juma Bakari"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-3 glass px-4 py-2 rounded-full flex items-center gap-2">
              <MapPin size={16} className="text-cyan-400" />
              <span className="text-sm text-cyan-300">Tanzania 🇹🇿</span>
            </div>
          </div>

          {/* NAME */}
          <h1 className="text-4xl font-bold text-center text-cyan-400">
            Juma Bakari
          </h1>

          {/* TITLE */}
          <div className="glass px-5 py-2 rounded-full text-center">
            <span className="font-semibold">Data Analyst & Scientist</span>
          </div>

          {/* BIO */}
          <p className="text-center text-gray-300 text-lg glass p-5 rounded-xl">
            <span className="text-cyan-400 font-medium">
              Turning data into solutions.
            </span>{" "}
            I build technology that simplifies life and connects Africa.
          </p>

          {/* CONTACTS — STACKED */}
          <div className="flex flex-col gap-3 w-full">
            <a
              href="mailto:jumakitula0@gmail.com"
              className="hover-lift glass flex items-center justify-center gap-2 py-3 rounded-xl"
            >
              <Mail size={18} /> Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/juma-bakari-4712ab152"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift glass flex items-center justify-center gap-2 py-3 rounded-xl"
            >
              <Linkedin size={18} /> LinkedIn
            </a>

            <a
              href="https://wa.me/255711813131"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift glass flex items-center justify-center gap-2 py-3 rounded-xl"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>

          {/* STATS — STACKED */}
          <div className="flex flex-col gap-4 w-full">
            <Stat icon={Award} label="Years Experience" value="5+" />
            <Stat icon={Briefcase} label="Ventures Founded" value="3" />
            <Stat icon={Users} label="Projects Completed" value="50+" />
          </div>

        </div>
      </section>
    </>
  );
}

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="glass hover-lift rounded-xl py-4 text-center">
      <Icon size={28} className="mx-auto text-cyan-400 mb-1" />
      <div className="text-2xl font-bold text-cyan-400">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
}
