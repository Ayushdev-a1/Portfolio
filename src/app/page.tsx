"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, Github, Linkedin, Menu, MoveUpRight, Send, X } from "lucide-react";
import { PortfolioWorld } from "@/components/portfolio-world";

const projects = [
  {
    number: "01", name: "Heritage Sparrow", kind: "E-commerce · Client work", className: "heritage",
    url: "https://www.heritagesparrow.com/", repo: "https://github.com/Ayushdev-a1",
    problem: "A heritage craft deserved a digital storefront with the same care as the product itself.",
    solution: "Built and deployed a premium jutti shopping experience, with product discovery, catalogue management, and a content system for the team.",
    outcome: "A live storefront that brings the collection, brand story, and buying journey together.",
    tags: ["Next.js", "TypeScript", "Commerce", "CMS", "Vercel"],
    bullets: ["Product catalogue and collection pages", "Admin dashboard and content management", "Checkout and payment integration"],
  },
  {
    number: "02", name: "Chez Harneet", kind: "EdTech · Freelance project", className: "chez",
    url: "https://chezharneet.com/", repo: "https://github.com/ChezHarneet/ChezHarneet_Frontend",
    problem: "TCF Canada learners need a clear way to move from course material into focused speaking and exam practice.",
    solution: "Developed a responsive learning preview with structured course content and practice-oriented flows, while shaping the product for future account and backend integration.",
    outcome: "A foundation for a more engaging, gamified learning experience. AI-supported practice and feedback remain a product direction to explore.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS", "Prisma", "PostgreSQL"],
    bullets: ["Structured courses and topic content", "Speaking activities and exam practice", "AI-assisted learning opportunities"],
  },
  {
    number: "03", name: "MV-LIVE", kind: "Real-time collaboration · Product build", className: "mvlive",
    url: "https://mv-live.vercel.app/", repo: "https://github.com/Ayushdev-a1/MV-LIVE",
    problem: "Watching a film together remotely often means losing the shared timing and conversation.",
    solution: "Built a watch-party experience around synchronized playback, room-based collaboration, and live communication using real-time web technologies.",
    outcome: "A deployed collaboration product with shared rooms and synchronous viewing flows.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "WebRTC"],
    bullets: ["Shared watch rooms and playback sync", "Real-time room events and chat", "WebRTC-based communication flows"],
  },
];

const technicalProjects = [
  {
    number: "04", name: "AI Personal Assistant", kind: "AI · Automation", metric: "~60%", metricLabel: "task-time reduction",
    summary: "An LLM-driven assistant for everyday tasks such as web search, file management, and scheduling.",
    bullets: ["Routed natural-language requests across 5+ action modules", "Implemented intent classification reported at 89% accuracy", "Added speech recognition and text-to-speech for voice interaction"],
    tags: ["Python", "NLP", "LLM APIs", "React.js", "scikit-learn"],
  },
  {
    number: "05", name: "Network Traffic Analyzer", kind: "Systems · Networking", metric: "1 Gbps", metricLabel: "packet capture throughput",
    summary: "A deep packet inspection system for observing traffic patterns across network protocols.",
    bullets: ["Extracted source and destination IPs, ports, protocols, and payloads", "Built a structured pipeline for packet processing and protocol analysis", "Designed for traffic pattern identification in distributed systems"],
    tags: ["Python", "C++", "TCP/IP", "Packet analysis"],
  },
];

const dataProjects = [
  {
    number: "01", name: "Stock Market Trend & Volatility Analysis", domain: "Markets · Risk analysis",
    summary: "Compared risk across 10 NSE large-cap stocks using five years of market data, technical indicators, and annualized volatility.",
    metrics: [{ value: "10", label: "NSE large-cap stocks" }, { value: "13,040", label: "daily records · 5 years" }, { value: "2×", label: "high-to-low volatility spread" }],
    bullets: ["Calculated RSI, Bollinger Bands, and annualized volatility to tier stock risk", "Compared COVID-crash and RBI rate-hike windows to examine sector-level drawdowns", "Designed conservative, balanced, and aggressive allocations using inverse-volatility weighting"],
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    number: "02", name: "Retail Sales & Profitability Analysis", domain: "Retail · Customer analytics",
    summary: "Analyzed 9,994 transactions to find margin pressure, customer drop-off, and regional revenue concentration.",
    metrics: [{ value: "₹40K", label: "recoverable revenue identified" }, { value: "78%", label: "first-purchase churn observed" }, { value: "9,994", label: "transactions analyzed" }],
    bullets: ["Isolated three negative-margin sub-categories through year-over-year analysis", "Built a cohort retention model and visualized monthly drop-off with a heatmap", "Delivered regional and segment-level findings in a five-sheet Excel report"],
    tags: ["Python", "Pandas", "Seaborn", "Cohort analysis", "Excel"],
  },
  {
    number: "03", name: "Financial Risk & Loan Default Dashboard", domain: "Finance · Credit risk",
    summary: "Explored loan records to identify default predictors and make risk segments easier to compare.",
    metrics: [{ value: "5,000", label: "loan records analyzed" }, { value: "68%", label: "defaults with DTI above 40%" }, { value: "3×", label: "risk-segment default rate vs average" }],
    bullets: ["Used SQL segmentation and window functions to inspect debt-to-income and credit-score patterns", "Identified a 55% default rate in the high-risk segment (DTI > 40% and credit score < 600)", "Summarized regional, employment, and credit-band trends in a dashboard and Excel report"],
    tags: ["Python", "Pandas", "SQLite", "Seaborn", "Excel"],
  },
];

const services = [
  ["01", "Full-stack product development", "From a first useful version to the foundations that can support the next one."],
  ["02", "Backend and API engineering", "Reliable services, clear data models, integrations, and APIs built for change."],
  ["03", "E-commerce experiences", "Storefronts, catalogues, checkout flows, and the tools teams use to run them."],
  ["04", "AI integration and automation", "Useful AI features and workflows connected to the product and the people using it."],
  ["05", "EdTech platforms", "Course structures, practice experiences, progress flows, and learning tools."],
  ["06", "Admin dashboards and CRM", "Purpose-built interfaces that make operational work easier to understand and manage."],
];

const stages = [
  ["01", "Discovery", "Understand the problem, the people, and the outcome the product needs to create."],
  ["02", "Planning", "Shape the architecture, choose the right tools, and make milestones concrete."],
  ["03", "Development", "Build the frontend, backend, and integrations in small, reviewable steps."],
  ["04", "Testing", "Check the real user flows, responsive behavior, and edge cases before release."],
  ["05", "Deployment", "Ship, observe how it behaves, and keep improving with the team."],
];

function SectionTitle({ label, title, copy }: { label: string; title: string; copy: string }) {
  return <div className="section-title"><span className="eyebrow">{label}</span><h2>{title}</h2><p>{copy}</p></div>;
}

function ProjectPreview({ project }: { project: (typeof projects)[number] }) {
  return <div className={`project-preview ${project.className}`}>
    <div className="preview-toolbar"><span className="preview-dots"><i/><i/><i/></span><span>{project.url.replace("https://", "").replace(/\/$/, "")}</span><a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight size={15}/></a></div>
    <iframe src={project.url} title={`${project.name} live product preview`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
    <a className="preview-open" href={project.url} target="_blank" rel="noopener noreferrer">Open live experience <MoveUpRight size={15}/></a>
    <span className="preview-index">{project.number} / 03</span>
  </div>;
}

function DataProjectCard({ project, reduceMotion }: { project: (typeof dataProjects)[number]; reduceMotion: boolean }) {
  return <motion.article className="data-project-card" initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .5 }}>
    <div className="data-project-top"><span>{project.number} <i>—</i> {project.domain}</span><span className="data-project-mark">DATA / ANALYSIS</span></div>
    <h3>{project.name}</h3><p className="data-project-summary">{project.summary}</p>
    <div className="data-project-metrics">{project.metrics.map((metric) => <div key={metric.label}><b>{metric.value}</b><span>{metric.label}</span></div>)}</div>
    <ul>{project.bullets.map((bullet) => <li key={bullet}><Check size={13}/>{bullet}</li>)}</ul>
    <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
  </motion.article>;
}

function TechnicalProjectCard({ project, reduceMotion }: { project: (typeof technicalProjects)[number]; reduceMotion: boolean }) {
  return <motion.article className="technical-project-card" initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .45 }}>
    <div className="technical-project-top"><span>{project.number} <i>—</i> {project.kind}</span><b>{project.metric}<small>{project.metricLabel}</small></b></div>
    <h3>{project.name}</h3><p>{project.summary}</p>
    <ul>{project.bullets.map((bullet) => <li key={bullet}><Check size={13}/>{bullet}</li>)}</ul>
    <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
  </motion.article>;
}

const technologyGroups = {
  Languages: [
    { name: "Python", detail: "Data analysis, automation, and systems projects." },
    { name: "SQL", detail: "Data exploration, segmentation, and relational queries." },
    { name: "C++", detail: "Systems and network traffic analysis." },
    { name: "Java", detail: "Programming language in my broader engineering toolkit." },
    { name: "JavaScript", detail: "Interactive browser experiences and Node.js applications." },
    { name: "TypeScript", detail: "Type-safe application code across web product builds." },
  ],
  Frontend: [
    { name: "React.js", detail: "Component-driven interfaces for web products." },
    { name: "Next.js", detail: "Production web apps, storefronts, and product experiences." },
    { name: "Tailwind CSS", detail: "Responsive UI styling for the Chez Harneet frontend." },
  ],
  "Data & Analytics": [
    { name: "Pandas", detail: "Cleaning, transforming, and analyzing structured datasets." },
    { name: "NumPy", detail: "Numerical computing for analytics and volatility analysis." },
    { name: "Matplotlib", detail: "Charts for exploratory analysis and reporting." },
    { name: "Seaborn", detail: "Statistical visualizations and analysis dashboards." },
    { name: "Excel", detail: "Multi-sheet business reports and analysis summaries." },
    { name: "SQLite", detail: "SQL analysis for the financial risk project." },
    { name: "ETL pipelines", detail: "Data pipeline design and transformation workflows." },
    { name: "Cohort analysis", detail: "Retention patterns and customer drop-off analysis." },
  ],
  "Backend & APIs": [
    { name: "Node.js", detail: "Server-side runtime for the MV-LIVE product." },
    { name: "Express.js", detail: "Backend APIs and server-side application work." },
    { name: "NestJS", detail: "Backend framework in the Chez Harneet project stack." },
    { name: "Django", detail: "Python backend framework in my engineering toolkit." },
    { name: "REST APIs", detail: "Service interfaces and product integrations." },
    { name: "Microservices", detail: "Service-oriented application architecture." },
    { name: "LLM APIs", detail: "Language model integrations for assistant workflows." },
    { name: "NLP", detail: "Intent classification and natural-language routing." },
    { name: "scikit-learn", detail: "Intent classification in the AI assistant project." },
    { name: "Socket.io", detail: "Live room events and synchronized product interactions." },
    { name: "WebRTC", detail: "Real-time communication flows in MV-LIVE." },
  ],
  Databases: [
    { name: "PostgreSQL", detail: "Relational database in the Chez Harneet project stack." },
    { name: "Prisma", detail: "Database toolkit in the Chez Harneet project stack." },
    { name: "MongoDB", detail: "Database in the MV-LIVE product stack." },
    { name: "MySQL", detail: "Relational database technology in my toolkit." },
    { name: "Redis", detail: "Data store technology for application systems." },
    { name: "SQLite", detail: "Relational storage for the financial risk analysis." },
    { name: "GridFS", detail: "MongoDB file storage used in the streaming project." },
  ],
  "Cloud & DevOps": [
    { name: "AWS", detail: "Cloud services including S3, ECS, Lambda, and CloudFront." },
    { name: "Azure", detail: "Cloud platform in my infrastructure toolkit." },
    { name: "Docker", detail: "Containerization for application development and deployment." },
    { name: "CI/CD", detail: "Automated build and delivery workflows." },
    { name: "Git", detail: "Version control throughout product development." },
    { name: "GitHub", detail: "Source code and project collaboration." },
    { name: "Vercel", detail: "Hosting and deployment for live web projects." },
  ],
  "Systems & Networking": [
    { name: "TCP/IP", detail: "Network protocols analyzed in the traffic analyzer." },
    { name: "Distributed systems", detail: "System design for multi-node applications." },
    { name: "Packet inspection", detail: "Traffic parsing and protocol-level analysis." },
    { name: "Real-time processing", detail: "Live data and event processing." },
  ],
} as const;
type TechnologyGroup = keyof typeof technologyGroups;

function TechStack() {
  const [group, setGroup] = useState<TechnologyGroup>("Languages");
  const [selectedName, setSelectedName] = useState<string>(technologyGroups.Languages[0].name);
  const items = technologyGroups[group];
  const selected = items.find((item) => item.name === selectedName) ?? items[0];

  return <div className="tech-stack">
    <div className="tech-stack-heading"><span>TECH STACK / INTERACTIVE INDEX</span><span>SELECT A CATEGORY</span></div>
    <div className="tech-filters" aria-label="Filter technologies by category">
      {(Object.keys(technologyGroups) as TechnologyGroup[]).map((name) => <button key={name} type="button" aria-pressed={group === name} className={group === name ? "is-active" : ""} onClick={() => { setGroup(name); setSelectedName(technologyGroups[name][0].name); }}>{name}</button>)}
    </div>
    <div className="tech-chips" aria-label={`${group} technologies`}>
      {items.map((item) => <button key={item.name} type="button" aria-pressed={selected.name === item.name} className={selected.name === item.name ? "is-active" : ""} onClick={() => setSelectedName(item.name)}>{item.name}<span>↗</span></button>)}
    </div>
    <p className="tech-detail" aria-live="polite"><b>{selected.name}</b><span>{selected.detail}</span></p>
  </div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workFilter, setWorkFilter] = useState<"All work" | "Software Engineering" | "Data & Analytics">("All work");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const sceneRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sceneRef.current) return;
    const layers = Array.from(sceneRef.current.querySelectorAll<HTMLElement>("[data-parallax]"));
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY, window.innerHeight * 1.15);
        layers.forEach((layer) => {
          const speed = Number(layer.dataset.parallax || 0);
          layer.style.setProperty("--parallax-y", `${offset * speed * -1}px`);
        });
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", update); };
  }, [reduceMotion]);

  async function submitBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true); setError(""); setSent(false);
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const message = [`Project type: ${data.projectType}`, data.budget ? `Budget: ${data.budget}` : "", "", data.description].filter(Boolean).join("\n");
    try {
      const response = await fetch("/api/send-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: data.name, email: data.email, message }) });
      if (!response.ok) throw new Error("Your message could not be sent. Please try again or email me directly.");
      setSent(true); form.reset();
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Please email me directly."); }
    finally { setSending(false); }
  }

  const links = [["Work", "#work"], ["Services", "#services"], ["About", "#about"], ["Process", "#process"]];

  return <main className="portfolio-world" ref={sceneRef}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Ayush Anand, home"><span className="brand-monogram">AA</span><span>Ayush Anand</span></a>
      <nav id="site-navigation" className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <a className="nav-contact" href="#contact">Have a project? <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-controls="site-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <section className="hero" id="top" aria-labelledby="hero-heading">
      <PortfolioWorld />
      <div className="hero-copy">
        <motion.p className="hero-kicker" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}><span/> Software + data <span className="kicker-divider">·</span> India</motion.p>
        <motion.h1 id="hero-heading" initial={reduceMotion ? false : { opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08 }}><span>Build.</span><span><em>Innovate.</em></span><span>Create impact.</span></motion.h1>
        <motion.p className="hero-description" initial={reduceMotion ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .18 }}>I build digital products—from EdTech and commerce experiences to scalable web applications and AI-powered tools.</motion.p>
        <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}><a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={16}/></a><a className="hero-about-link" href="#about">About me <ArrowUpRight size={15}/></a></motion.div>
      </div>
      <a className="scroll-cue" href="#intro"><span>Scroll to explore</span><ArrowDown size={15}/></a>
    </section>

    <div className="world-transition" id="intro"><p>A little less ordinary.<br/><em>A lot more intentional.</em></p><span className="transition-caption">Curiosity is the start of every good build.</span></div>

    <div className="page-content" id="main" tabIndex={-1}>
      <section className="intro section-shell"><div className="intro-marker"><span>THE PERSON BEHIND THE BUILD</span><i>✳</i></div><div><p className="intro-lead">Good software should feel <em>clear to use</em> and be <em>solid underneath.</em></p><p className="intro-copy">I’m Ayush Anand, a software engineer and data analyst in India. I build web products and use data to answer practical business questions—from real-time applications and AI tools to financial and retail analysis.</p><TechStack/></div></section>

      <section className="work section-shell" id="work">
        <div className="work-heading"><SectionTitle label="Selected client, product, and data work" title="Built for the real world." copy="Software engineering and data analysis, presented as two clear tracks."/><span className="work-stamp">A.A.<small>PRODUCT + DATA<br/>FIELD NOTES</small></span></div>
        <div className="work-filters" role="group" aria-label="Filter work by discipline">{(["All work", "Software Engineering", "Data & Analytics"] as const).map((filter) => <button key={filter} type="button" aria-pressed={workFilter === filter} className={workFilter === filter ? "is-active" : ""} onClick={() => setWorkFilter(filter)}>{filter}</button>)}</div>
        {workFilter !== "Data & Analytics" && <>
          <div className="work-track-label"><span>01 / SOFTWARE ENGINEERING</span><small>PRODUCTS · SYSTEMS · REAL-TIME</small></div>
          <div className="project-list">{projects.map((project, index) => <motion.article className={`project-story story-${project.className}`} key={project.name} initial={reduceMotion ? false : { opacity: 0, y: 38 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }} transition={{ duration: .65 }}>
            <div className="project-story-top"><span className="project-counter">{project.number} <i>—</i> {project.kind}</span><a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name}`}><ArrowUpRight size={19}/></a></div>
            <div className="project-story-grid">
              <div className="project-copy"><h3>{project.name}</h3><p className="project-problem">{project.problem}</p><div className="project-narrative"><div><span>THE BUILD</span><p>{project.solution}</p></div><div><span>WHAT IT ENABLES</span><p>{project.outcome}</p></div></div><ul className="project-points">{project.bullets.map((bullet) => <li key={bullet}><Check size={13}/>{bullet}</li>)}</ul><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-actions"><a className="text-action" href={project.url} target="_blank" rel="noopener noreferrer">Visit product <ArrowUpRight size={15}/></a><a className="text-action subtle" href={project.repo} target="_blank" rel="noopener noreferrer"><Github size={15}/> Code</a></div></div>
              <ProjectPreview project={project}/>
            </div>
            {index < projects.length - 1 && <div className="project-thread" aria-hidden="true"><span/></div>}
          </motion.article>)}</div>
          <div className="technical-projects-grid">{technicalProjects.map((project) => <TechnicalProjectCard key={project.name} project={project} reduceMotion={Boolean(reduceMotion)}/>)}</div>
        </>}
        {workFilter !== "Software Engineering" && <>
          <div className="work-track-label data-track-label"><span>02 / DATA & ANALYTICS</span><small>MARKETS · RETAIL · FINANCIAL RISK</small></div>
          <div className="data-project-list">{dataProjects.map((project) => <DataProjectCard key={project.name} project={project} reduceMotion={Boolean(reduceMotion)}/>)}</div>
        </>}
      </section>

      <section className="services section-shell" id="services"><div className="services-heading"><SectionTitle label="Ways I can help" title="From first sketch to first customer." copy="Flexible engineering support for teams building something new or making an existing product work better."/><span className="services-doodle" aria-hidden="true">✳</span></div><div className="service-list">{services.map(([number, title, copy]) => <motion.article key={number} className="service-row" initial={reduceMotion ? false : { opacity: 0, x: -18 }} whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .45 }}><span>{number}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight size={17}/></motion.article>)}</div><div className="service-footnote"><span>Good work starts with a good conversation.</span><a href="#contact">Tell me what you’re making <ArrowRight size={15}/></a></div></section>

      <section className="activity section-shell" id="activity" aria-labelledby="activity-title">
        <div className="activity-copy"><span className="activity-eyebrow"><i/> OPEN SOURCE / CONTRIBUTIONS</span><h2 id="activity-title">Small commits.<br/><em>Steady momentum.</em></h2><p>A snapshot of my public GitHub contributions over the past year.</p><a href="https://github.com/Ayushdev-a1" target="_blank" rel="noopener noreferrer">View GitHub profile <ArrowUpRight size={15}/></a></div>
        <div className="activity-panel"><div className="activity-panel-top"><span><i/> CONTRIBUTION LOG</span><span>LAST 12 MONTHS</span></div><div className="activity-chart-wrap"><Image src="https://ghchart.rshah.org/79b7a0/Ayushdev-a1" alt="GitHub contribution calendar for Ayushdev-a1" width={1000} height={260} unoptimized loading="lazy" className="activity-chart"/></div><div className="activity-legend"><span>LESS</span><i/><i/><i/><i/><i/><span>MORE</span><span className="activity-profile-link">DATA FROM GITHUB</span></div></div>
      </section>

      <section className="about section-shell" id="about"><div className="about-photo"><Image src="/Asset/ayush.jpg" alt="Ayush Anand" fill sizes="(max-width: 760px) 80vw, 420px" className="about-image"/><div className="photo-caption"><span>AYUSH ANAND</span><span>DEVELOPER · BUILDER · COLLABORATOR</span></div><div className="photo-orbit" aria-hidden="true">✳</div></div><div className="about-copy"><span className="eyebrow">A little about me</span><h2>Engineer by training.<br/><em>Builder by instinct.</em></h2><p>I graduated in Electronics and Communication Engineering from UIET, Panjab University in 2026. Since then, I’ve worked across freelance and startup projects—shipping web applications, backend systems, and product experiences that solve practical problems.</p><p>I’m especially interested in the space where thoughtful product design meets strong engineering: AI-enabled tools, dependable APIs, and the details that make software feel easy to use.</p><div className="about-facts"><div><span>EDUCATION</span><b>B.E. · Electronics & Communication</b><small>UIET, Panjab University · 2026</small></div><div><span>FOCUS</span><b>Full-stack product engineering</b><small>Backend · AI · Product systems</small></div></div><div className="about-signoff">Curious about what you’re building. <i>— Ayush</i></div></div></section>

      <section className="process section-shell" id="process"><div className="process-intro"><SectionTitle label="How an idea becomes a product" title="A good process leaves room for good surprises." copy="A clear path from the first conversation to something people can use."/><p className="process-aside">Small steps. Frequent feedback.<br/>Useful software at every stage.</p></div><div className="process-map"><svg className="process-river" viewBox="0 0 1200 180" preserveAspectRatio="none" aria-hidden="true"><path d="M0 105C130 30 190 155 325 82S525 30 610 102s178 72 260 0 230-78 330-14" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="7 10"/></svg>{stages.map(([number, title, copy], index) => <motion.article className="process-stage" key={number} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .6 }} transition={{ delay: index * .08, duration: .4 }}><span className="stage-number">{number}</span><span className="stage-dot"/><h3>{title}</h3><p>{copy}</p></motion.article>)}</div></section>

      <section className="contact" id="contact"><div className="contact-sunset" aria-hidden="true"><div className="sunset-sun"/><div className="sunset-ridge ridge-back"/><div className="sunset-ridge ridge-front"/><div className="contact-tree"/></div><div className="contact-inner section-shell"><div className="contact-copy"><span className="eyebrow">The next good thing starts here</span><h2>Have an idea?<br/><em>Let’s build something great together.</em></h2><p>Tell me a little about the product, the problem, or the part you’re trying to figure out. I’ll get back to you with a good next step.</p><a className="contact-email" href="mailto:anandayush865@gmail.com">anandayush865@gmail.com <ArrowUpRight size={16}/></a><div className="social-links"><a href="https://www.linkedin.com/in/ayush-anand-566a3622b/" target="_blank" rel="noopener noreferrer"><Linkedin size={15}/> LinkedIn</a><a href="https://github.com/Ayushdev-a1" target="_blank" rel="noopener noreferrer"><Github size={15}/> GitHub</a></div></div>
        <form className="contact-form" onSubmit={submitBrief}><div className="form-heading"><span>PROJECT INQUIRY</span><i>✳</i></div><div className="form-row"><label>Name<input name="name" autoComplete="name" required placeholder="Your name"/></label><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com"/></label></div><label>Project type<select name="projectType" required defaultValue=""><option value="" disabled>Select what you’re building</option>{["Full-stack product", "Backend / API", "E-commerce", "AI integration", "EdTech", "Dashboard / CRM", "Something else"].map((item) => <option key={item}>{item}</option>)}</select></label><label>Budget <span className="optional-label">optional</span><select name="budget" defaultValue=""><option value="">Not sure yet</option><option>Under ₹50,000</option><option>₹50,000–₹2,00,000</option><option>₹2,00,000–₹5,00,000</option><option>₹5,00,000+</option><option>Prefer to discuss</option></select></label><label>Project description<textarea name="description" rows={4} required placeholder="What are you hoping to build?"/></label><button className="button button-paper" disabled={sending}>{sending ? "Sending…" : sent ? <>Message sent <Check size={15}/></> : <>Send inquiry <Send size={15}/></>}</button>{sent && <p className="form-feedback success" role="status">Thanks for reaching out. I’ll be in touch soon.</p>}{error && <p className="form-feedback error" role="alert">{error}</p>}</form>
      </div><div className="contact-footer section-shell"><a className="brand footer-brand" href="#top"><span className="brand-monogram">AA</span><span>Ayush Anand</span></a><span>Made with care, in India <i>✳</i></span><span>© {new Date().getFullYear()} Ayush Anand</span></div></section>
    </div>
  </main>;
}
