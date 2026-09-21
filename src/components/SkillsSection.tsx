import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, 
  Layout, 
  Database, 
  Cloud, 
  GitBranch, 
  Check, 
  Sparkles,
  Terminal,
  ShieldCheck
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Code2: Code2,
  Layout: Layout,
  Database: Database,
  Cloud: Cloud,
  GitBranch: GitBranch,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800/80 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Enterprise Expertise
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            A comprehensive technical toolkit spanning modern full-stack web engineering, enterprise ServiceNow application development, and cloud foundations.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            All Competencies
          </button>
          {skillsData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = iconMap[category.iconName] || Code2;
            const isServiceNow = category.id === 'servicenow-cloud';

            return (
              <div
                key={category.id}
                className={`rounded-2xl p-6 bg-white dark:bg-slate-900 border transition-all duration-200 ${
                  isServiceNow
                    ? 'border-indigo-300 dark:border-indigo-700 shadow-md shadow-indigo-500/10 ring-1 ring-indigo-500/20'
                    : 'border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges List */}
                <div className="space-y-2.5 pt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2">
                        {skill.highlight ? (
                          <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                        ) : (
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        )}
                        <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>

                      {skill.tag && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/60 shrink-0">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {isServiceNow && (
                  <div className="mt-4 pt-3 border-t border-indigo-100 dark:border-indigo-950/80 flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Certified Application Developer & Administrator</span>
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
