import { Target, Zap, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">My Journey</h3>
              <p className="text-slate-700 leading-relaxed">
                I'm a data scientist turned founder, building technology that makes life simpler and more connected across Africa. My background in data science isn't just a credential; it's the engine behind my companies.
              </p>
              <p className="text-slate-700 leading-relaxed">
                I use data to understand user needs, optimize platforms, and build smarter solutions.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Target className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">My Mission</h4>
                    <p className="text-slate-700 text-sm">
                      To leverage technology and data to create impactful, user-friendly products that connect people and simplify their daily lives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-600 rounded-lg">
                    <Zap className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">My Edge</h4>
                    <p className="text-slate-700 text-sm">
                      Using data to understand user needs, optimize platforms, and build smarter  solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
