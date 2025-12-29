import { GraduationCap } from 'lucide-react';

const education = [
  {
    school: 'Marwadi University',
    degree: 'Bachelor of Science - BS',
    field: 'Artificial Intelligence and Data Science',
    period: 'September 2024 - June 2028',
    current: true
  },
  {
    school: 'AfricAcademy-Arusha Science School',
    degree: 'High School',
    field: 'PMC (Physics, Math & Computer Science)',
    period: 'July 2022 - June 2024',
    current: false
  },
  {
    school: 'Shamsiye Secondary School',
    degree: 'Secondary School',
    field: 'Science',
    period: 'January 2018 - September 2021',
    current: false
  },
  {
    school: 'Ebenezer Primary School',
    degree: 'Primary',
    field: '',
    period: 'August 2017',
    current: false
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">
                        {edu.school}
                      </h3>
                      {edu.current && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <p className="text-slate-700 font-medium mb-1">
                      {edu.degree}
                      {edu.field && ` - ${edu.field}`}
                    </p>

                    <p className="text-slate-600 text-sm">
                      {edu.period}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
