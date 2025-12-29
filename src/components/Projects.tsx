import { Calendar, Wallet, Bot, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'EventZetu',
    role: 'Founder',
    period: 'November 2025 - Present',
    description: 'The go-to platform for discovering and booking events, meetups, and conferences. We help people find their community and never miss out on meaningful experiences.',
    website: 'eventzetu.com',
    icon: Calendar,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    borderColor: 'border-blue-200'
  },
  {
    title: 'ChiwawaPay',
    role: 'Co-Founder',
    period: 'November 2025 - Present',
    description: 'A secure, fast, and modern payment solution. We make it effortless to send money, pay bills, save, and support causes—all from one wallet.',
    website: 'chiwawapay.com',
    icon: Wallet,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-200'
  },
  {
    title: 'NeoAutomate Agents',
    role: 'Founder',
    period: 'December 2025 - Present',
    description: 'Cutting-edge automation solutions that streamline operations, boost productivity, and drive growth. From intelligent agentic systems to robust process automation.',
    website: null,
    icon: Bot,
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-50 to-amber-50',
    borderColor: 'border-orange-200'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            What I'm Building
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            Creating impactful solutions across Africa
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${project.bgGradient} rounded-2xl p-8 border ${project.borderColor} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className={`inline-flex p-4 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 shadow-lg`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>

                  <div className="text-sm text-slate-600 mb-4">
                    <span className="font-semibold">{project.role}</span>
                    <span className="mx-2">•</span>
                    <span>{project.period.split(' - ')[0]}</span>
                  </div>

                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {project.website && (
                    <a
                      href={`https://${project.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      <span>{project.website}</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
