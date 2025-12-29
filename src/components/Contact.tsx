import { Mail, Linkedin, MessageCircle, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:jumakitula0@gmail.com"
              className="p-6 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-600 rounded-lg">
                  <Mail size={28} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <p className="font-semibold text-lg">jumakitula0@gmail.com</p>
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/255711813131"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-green-600 rounded-lg">
                  <MessageCircle size={28} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-slate-400 mb-1">WhatsApp</p>
                  <p className="font-semibold text-lg">+255 711 813 131</p>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/juma-bakari-4712ab152"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-500 rounded-lg">
                  <Linkedin size={28} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
                  <p className="font-semibold text-lg">Juma Bakari</p>
                </div>
              </div>
            </a>

            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-slate-600 rounded-lg">
                  <MapPin size={28} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-slate-400 mb-1">Location</p>
                  <p className="font-semibold text-lg">Tanzania</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-700">
            <p className="text-slate-400">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
