import React, { useState } from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  Sparkles,
  Calendar,
  User,
  Monitor,
  Code2
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'preview'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between bg-slate-50/70 dark:bg-slate-900/70">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                {project.categoryLabel}
              </span>
              {project.completionDate && (
                <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3 h-3" />
                  {project.completionDate}
                </span>
              )}
            </div>
            <h2 id="project-modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-2 pt-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-2 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Project Overview & Features
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-2 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'architecture'
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Architecture & Tech Stack
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-2 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'preview'
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Interactive Demo Preview
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Project Description
                </h4>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.role && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <User className="w-4 h-4 text-indigo-500" />
                  <span><strong>Role:</strong> {project.role}</span>
                </div>
              )}

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Key Achievements & Implementation Highlights
                </h4>
                <div className="space-y-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Engineering Architecture
                </h4>
                {project.architectureDetails && project.architectureDetails.length > 0 ? (
                  <div className="space-y-3">
                    {project.architectureDetails.map((detail, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <div className="flex items-start gap-2.5">
                          <Layers className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500">Modular scalable design with clean separation of concerns.</p>
                )}
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'preview' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <Monitor className="w-4 h-4 text-indigo-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                    Live Interface & Workflow Simulation
                  </span>
                </div>

                {project.id === 'rising-waters' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></span>
                          <span className="text-cyan-600 dark:text-cyan-400 font-bold">Rising Waters: Real-Time Hydrological Predictor</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300">
                          ML Model Active
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                          <span className="text-[10px] text-slate-400 block">Rainfall Index</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200">142 mm/24h</span>
                          <span className="text-[9px] text-rose-500 font-medium">+35% above avg</span>
                        </div>
                        <div className="p-2 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                          <span className="text-[10px] text-slate-400 block">River Sensor</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200">4.82 meters</span>
                          <span className="text-[9px] text-amber-500 font-medium">Warning: 4.50m</span>
                        </div>
                        <div className="p-2 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                          <span className="text-[10px] text-slate-400 block">Predicted Risk</span>
                          <span className="font-bold text-rose-600 dark:text-rose-400">HIGH (89%)</span>
                          <span className="text-[9px] text-rose-500 font-medium">Alert Level 2</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-cyan-50/70 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 text-[11px] text-cyan-900 dark:text-cyan-200 space-y-1">
                        <div className="font-semibold flex items-center justify-between">
                          <span>SmartBridge AI/ML Internship Capstone Model</span>
                          <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono">Accuracy: 93.8%</span>
                        </div>
                        <p className="text-[10px] text-slate-600 dark:text-slate-300">
                          Features: Precipitation rate, river flow velocity, terrain saturation & historical flood occurrences trained via Random Forest & Logistic Regression classifiers.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'employee-raise-issue' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                          Employee Portal: Active Ticket Overview
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">
                          Ticket #EMP-1048
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/70 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-800 dark:text-slate-200 text-xs">
                              VPN Authentication Gateway Timeout
                            </span>
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400">
                              Priority: High
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            Raised by: VijayKumar (IT Eng.) • Department: Infrastructure Support
                          </p>
                          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-200/50 dark:border-slate-700/50">
                            <span>Status: In Progress (Assigned to NetOps)</span>
                            <span className="text-emerald-500 font-medium">SLA: 2h Remaining</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div className="p-2 rounded bg-slate-50 dark:bg-slate-800">
                            <span className="text-[10px] text-slate-400 block">Total Issues Logged</span>
                            <span className="font-bold text-slate-800 dark:text-slate-200">128 Issues</span>
                          </div>
                          <div className="p-2 rounded bg-slate-50 dark:bg-slate-800">
                            <span className="text-[10px] text-slate-400 block">Resolution Rate</span>
                            <span className="font-bold text-emerald-600 dark:text-emerald-400">96.2% Resolved</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'insight-edu' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                      <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 font-semibold border-b border-slate-100 dark:border-slate-800 pb-1.5">
                        <span>Dashboard: Student Analytics View</span>
                        <span className="text-emerald-500 font-bold">CGPA: 9.08/10</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center pt-1">
                        <div className="p-2 rounded bg-slate-50 dark:bg-slate-800">
                          <span className="text-[10px] text-slate-400 block">Attendance</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200">96.4%</span>
                        </div>
                        <div className="p-2 rounded bg-slate-50 dark:bg-slate-800">
                          <span className="text-[10px] text-slate-400 block">Credits Done</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200">92 / 160</span>
                        </div>
                        <div className="p-2 rounded bg-slate-50 dark:bg-slate-800">
                          <span className="text-[10px] text-slate-400 block">Semester Rank</span>
                          <span className="font-bold text-indigo-600 dark:text-indigo-400">Top 1%</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                        * Integrated with role-based JWT auth and MongoDB aggregation pipeline for semester analytics.
                      </p>
                    </div>
                  </div>
                )}

                {project.id === 'flight-finder' && (
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                    <div className="flex items-center justify-between font-semibold border-b border-slate-100 dark:border-slate-800 pb-1.5">
                      <span className="text-indigo-600 dark:text-indigo-400">Flight Route Search: Vijayawada (VGA) → Hyderabad (HYD)</span>
                      <span className="text-slate-500">Direct Flights</span>
                    </div>
                    <div className="space-y-1.5 pt-1">
                      <div className="p-2 rounded bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
                        <div>
                          <span className="font-bold text-slate-800 dark:text-slate-200 block">Air Express 6E-204</span>
                          <span className="text-[11px] text-slate-400">08:15 AM - 09:10 AM (55m)</span>
                        </div>
                        <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold rounded">₹ 2,450</span>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'servicenow-incident-portal' && (
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                    <div className="flex items-center justify-between font-semibold border-b border-slate-100 dark:border-slate-800 pb-1.5">
                      <span className="text-indigo-600 dark:text-indigo-400">ServiceNow Incident Automation: INC001094</span>
                      <span className="text-amber-500 font-medium">Priority 2 - High</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                      <div><strong>Caller:</strong> IT Dept Faculty</div>
                      <div><strong>State:</strong> Work in Progress</div>
                      <div><strong>Assignment Group:</strong> Enterprise Systems</div>
                      <div><strong>Automation:</strong> Auto-assigned via Business Rule</div>
                    </div>
                  </div>
                )}

                {project.id.includes('cloud') || project.id.includes('aiml') ? (
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                    <div className="flex items-center justify-between font-semibold border-b border-slate-100 dark:border-slate-800 pb-1.5">
                      <span className="text-indigo-600 dark:text-indigo-400">SmartBridge Virtual Internship Output</span>
                      <span className="text-emerald-500 font-medium">Verified Completion</span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">
                      Standardized cloud architecture / model pipeline documented with reproducible scripts and configuration templates.
                    </p>
                  </div>
                ) : null}

              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/70 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Project Link</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
