import React, { useState } from 'react';
import { personalInfo, educationData, experienceData, projectsData, certificationsData, skillsData } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Code2
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
CH.N.S. VijayKumar
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}

SUMMARY:
${personalInfo.summary}

EDUCATION:
${educationData.institution}, ${educationData.location}
${educationData.degree} – ${educationData.field}
CGPA: ${educationData.cgpa} | Expected Graduation: ${educationData.expectedGraduation}

INTERNSHIP EXPERIENCE:
- AI/ML Virtual Internship & Certification – SmartBridge (Project: Rising Waters)
- AWS Cloud Practitioner Virtual Internship – SmartBridge
- Full Stack Developer Virtual Internship – SmartBridge
- ServiceNow Virtual Internship – SmartBridge

LEADERSHIP & EXPERIENCE:
Treasurer - ACM Student Chapter
- Managed financial records and budgeting activities.
- Coordinated technical and non-technical events.
- Collaborated with faculty members and student teams to ensure successful event execution.

Treasurer - SAINT (Branch Organisation)
- Coordinated technical and non-technical events.
- Collaborated with faculty members and student teams to ensure successful event execution.

PROJECTS:
Rising Waters: AI/ML Flood & Water Level Prediction (SmartBridge AI/ML Internship)
- Developed machine learning models to forecast flood risks and hydrological rise.
- Preprocessed precipitation telemetry and river sensor data using Python, Pandas, and Scikit-Learn.
- Built predictive classification models with real-time early warning threshold triggers.

Employee Raise Issue & Resolution Portal
- Developed an enterprise employee grievance reporting and incident resolution system.
- Built priority-based routing (Urgent, High, Normal) with department auto-assignment.
- Implemented real-time status tracking, employee dashboards, and admin resolution workflows.

InsightEdu: Student Performance Tracker (MERN Stack)
- Developed a web application to monitor and analyze student academic performance.
- Implemented role-based login for students and faculty.
- Built dashboards to visualize student performance and reports.
- Designed and managed MongoDB databases for efficient data storage.

Flight Finder Web Application
- Developed a responsive application to search and display flight information.
- Designed an intuitive user interface with efficient navigation.
- Improved user experience through responsive layouts and clean design.

TECHNICAL SKILLS:
- Programming Languages: C, Java, Python, JavaScript
- Web Technologies: HTML5, CSS3, JavaScript
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: SQL, MongoDB
- ServiceNow: CSA, CAD
- Tools & Version Control: Git, GitHub

CERTIFICATIONS:
- AI/ML Virtual Internship & Certification – SmartBridge
- ServiceNow Certified System Administrator (CSA)
- ServiceNow Certified Application Developer (CAD)
- Wadhwani Ignite India Certification
- AWS Cloud Practitioner Virtual Internship – SmartBridge
- Full Stack Developer Virtual Internship – SmartBridge

ACHIEVEMENTS:
- CGPA: 9.08/10 throughout B.Tech IT
- SmartBridge AI/ML Internship Certification (Rising Waters)
- ServiceNow Certified System Administrator (CSA)
- ServiceNow Certified Application Developer (CAD)
- Wadhwani Ignite Certified
- Organized multiple technical and non-technical events through ACM

LANGUAGES:
English | Telugu | Hindi
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:m-0">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm print:hidden"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl my-6 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-10 flex flex-col max-h-[92vh] print:max-h-none print:shadow-none print:border-none print:rounded-none overflow-hidden animate-in fade-in duration-200">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-white text-base">
              Resume – CH.N.S. VijayKumar
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              (B.Tech IT • CGPA 9.08)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Paper Resume Content */}
        <div className="p-8 sm:p-12 overflow-y-auto print:overflow-visible bg-white text-slate-900 font-sans space-y-6 select-text text-sm">
          
          {/* Header */}
          <div className="text-center border-b pb-4 border-slate-300">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">
              CH.N.S. VijayKumar
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-700 mt-2">
              <a href={`mailto:${personalInfo.email}`} className="text-indigo-700 hover:underline">
                {personalInfo.email}
              </a>
              <span>|</span>
              <a href={`tel:${personalInfo.phone}`} className="text-indigo-700 hover:underline">
                {personalInfo.phone}
              </a>
              <span>|</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline">
                linkedin.com/in/vijaykumar-chilumuru
              </a>
              <span>|</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline">
                github.com/chilumuruvijay
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
              Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-800">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs">
              <div>
                <strong className="font-bold text-slate-900">{educationData.institution}</strong>
                <div className="italic text-slate-700">
                  {educationData.degree} – {educationData.field}, CGPA: {educationData.cgpa}
                </div>
              </div>
              <div className="text-right text-slate-700">
                <div>{educationData.location}</div>
                <div className="italic">Expected Graduation: {educationData.expectedGraduation}</div>
              </div>
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
              Internship Experience
            </h2>
            <div className="space-y-1 text-xs text-slate-800">
              <div>• <strong>AI/ML Virtual Internship & Certification – SmartBridge</strong> (Project: Rising Waters)</div>
              <div>• AWS Cloud Practitioner Virtual Internship – SmartBridge</div>
              <div>• Full Stack Developer Virtual Internship – SmartBridge</div>
              <div>• ServiceNow Virtual Internship – SmartBridge</div>
            </div>
          </div>

          {/* Leadership & Campus Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
              Experience & Leadership
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="font-bold text-slate-900">Treasurer</div>
                <div className="italic text-slate-700 mb-1">ACM Student Chapter</div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-800 pl-1">
                  <li>Managed financial records and budgeting activities.</li>
                  <li>Coordinated technical and non-technical events.</li>
                  <li>Collaborated with faculty members and student teams to ensure successful event execution.</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-slate-900">Treasurer</div>
                <div className="italic text-slate-700 mb-1">SAINT (Branch Organisation)</div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-800 pl-1">
                  <li>Coordinated technical and non-technical events.</li>
                  <li>Collaborated with faculty members and student teams to ensure successful event execution.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
              Projects
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="font-bold text-slate-900">Rising Waters: AI/ML Flood & Water Level Prediction (SmartBridge AI/ML Internship)</div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-800 pl-1">
                  <li>Developed machine learning classification and regression models to forecast rising water trends and flood risks.</li>
                  <li>Preprocessed hydrological and precipitation datasets using Python, Pandas, and Scikit-Learn.</li>
                  <li>Designed automated early-warning risk threshold triggers to assist in disaster mitigation planning.</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-slate-900">Employee Raise Issue & Resolution Portal</div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-800 pl-1">
                  <li>Developed an enterprise employee grievance reporting and incident resolution system.</li>
                  <li>Implemented priority-based routing (Urgent, High, Normal) with automated status tracking.</li>
                  <li>Created responsive role-based dashboards for employees to track ticket progress and admins to resolve grievances.</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-slate-900">InsightEdu: Student Performance Tracker (MERN Stack)</div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-800 pl-1">
                  <li>Developed a web application to monitor and analyze student academic performance.</li>
                  <li>Implemented role-based login for students and faculty.</li>
                  <li>Built dashboards to visualize student performance and reports.</li>
                  <li>Designed and managed MongoDB databases for efficient data storage.</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-slate-900">Flight Finder Web Application</div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-800 pl-1">
                  <li>Developed a responsive application to search and display flight information.</li>
                  <li>Designed an intuitive user interface with efficient navigation.</li>
                  <li>Improved user experience through responsive layouts and clean design.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs text-slate-800">
              <div><strong>Programming Languages:</strong> C, Java, Python, JavaScript</div>
              <div><strong>Web Technologies:</strong> HTML5, CSS3, JavaScript</div>
              <div><strong>Frontend:</strong> React.js, Tailwind CSS</div>
              <div><strong>Backend:</strong> Node.js, Express.js</div>
              <div><strong>Database:</strong> SQL, MongoDB</div>
              <div><strong>ServiceNow:</strong> CSA (Certified System Administrator), CAD (Certified Application Developer)</div>
              <div><strong>AI/ML & Cloud:</strong> Machine Learning (Scikit-Learn, Pandas, NumPy), AWS Fundamentals</div>
              <div><strong>Tools & Version Control:</strong> Git, GitHub</div>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
              Certifications & Achievements
            </h2>
            <div className="space-y-1 text-xs text-slate-800">
              <div>• <strong>AI/ML Virtual Internship & Certification – SmartBridge</strong> (Project: Rising Waters)</div>
              <div>• ServiceNow Certified System Administrator (CSA)</div>
              <div>• ServiceNow Certified Application Developer (CAD)</div>
              <div>• Wadhwani Ignite India Certification</div>
              <div>• AWS Cloud Practitioner Virtual Internship – SmartBridge</div>
              <div>• Full Stack Developer Virtual Internship – SmartBridge</div>
              <div>• <strong>Academic CGPA:</strong> 9.08/10 throughout B.Tech IT</div>
              <div>• Organized multiple campus technical and non-technical events through ACM</div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-1">
              Languages
            </h2>
            <div className="text-xs text-slate-800">
              English | Telugu | Hindi
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex justify-end print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
