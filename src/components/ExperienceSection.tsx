import React, { useState } from 'react';
import { experienceData } from '../data/portfolioData';
import { 
  Briefcase, 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers,
  Sparkles
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'Leadership' | 'Internship'>('all');

  const filteredItems = activeTab === 'all'
    ? experienceData
    : experienceData.filter((item) => item.type === activeTab);

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800/80 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Leadership
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Elected officer roles managing budgets and campus technical events, alongside intensive virtual internships spanning AWS, MERN, ServiceNow, and AI/ML.
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            All Experiences (6)
          </button>
          <button
            onClick={() => setActiveTab('Leadership')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'Leadership'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            Leadership & Campus Roles (2)
          </button>
          <button
            onClick={() => setActiveTab('Internship')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'Internship'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            Virtual Internships (4)
          </button>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => {
            const isLeadership = item.type === 'Leadership';

            return (
              <div
                key={item.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-md transition-all duration-200 space-y-4"
              >
                <div>
                  {/* Card Badge and Period */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        isLeadership
                          ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                          : 'bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                      }`}
                    >
                      {item.badge || item.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>

                  {/* Role & Org */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                    <span>{item.organization}</span>
                    <span>•</span>
                    <span className="text-slate-500 dark:text-slate-400 font-normal">{item.location}</span>
                  </div>

                  {/* Bullet Points from Resume */}
                  <div className="mt-4 space-y-2">
                    {item.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies / Competencies */}
                {item.technologies && (
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
