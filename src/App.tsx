import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-200 flex flex-col font-sans">
        
        {/* Navigation Bar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section with Quick Stats & Contact */}
          <Hero onOpenResume={() => setIsResumeOpen(true)} />

          {/* Dynamic Project Filtering Showcase (Requested Feature) */}
          <ProjectsSection />

          {/* Technical Skills & ServiceNow Capabilities */}
          <SkillsSection />

          {/* Professional Certifications & Academic Achievements */}
          <CertificationsSection />

          {/* Leadership & Virtual Internships Timeline */}
          <ExperienceSection />

          {/* About Me & Formal Education */}
          <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

          {/* Contact Section with Interactive Form */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onOpenResume={() => setIsResumeOpen(true)} />

        {/* Formatted Full Resume Viewer / Print Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

      </div>
    </ThemeProvider>
  );
}
