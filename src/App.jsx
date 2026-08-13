import { useState } from "react";
import GitHubProjects from "./components/GitHubProjects";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("about.json");

  const githubProfile = "https://github.com/chintharishithkumar";
  const linkedinProfile = "https://www.linkedin.com/in/rishith-kumar-chintha/";
  const email = "chintha.rishithkumar@klh.edu.in";

  const skills = [
    { name: "React", level: "Frontend Core", icon: "⚛️", color: "from-cyan-500/20 to-cyan-500/5", text: "text-cyan-400", border: "group-hover:border-cyan-500/50" },
    { name: "Tailwind CSS", level: "UI Styling", icon: "🎨", color: "from-sky-500/20 to-sky-500/5", text: "text-sky-400", border: "group-hover:border-sky-500/50" },
    { name: "JavaScript", level: "Interaction", icon: "⚡", color: "from-yellow-500/20 to-yellow-500/5", text: "text-yellow-400", border: "group-hover:border-yellow-500/50" },
    { name: "HTML", level: "Structure", icon: "🌐", color: "from-orange-500/20 to-orange-500/5", text: "text-orange-400", border: "group-hover:border-orange-500/50" },
    { name: "CSS", level: "Design Styles", icon: "✨", color: "from-blue-500/20 to-blue-500/5", text: "text-blue-400", border: "group-hover:border-blue-500/50" },
    { name: "Python", level: "Backend / Logic", icon: "🐍", color: "from-indigo-500/20 to-indigo-500/5", text: "text-indigo-400", border: "group-hover:border-indigo-500/50" },
    { name: "Java", level: "Core Logic", icon: "☕", color: "from-red-500/20 to-red-500/5", text: "text-red-400", border: "group-hover:border-red-500/50" },
    { name: "Git & GitHub", level: "Version Control", icon: "🐙", color: "from-purple-500/20 to-purple-500/5", text: "text-purple-400", border: "group-hover:border-purple-500/50" },
    { name: "SQL", level: "Database Mgmt", icon: "💾", color: "from-emerald-500/20 to-emerald-500/5", text: "text-emerald-400", border: "group-hover:border-emerald-500/50" },
  ];

  const projects = [
    {
      title: "Travel Planner",
      description:
        "A responsive travel planning application designed to help users organize trips, manage travel plans and explore useful travel information.",
      tech: ["React", "Tailwind CSS", "JavaScript", "API"],
      category: "Web",
      github: null,
    },
    {
      title: "Algorithm Analyzer",
      description:
        "A web application for comparing searching and sorting algorithms by measuring execution time and presenting performance results visually.",
      tech: ["Python", "Flask", "JavaScript", "Chart.js"],
      category: "Programming",
      github:
        "https://github.com/chintharishithkumar/sorting-algorithm-comparison",
    },
    {
      title: "GadgetHub",
      description:
        "A responsive e-commerce interface for browsing products, managing a shopping cart and maintaining a wishlist.",
      tech: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
      category: "Web",
      github: null,
    },
  ];

  const certifications = [
    { name: "React JS for Beginners", provider: "Beginner Level", icon: "⚛️" },
    { name: "Legacy Responsive Web Design v8", provider: "freeCodeCamp", icon: "🎨" },
    { name: "Data Analytics Job Simulation — Deloitte", provider: "Forage", icon: "📊" },
  ];

  const filteredProjects =
    projectFilter === "All"
      ? projects
      : projects.filter((project) => project.category === projectFilter);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={`${darkMode ? "theme-dark bg-[#030712]" : "theme-light bg-[#f8fafc]"} min-h-screen relative font-sans transition-colors duration-300`}>
      
      {/* ================= BACKGROUND GLOWS / MESH ================= */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-40 dark:opacity-60">
        <div className="absolute top-[-10%] left-[-10%] h-[50vw] w-[50vw] rounded-full bg-cyan-400/20 blur-[120px] animate-blob-1"></div>
        <div className="absolute bottom-[-10%] right-[-10%] h-[50vw] w-[50vw] rounded-full bg-indigo-500/15 blur-[150px] animate-blob-2"></div>
        <div className="absolute top-[40%] left-[50%] h-[30vw] w-[30vw] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[100px] animate-blob-1"></div>
      </div>

      {/* ================= FLOATING CAPSULE NAVBAR ================= */}
      <div className="fixed left-0 right-0 top-4 z-50 px-4">
        <nav className="mx-auto max-w-5xl rounded-full border border-slate-200/40 bg-white/75 dark:border-slate-800/40 dark:bg-slate-950/75 backdrop-blur-lg px-6 py-3 shadow-lg flex items-center justify-between transition-colors duration-300">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-extrabold tracking-tight flex items-center gap-1 group"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">Dev</span>
            <span className="text-slate-800 dark:text-slate-200">Folio</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden items-center gap-2 md:flex">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "education",
              "certifications",
              "github",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-2.5 text-sm transition-all duration-300 hover:scale-115 hover:rotate-12 hover:border-cyan-400 dark:hover:border-cyan-400"
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-2.5 text-lg md:hidden"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-slate-200/40 bg-white/90 dark:border-slate-800/40 dark:bg-slate-950/95 backdrop-blur-lg px-6 py-6 shadow-xl md:hidden">
            <div className="flex flex-col gap-3">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "education",
                "certifications",
                "github",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-semibold capitalize text-left px-4 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32 pb-16 z-10"
      >
        <div className="mx-auto max-w-6xl w-full grid gap-14 md:grid-cols-2 items-center">
          
          {/* Left Hero Content */}
          <div className="flex flex-col items-start text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 dark:border-cyan-400/20 dark:bg-cyan-400/5 px-4 py-2 text-sm text-cyan-600 dark:text-cyan-400 font-semibold shadow-sm animate-pulse">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              Student Developer
            </div>

            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400">
              Rishith Kumar's Space
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white">
              CHINTHA
              <br />
              RISHITH
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 dark:from-cyan-400 dark:to-indigo-400">
                KUMAR
              </span>
            </h1>

            <p className="mt-5 text-lg font-semibold text-slate-700 dark:text-slate-300">
              B.Tech Computer Science Student @ KL University
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500 dark:text-slate-400">
              I am a passionate technology enthusiast interested in modern web development, algorithms analysis, and interactive UX/UI design. Welcome to my developer canvas.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white px-8 py-3.5 font-bold shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                View Projects 
                <span>→</span>
              </button>

              <a
                href="/resume.pdf"
                download="Chintha_Rishith_Kumar_Resume.pdf"
                className="w-full sm:w-auto rounded-full border border-slate-300/80 dark:border-slate-800 bg-white/10 dark:bg-slate-900/30 backdrop-blur-sm px-8 py-3.5 font-bold text-slate-800 dark:text-slate-200 hover:border-cyan-400 dark:hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Download Resume 
                <span>↓</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={githubProfile}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/40 px-5 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-400 hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>

              <a
                href={linkedinProfile}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/40 px-5 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-400 hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 rounded-full border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/40 px-5 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-400 hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </div>

          {/* Right IDE Mockup Card */}
          <div className="flex justify-center md:justify-end w-full animate-float">
            <div className="relative w-full max-w-md">
              {/* Decorative glows */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 blur-2xl z-0"></div>
              
              {/* VS Code Window Container */}
              <div className="relative z-10 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#0f1422] text-slate-300 shadow-2xl overflow-hidden font-mono text-xs select-none">
                
                {/* Header Window Controls */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0a0d18] border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"></span>
                    <span className="h-3 w-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"></span>
                  </div>
                  <span className="text-[10px] tracking-wider text-slate-500 font-semibold select-none flex items-center gap-1.5">
                    <span className="text-cyan-400">📄</span> {activeTab}
                  </span>
                  <span className="w-10"></span> {/* Spacer */}
                </div>

                {/* Editor File Tabs */}
                <div className="flex bg-[#0a0d18] text-[10px] text-slate-400 select-none border-b border-slate-900">
                  <button
                    onClick={() => setActiveTab("about.json")}
                    className={`flex items-center gap-1 px-4 py-2 border-r border-slate-900 transition-colors duration-200 ${activeTab === "about.json" ? "bg-[#0f1422] text-cyan-400 font-bold border-t-2 border-t-cyan-400" : "hover:bg-slate-900/50"}`}
                  >
                    <span>💛</span> about.json
                  </button>
                  <button
                    onClick={() => setActiveTab("education.json")}
                    className={`flex items-center gap-1 px-4 py-2 border-r border-slate-900 transition-colors duration-200 ${activeTab === "education.json" ? "bg-[#0f1422] text-cyan-400 font-bold border-t-2 border-t-cyan-400" : "hover:bg-slate-900/50"}`}
                  >
                    <span>🎓</span> education.json
                  </button>
                  <button
                    onClick={() => setActiveTab("skills.json")}
                    className={`flex items-center gap-1 px-4 py-2 border-r border-slate-900 transition-colors duration-200 ${activeTab === "skills.json" ? "bg-[#0f1422] text-cyan-400 font-bold border-t-2 border-t-cyan-400" : "hover:bg-slate-900/50"}`}
                  >
                    <span>🛠️</span> skills.json
                  </button>
                </div>

                {/* Editor Code Area */}
                <div className="p-6 text-left leading-6 font-mono text-slate-300 min-h-[220px]">
                  
                  {activeTab === "about.json" && (
                    <>
                      <div><span className="ide-keyword">const</span> <span className="ide-name">student</span> = &#123;</div>
                      <div className="pl-4"><span className="ide-name">"name"</span>: <span className="ide-string">"Rishith"</span>,</div>
                      <div className="pl-4"><span className="ide-name">"role"</span>: <span className="ide-string">"Student Developer"</span>,</div>
                      <div className="pl-4"><span className="ide-name">"college"</span>: <span className="ide-string">"KL University"</span>,</div>
                      <div className="pl-4"><span className="ide-name">"degree"</span>: <span className="ide-string">"B.Tech Computer Science"</span>,</div>
                      <div className="pl-4"><span className="ide-name">"focus"</span>: <span className="ide-string">"Web Development"</span>,</div>
                      <div className="pl-4"><span className="ide-name">"learning"</span>: <span className="ide-boolean">true</span></div>
                      <div>&#125;;</div>
                    </>
                  )}

                  {activeTab === "education.json" && (
                    <>
                      <div><span className="ide-keyword">const</span> <span className="ide-name">education</span> = &#123;</div>
                      <div className="pl-4"><span className="ide-name">"university"</span>: <span className="ide-string">"KL University"</span>,</div>
                      <div className="pl-4"><span className="ide-name">"duration"</span>: <span className="ide-string">"2025 - 2029"</span>,</div>
                      <div className="pl-4"><span className="ide-name">"course"</span>: <span className="ide-string">"Bachelor of Technology"</span>,</div>
                      <div className="pl-4"><span className="ide-name">"status"</span>: <span className="ide-string">"Undergrad (Current)"</span></div>
                      <div>&#125;;</div>
                    </>
                  )}

                  {activeTab === "skills.json" && (
                    <>
                      <div><span className="ide-keyword">const</span> <span className="ide-name">skills</span> = [</div>
                      <div className="pl-4"><span className="ide-string">"React"</span>, <span className="ide-string">"Tailwind CSS"</span>, <span className="ide-string">"JavaScript"</span>,</div>
                      <div className="pl-4"><span className="ide-string">"Python"</span>, <span className="ide-string">"Java"</span>, <span className="ide-string">"Git & GitHub"</span>,</div>
                      <div className="pl-4"><span className="ide-string">"SQL"</span>, <span className="ide-string">"HTML"</span>, <span className="ide-string">"CSS"</span></div>
                      <div>];</div>
                    </>
                  )}

                </div>

                {/* IDE Footer bar */}
                <div className="flex items-center justify-between px-4 py-1.5 bg-[#0a0d18] text-[9px] text-slate-500 border-t border-slate-900 select-none">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">●</span> Ready
                    <span className="text-slate-700">|</span> Ln 1, Col 1
                  </div>
                  <div className="flex items-center gap-3">
                    <span>UTF-8</span>
                    <span>JSON</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="relative z-10 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl text-slate-900 dark:text-white">
            Student & Developer
          </h2>
          <div className="mt-1.5 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"></div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-center text-left space-y-6">
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                I am <span className="font-semibold text-slate-800 dark:text-slate-200">CHINTHA RISHITH KUMAR</span>, currently pursuing my B.Tech degree at <span className="font-semibold text-slate-800 dark:text-slate-200">KL University</span> (expected graduation period 2025 to 2029).
              </p>

              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                My software journey revolves around learning modern programming methodologies and building responsive web applications. I focus on creating interfaces that load quickly and look exceptionally polished.
              </p>

              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                I love bridging engineering fundamentals with front-end aesthetics to build software that is both robust and enjoyable to use.
              </p>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              
              <div className="glass-card rounded-2xl p-6 flex flex-col justify-between text-left group">
                <span className="text-2xl mb-2">💻</span>
                <div>
                  <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-400">
                    3
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Featured Projects
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 flex flex-col justify-between text-left group">
                <span className="text-2xl mb-2">⚡</span>
                <div>
                  <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-400">
                    9+
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Technologies
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 flex flex-col justify-between text-left group">
                <span className="text-2xl mb-2">📜</span>
                <div>
                  <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400">
                    3
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Certifications
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 flex flex-col justify-between text-left group">
                <span className="text-2xl mb-2">🎓</span>
                <div>
                  <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-400">
                    2029
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Graduation Year
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl text-slate-900 dark:text-white">
            Technologies I Work With
          </h2>
          <div className="mt-1.5 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"></div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`group glass-card rounded-2xl p-6 text-left relative overflow-hidden transition-all duration-300`}
              >
                {/* Background tint on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}></div>
                
                <div className="relative z-10">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-xl">
                    {skill.icon}
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:scale-[1.01] transition-transform">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {skill.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="relative z-10 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl text-slate-900 dark:text-white">
            Things I've Built
          </h2>
          <div className="mt-1.5 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"></div>

          <p className="mt-4 max-w-2xl text-slate-500 dark:text-slate-400 text-left">
            A handpicked list of frontend designs, utilities, and programming applications built as practical milestones.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2 justify-start">
            {["All", "Web", "Programming"].map((filter) => (
              <button
                key={filter}
                onClick={() => setProjectFilter(filter)}
                className={`rounded-full px-5 py-2 text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                  projectFilter === filter
                    ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/10 scale-102"
                    : "border border-slate-200/60 dark:border-slate-800 bg-white/20 dark:bg-slate-950/20 text-slate-600 dark:text-slate-400 hover:border-cyan-400 dark:hover:border-cyan-400"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="group glass-card rounded-2xl p-6 flex flex-col justify-between text-left h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-500 dark:text-cyan-400 bg-cyan-500/5 px-2.5 py-1 rounded-full border border-cyan-500/10">
                      {project.category}
                    </span>
                    <span className="text-lg text-slate-400 transition-colors group-hover:text-cyan-400">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-800 dark:text-slate-200">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-200/50 dark:border-slate-800/50 bg-slate-100/50 dark:bg-slate-900/40 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600 dark:text-slate-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <div className="mt-6">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white px-4 py-2.5 text-xs font-bold shadow-md hover:shadow-cyan-500/10 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        View Repository
                      </a>
                    ) : (
                      <span className="inline-flex w-full justify-center rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-2.5 text-xs font-bold text-slate-400 dark:text-slate-600 select-none bg-slate-50/20 dark:bg-slate-900/10">
                        Repo Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
            Education
          </p>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl text-slate-900 dark:text-white">
            Academic Journey
          </h2>
          <div className="mt-1.5 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"></div>

          <div className="mt-12 relative border-l-2 border-slate-200 dark:border-slate-800 pl-8 max-w-3xl text-left">
            <div className="relative glass-card rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300">
              
              {/* Outer pulsing glow marker */}
              <div className="absolute -left-[41px] top-8 h-4.5 w-4.5 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-slate-950 flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-extrabold text-cyan-500 dark:text-cyan-400 bg-cyan-500/5 px-2.5 py-1 rounded-full border border-cyan-500/10">
                  2025 — 2029
                </span>
                <span className="text-xs font-semibold text-slate-400">Expected Graduation</span>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-slate-800 dark:text-white">
                Bachelor of Technology
              </h3>
              
              <p className="text-sm font-bold text-slate-600 dark:text-slate-300 mt-1.5">
                KL University
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Focusing on core engineering principles, compiler architectures, algorithms analysis, object-oriented constructs, database normalization and modern web engineering applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section
        id="certifications"
        className="relative z-10 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
            Certifications
          </p>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl text-slate-900 dark:text-white">
            Learning Milestones
          </h2>
          <div className="mt-1.5 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"></div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="group glass-card rounded-2xl p-6 text-left hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-xl">
                  {cert.icon}
                </div>

                <h3 className="mt-5 text-base font-extrabold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-cyan-400 transition-colors">
                  {cert.name}
                </h3>

                <p className="mt-2 text-xs font-semibold text-slate-400">
                  {cert.provider}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GITHUB API SECTION ================= */}
      <div id="github" className="relative z-10">
        <GitHubProjects darkMode={darkMode} />
      </div>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          
          <div className="text-center flex flex-col items-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl text-slate-900 dark:text-white">
              Let's Connect
            </h2>
            <div className="mt-1.5 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"></div>

            <p className="mt-4 max-w-xl text-slate-500 dark:text-slate-400 text-sm">
              Have a proposal or want to work together? Feel free to drop a message or reach out on social channels.
            </p>
          </div>

          {/* Social Contact Grid */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            
            <a
              href={`mailto:${email}`}
              className="glass-card rounded-2xl p-6 text-center flex flex-col items-center hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl mb-3">✉️</div>
              <h3 className="font-extrabold text-slate-800 dark:text-slate-200 text-sm">Email</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 break-all select-all font-semibold">
                {email}
              </p>
            </a>

            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="glass-card rounded-2xl p-6 text-center flex flex-col items-center hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl mb-3">💻</div>
              <h3 className="font-extrabold text-slate-800 dark:text-slate-200 text-sm">GitHub</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                @chintharishithkumar
              </p>
            </a>

            <a
              href={linkedinProfile}
              target="_blank"
              rel="noreferrer"
              className="glass-card rounded-2xl p-6 text-center flex flex-col items-center hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl mb-3">💼</div>
              <h3 className="font-extrabold text-slate-800 dark:text-slate-200 text-sm">LinkedIn</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                Rishith Kumar Chintha
              </p>
            </a>

          </div>

          {/* Contact Input Form */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thanks! Your message has been submitted.");
            }}
            className="mx-auto mt-12 max-w-2xl space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm px-5 py-3.5 text-slate-800 dark:text-white outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors text-sm"
              />

              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm px-5 py-3.5 text-slate-800 dark:text-white outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors text-sm"
              />
            </div>

            <textarea
              required
              rows="5"
              placeholder="Your Message"
              className="w-full resize-none rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm px-5 py-3.5 text-slate-800 dark:text-white outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors text-sm"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white py-4 font-bold shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-slate-200/50 dark:border-slate-900 bg-slate-50/80 dark:bg-slate-950/60 backdrop-blur-sm px-6 py-12 text-left transition-colors duration-300">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-extrabold text-slate-800 dark:text-slate-200 text-base">
              CHINTHA RISHITH KUMAR
            </p>
            <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
              B.Tech Student @ KL University
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-slate-500 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={linkedinProfile}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-slate-500 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${email}`}
              className="text-xs font-semibold text-slate-500 hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-5xl mt-8 pt-8 border-t border-slate-200/40 dark:border-slate-900/60 text-left text-[11px] text-slate-500/80">
          &copy; 2026 CHINTHA RISHITH KUMAR. Hand-designed styling built with React and Tailwind CSS.
        </div>
      </footer>

    </div>
  );
}

export default App;