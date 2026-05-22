import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Code, 
  FileText, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Database,
  Layers,
  Settings,
  Terminal,
  Activity,
  Heart
} from 'lucide-react';

function GithubIcon({ size = 24, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 24, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

const SECTIONS = [
  { id: 'home', title: 'Home' },
  { id: 'education', title: 'Education' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'experience', title: 'Experience' },
  { id: 'certifications', title: 'Certifications' },
  { id: 'contact', title: 'Contact' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Set page titles dynamically
  useEffect(() => {
    document.title = `Baavith Reddy | ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`;
  }, [activeTab]);

  const handleTabChange = (newTab) => {
    const currentIndex = SECTIONS.findIndex(s => s.id === activeTab);
    const newIndex = SECTIONS.findIndex(s => s.id === newTab);
    
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(newTab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextTab = () => {
    const currentIndex = SECTIONS.findIndex(s => s.id === activeTab);
    if (currentIndex < SECTIONS.length - 1) {
      handleTabChange(SECTIONS[currentIndex + 1].id);
    }
  };

  const prevTab = () => {
    const currentIndex = SECTIONS.findIndex(s => s.id === activeTab);
    if (currentIndex > 0) {
      handleTabChange(SECTIONS[currentIndex - 1].id);
    }
  };

  // Slide transition variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans selection:bg-brand-100 selection:text-brand-700">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-brand-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <span className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-lg">
              B
            </span>
            <span className="font-extrabold text-xl tracking-tight text-gray-900">
              Baavith<span className="text-brand-500">Reddy</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => handleTabChange(section.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === section.id
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                    : 'text-gray-600 hover:text-brand-500 hover:bg-brand-50'
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-brand-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-100 px-4 py-4 space-y-2 overflow-hidden shadow-inner"
          >
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => handleTabChange(section.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  activeTab === section.id
                    ? 'bg-brand-500 text-white'
                    : 'text-gray-700 hover:bg-brand-50 hover:text-brand-500'
                }`}
              >
                {section.title}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide Navigation Arrows (Desktop) */}
      <div className="hidden lg:block">
        {activeTab !== 'home' && (
          <button 
            onClick={prevTab}
            className="fixed left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-brand-50 border border-brand-200 text-brand-600 hover:bg-brand-500 hover:text-white transition-all shadow-md z-30"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {activeTab !== 'contact' && (
          <button 
            onClick={nextTab}
            className="fixed right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-brand-50 border border-brand-200 text-brand-600 hover:bg-brand-500 hover:text-white transition-all shadow-md z-30"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Main Pages Container */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-12 overflow-hidden relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full min-h-[60vh] flex flex-col justify-center"
          >
            {activeTab === 'home' && <HomeView handleTabChange={handleTabChange} />}
            {activeTab === 'education' && <EducationView />}
            {activeTab === 'skills' && <SkillsView />}
            {activeTab === 'projects' && <ProjectsView />}
            {activeTab === 'experience' && <ExperienceView />}
            {activeTab === 'certifications' && <CertificationsView />}
            {activeTab === 'contact' && <ContactView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-brand-50/50 border-t border-brand-100 py-6 text-center text-sm text-gray-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p>© {new Date().getFullYear()} Anugu Baavith Reddy. All rights reserved.</p>
          <p className="flex items-center justify-center">
            Designed with <Heart size={14} className="text-brand-500 mx-1 fill-brand-500" /> & deployed on Vercel
          </p>
        </div>
      </footer>
    </div>
  );
}

// ----------------------------------------------------
// HOME VIEW
// ----------------------------------------------------
function HomeView({ handleTabChange }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-6">
      {/* Enlarged Profile Picture */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.8 }}
        className="relative flex-shrink-0"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-orange-300 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-brand-500 via-orange-400 to-brand-100 shadow-2xl">
          {/* Custom SVG Tech Avatar Illustration */}
          <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center relative">
            <svg className="w-4/5 h-4/5 text-brand-500" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 15a18 18 0 1 0 0 36 18 18 0 0 0 0-36zm-24 50c0-9.9 8.1-18 18-18h12c9.9 0 18 8.1 18 18v6H26v-6z" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-500/10 to-transparent"></div>
          </div>
        </div>
      </motion.div>

      {/* Info & Intro */}
      <div className="flex-1 text-center lg:text-left space-y-6">
        <div className="space-y-2">
          <span className="px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-sm font-semibold border border-brand-200">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-none pt-2">
            Hi, I'm Anugu <br/>
            <span className="bg-gradient-to-r from-brand-500 to-orange-600 bg-clip-text text-transparent">
              Baavith Reddy
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            AI & Machine Learning Student | Developer
          </p>
        </div>

        <p className="text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
          I am a B.Tech student in Artificial Intelligence and Machine Learning from Hyderabad, Telangana. 
          I specialize in building intelligent applications, log monitoring systems, and automated pipelines, 
          combining deep learning, analysis tools, and modern software development practices.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <button 
            onClick={() => handleTabChange('projects')}
            className="px-6 py-3 bg-brand-500 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/20 hover:bg-brand-600 transition-all transform hover:-translate-y-0.5"
          >
            View Projects
          </button>
          <button 
            onClick={() => handleTabChange('contact')}
            className="px-6 py-3 bg-white text-brand-600 border-2 border-brand-200 font-semibold rounded-xl hover:bg-brand-50 transition-all transform hover:-translate-y-0.5"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// EDUCATION VIEW
// ----------------------------------------------------
function EducationView() {
  const education = [
    {
      degree: 'B.Tech - Artificial Intelligence and Machine Learning',
      institution: 'Hyderabad Institute of Technology and Management',
      period: '11 2022 – 02 2026',
      location: 'Hyderabad, India',
      grade: 'CGPA - 8.5'
    },
    {
      degree: 'Intermediate',
      institution: 'Sri Chaitanya Jr college',
      period: '05 2020 – 08 2022',
      location: 'Hyderabad, India',
      grade: 'CGPA - 8.75'
    },
    {
      degree: '10th Class',
      institution: 'Dr.KKR Gowtham High School',
      period: '05 2019 – 04 2020',
      location: 'Hyderabad, India',
      grade: 'CGPA - 10'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Education Timeline</h2>
        <p className="text-gray-500">My academic journey and scholastic accomplishments</p>
      </div>

      <div className="relative border-l-2 border-brand-200 max-w-3xl mx-auto pl-6 md:pl-8 py-2 space-y-12">
        {education.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative"
          >
            {/* Timeline bullet */}
            <span className="absolute -left-[35px] md:-left-[43px] top-1.5 bg-brand-500 text-white rounded-full p-2 border-4 border-white shadow">
              <GraduationCap size={16} />
            </span>

            {/* Custom Shade Card */}
            <div className="bg-brand-50/70 border border-brand-100 hover:border-brand-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.degree}</h3>
                  <p className="text-brand-600 font-semibold text-sm">{item.institution}</p>
                </div>
                <span className="shrink-0 bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-bold inline-block">
                  {item.period}
                </span>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                <span className="flex items-center"><MapPin size={14} className="mr-1" /> {item.location}</span>
                <span className="flex items-center font-bold text-brand-600">Grade: {item.grade}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// SKILLS VIEW
// ----------------------------------------------------
function SkillsView() {
  const skillGroups = [
    {
      category: 'Languages',
      icon: <Terminal className="text-brand-500" />,
      skills: ['Python', 'R', 'SQL', 'C', 'Java']
    },
    {
      category: 'Machine Learning & AI',
      icon: <Layers className="text-brand-500" />,
      skills: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning (ANN, CNN)', 'NLP', 'Model Deployment']
    },
    {
      category: 'Libraries & Frameworks',
      icon: <Code className="text-brand-500" />,
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras', 'Matplotlib', 'OpenCV', 'DeepFace']
    },
    {
      category: 'Tools & Platforms',
      icon: <Settings className="text-brand-500" />,
      skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Linux']
    },
    {
      category: 'Data Analytics & BI',
      icon: <Database className="text-brand-500" />,
      skills: ['Data Cleaning', 'Exploratory Data Analysis (EDA)', 'Power BI']
    },
    {
      category: 'Web Technologies',
      icon: <Activity className="text-brand-500" />,
      skills: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Technical Skills</h2>
        <p className="text-gray-500">The tools, languages, and frameworks I use to solve real-world problems</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-brand-50/70 border border-brand-100 hover:border-brand-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col"
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="p-2 bg-white rounded-xl shadow-sm border border-brand-100">
                {group.icon}
              </span>
              <h3 className="font-bold text-lg text-gray-900">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {group.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="bg-white border border-brand-100 text-gray-700 px-3 py-1.5 rounded-xl text-xs font-medium hover:border-brand-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// PROJECTS VIEW
// ----------------------------------------------------
function ProjectsView() {
  const projects = [
    {
      title: 'AI-Based Missing Person Identification System',
      tech: ['Python', 'OpenCV', 'DeepFace', 'TensorFlow'],
      details: [
        'Developed an AI-powered facial recognition application for identifying missing persons using OpenCV Haar Cascade and DeepFace with the VGG-Face model.',
        'Implemented real-time face matching, image processing workflows, and facial embedding comparison.',
        'Designed a scalable detection pipeline to reduce manual verification efforts and improve identification speed.'
      ],
      link: '#',
      linkText: 'Live site here'
    },
    {
      title: 'ATLAS – AI-Powered Career Guidance System',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'NLP'],
      details: [
        'Developed an AI-powered recommendation system for career and higher education guidance using NLP and ML.',
        'Implemented preprocessing, feature logic, and evaluation pipelines, improving recommendation accuracy by 12%.',
        'Enhancing with Masters, country, scholarship, and university recommendation features.'
      ],
      link: '#',
      linkText: 'Download Link'
    },
    {
      title: 'Log Monitoring & Data Visualization System',
      tech: ['Python', 'Pandas', 'Prometheus', 'Grafana', 'Loki'],
      details: [
        'Built an end-to-end monitoring and alerting system to track application behavior and system health.',
        'Implemented real-time log aggregation, dashboard visualization, and automated alerts.',
        'Observed system behavior using Loki log flows and Prometheus metrics.'
      ],
      link: '#',
      linkText: 'Observability Stack'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Featured Projects</h2>
        <p className="text-gray-500">Showcasing systems built with modern artificial intelligence, machine learning, and monitoring tools</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-brand-50/70 border border-brand-100 hover:border-brand-200 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx}
                    className="bg-brand-100/70 text-brand-700 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className="space-y-2.5 text-gray-600 text-sm list-disc pl-4 leading-relaxed">
                {project.details.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
            </div>
            
            <div className="pt-6 mt-6 border-t border-brand-100/50 flex items-center justify-between">
              <a 
                href={project.link}
                className="inline-flex items-center text-brand-600 hover:text-brand-700 font-semibold text-sm transition-colors"
              >
                {project.linkText}
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// EXPERIENCE VIEW
// ----------------------------------------------------
function ExperienceView() {
  const experiences = [
    {
      role: 'Student Registrar (SSG)',
      org: 'Hyderabad Institute of Technology and Management',
      period: '04 2025 – 04 2026',
      location: 'Hyderabad, India',
      details: [
        'Coordinated student administration, communication, grievances, and event operations.',
        'Managed organizational workflows in alignment with faculty, SSG team, and students.'
      ]
    },
    {
      role: 'Team Lead (Internship)',
      org: 'Veenero Solutions',
      period: '11 2023 – 01 2024',
      location: 'Hyderabad, India',
      details: [
        'Led a 6-member team to design an IoT-based automatic water pumping mechanism using ultrasonic sensors.',
        'Oversaw hardware-software integration and testing phases successfully.'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Experience & Leadership</h2>
        <p className="text-gray-500">My internship background and organizational leadership roles</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-brand-50/70 border border-brand-100 hover:border-brand-200 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                <p className="text-brand-600 font-semibold">{exp.org}</p>
              </div>
              <span className="shrink-0 bg-brand-100 text-brand-700 px-3 py-1.5 rounded-full text-xs font-bold inline-block">
                {exp.period}
              </span>
            </div>
            <p className="text-sm text-gray-500 flex items-center mb-4">
              <MapPin size={14} className="mr-1" /> {exp.location}
            </p>
            <ul className="space-y-2 text-gray-600 text-sm list-disc pl-4 leading-relaxed">
              {exp.details.map((detail, dIdx) => (
                <li key={dIdx}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// CERTIFICATIONS VIEW
// ----------------------------------------------------
function CertificationsView() {
  const certifications = [
    { name: 'PowerBI', provider: 'Simplilearn' },
    { name: 'R Programming', provider: 'Infosys Springboard' },
    { name: 'Python Fundamentals', provider: 'Infosys Springboard' },
    { name: 'Artificial Intelligence', provider: 'IUCEE' },
    { name: 'Entrepreneurship', provider: 'Simplilearn' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Certifications</h2>
        <p className="text-gray-500">Validating my technical domain knowledge and expertise</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-brand-50/70 border border-brand-100 hover:border-brand-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center flex flex-col justify-center items-center space-y-3"
          >
            <span className="p-3 bg-white text-brand-500 rounded-full shadow-sm border border-brand-100">
              <Award size={24} />
            </span>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">{cert.name}</h3>
              <p className="text-sm text-brand-600 font-medium">{cert.provider}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// CONTACT VIEW
// ----------------------------------------------------
function ContactView() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Get In Touch</h2>
        <p className="text-gray-500">Feel free to reach out for collaborations or opportunities</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Contact Info Cards */}
        <div className="space-y-4 flex flex-col justify-between">
          <div className="bg-brand-50/70 border border-brand-100 p-6 rounded-2xl flex items-center space-x-4">
            <span className="p-3 bg-white text-brand-500 rounded-xl border border-brand-100 shadow-sm">
              <Mail size={24} />
            </span>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Me</p>
              <a href="mailto:baavithreddy04@gmail.com" className="text-gray-700 hover:text-brand-500 font-bold transition-colors">
                baavithreddy04@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-brand-50/70 border border-brand-100 p-6 rounded-2xl flex items-center space-x-4">
            <span className="p-3 bg-white text-brand-500 rounded-xl border border-brand-100 shadow-sm">
              <Phone size={24} />
            </span>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Call Me</p>
              <a href="tel:+919100079321" className="text-gray-700 hover:text-brand-500 font-bold transition-colors">
                +91-9100079321
              </a>
            </div>
          </div>

          <div className="bg-brand-50/70 border border-brand-100 p-6 rounded-2xl flex items-center space-x-4">
            <span className="p-3 bg-white text-brand-500 rounded-xl border border-brand-100 shadow-sm">
              <MapPin size={24} />
            </span>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</p>
              <p className="text-gray-700 font-bold">Hyderabad, Telangana, India</p>
            </div>
          </div>
        </div>

        {/* Social Links & Resume Card */}
        <div className="bg-brand-50/70 border border-brand-100 p-8 rounded-3xl flex flex-col justify-between items-center text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Connect Online</h3>
            <p className="text-sm text-gray-500">Visit my social profiles or check out my work repositories</p>
          </div>

          <div className="flex gap-4 my-6">
            <a 
              href="https://github.com/Baavith" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white hover:bg-brand-500 hover:text-white text-gray-700 border border-brand-100 hover:border-brand-500 rounded-2xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center"
            >
              <GithubIcon size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/Baavith" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white hover:bg-brand-500 hover:text-white text-gray-700 border border-brand-100 hover:border-brand-500 rounded-2xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center"
            >
              <LinkedinIcon size={28} />
            </a>
          </div>

          <p className="text-xs text-gray-400">
            Open for full-time roles, internships, and collaborative AI/ML research projects.
          </p>
        </div>
      </div>
    </div>
  );
}
