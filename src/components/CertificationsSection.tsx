import React from 'react';
import { certificationsData, achievementsData } from '../data/portfolioData';
import { 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800/80 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Key Milestones
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Professional industry accreditations earned in ServiceNow architecture, AI/ML engineering (Rising Waters), cloud infrastructure, and full-stack development.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certificationsData.map((cert) => {
            const isServiceNow = cert.type === 'ServiceNow';
            const isAIML = cert.type === 'AI/ML';

            return (
              <div
                key={cert.id}
                className={`flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border transition-all duration-200 ${
                  isServiceNow
                    ? 'border-indigo-400 dark:border-indigo-600 shadow-md shadow-indigo-500/10 ring-1 ring-indigo-500/20'
                    : isAIML
                    ? 'border-cyan-400 dark:border-cyan-600 shadow-md shadow-cyan-500/10 ring-1 ring-cyan-500/20'
                    : 'border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                        isServiceNow
                          ? 'bg-indigo-600 text-white'
                          : isAIML
                          ? 'bg-cyan-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {cert.badgeCode}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/50">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                    Issuer: {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>{cert.date}</span>
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Valid Credential
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements Banner */}
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-indigo-800/50">
          <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Honors & Achievements</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-8">
            Demonstrated Academic & Extracurricular Excellence
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievementsData.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:bg-white/10 transition-colors"
              >
                <span className="text-2xl sm:text-3xl font-black text-indigo-400 block">
                  {item.metric}
                </span>
                <span className="text-sm font-bold text-white block">
                  {item.title}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
