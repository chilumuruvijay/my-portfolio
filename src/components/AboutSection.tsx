import React from 'react';
import { personalInfo, educationData } from '../data/portfolioData';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Languages, 
  CheckCircle2, 
  FileText, 
  MapPin, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800/80 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me & Education
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Dedicated Information Technology undergraduate, ServiceNow CAD & CSA certified, with hands-on software development and campus leadership experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Engineering with Rigor & Enterprise Purpose
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                I am an Information Technology undergraduate at <strong className="text-slate-900 dark:text-white font-semibold">Gudlavalleru Engineering College</strong> (Expected Graduation 2027) with a consistent cumulative academic record of <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">9.08 / 10 CGPA</strong>.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                My software engineering journey unites modern full-stack web applications (React.js, Node.js, Express.js, MongoDB) with enterprise SaaS automation as a <strong className="text-slate-900 dark:text-white font-semibold">ServiceNow Certified Application Developer (CAD)</strong> and <strong className="text-slate-900 dark:text-white font-semibold">Certified System Administrator (CSA)</strong>.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Beyond pure coding, I serve as the elected <strong className="text-slate-900 dark:text-white font-semibold">Treasurer for both the ACM Student Chapter and SAINT</strong> (branch organisation), where I balance departmental budgeting, organize university hackathons, and bridge communication between students and faculty.
              </p>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Inspect Full Resume Document</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Languages Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <Languages className="w-4 h-4 text-indigo-500" />
                <span>Languages Spoken</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {personalInfo.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    <span className="text-sm font-bold text-slate-900 dark:text-white block">
                      {lang.name}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Formal Education Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-sm space-y-5">
              
              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                    Higher Education
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {educationData.institution}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">Degree & Field</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-base">
                    {educationData.degree} – {educationData.field}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800/60">
                    <span className="text-xs text-indigo-700 dark:text-indigo-300 font-semibold block">Academic CGPA</span>
                    <span className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400 block mt-0.5">
                      {educationData.cgpa}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">Expected Graduation</span>
                    <span className="text-base font-bold text-slate-900 dark:text-white block mt-1">
                      {educationData.expectedGraduation}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{educationData.location}</span>
                </div>
              </div>

              {/* Education Highlights */}
              <div className="space-y-2.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                  Academic Milestones
                </span>
                {educationData.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
