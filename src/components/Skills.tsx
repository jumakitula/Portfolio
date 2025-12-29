import { Code2, Award } from 'lucide-react';

const skills = [
  { name: 'R (Programming Language)', category: 'Data Science' },
  { name: 'React', category: 'Frontend' },
  { name: 'Django', category: 'Backend' }
];

const certifications = [
  'Microsoft Certified: Business Transformation with AI',
  'Genius Cup – 1st Runner-Up (Dar es Salaam Senior)',
  'Agile Project Management Certifications',
  'C++ ESSENTIAL',
  'Cisco Certified Network Professional (CCNP)',
  'Microsoft Certified: Building Early Stage Startup'
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
            Skills & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Code2 className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Top Skills</h3>
              </div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900">{skill.name}</span>
                      <span className="text-sm text-slate-600 bg-white px-3 py-1 rounded-full">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-600 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
                  >
                    <p className="text-slate-900">{cert}</p>
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
