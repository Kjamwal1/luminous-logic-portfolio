import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Download, Linkedin, Mail, MapPin } from "lucide-react";
import portrait from "../assets/kanika-jamwal-portrait.png.asset.json";
import resume from "../assets/kanika-jamwal-resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanika Jamwal — Web Developer & Product Designer" },
      { name: "description", content: "Portfolio of Kanika Jamwal, a web developer and product designer building responsive products and intelligent computer vision experiences." },
      { property: "og:title", content: "Kanika Jamwal — Web Developer & Product Designer" },
      { property: "og:description", content: "Selected web, AI, and computer vision work by Kanika Jamwal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    number: "01",
    title: "CareerHub",
    type: "AI product · Web development",
    description: "An AI-powered career platform bringing resume analysis, LinkedIn optimization, job tracking, and intelligent mentorship into one focused workflow.",
    stack: ["React", "Gemini API", "Responsive UX"],
    visual: "career",
  },
  {
    number: "02",
    title: "Human Detection System",
    type: "Computer vision · Drone intelligence",
    description: "A real-time OpenCV pipeline that detects people in drone-captured video, optimized for accurate and responsive aerial analysis.",
    stack: ["Python", "OpenCV", "Machine Learning"],
    visual: "vision",
  },
  {
    number: "03",
    title: "Plantly",
    type: "Product design · Full-stack web",
    description: "A location-based nursery discovery platform with intuitive listing management, map-led exploration, and mobile-first product flows.",
    stack: ["React", "Node.js", "MongoDB", "Maps API"],
    visual: "plantly",
  },
  {
    number: "04",
    title: "Sign Language Translator",
    type: "Accessibility · Computer vision",
    description: "A live gesture recognition system that translates sign language into text and speech for more accessible communication.",
    stack: ["Python", "OpenCV", "ML"],
    visual: "sign",
  },
];

const experience = [
  { date: "Jun — Aug 2026", role: "Computer Vision Intern", place: "NextFlyt Aerospace", detail: "Built and optimized real-time human detection workflows for drone video." },
  { date: "Mar — Jun 2026", role: "Machine Learning Intern", place: "Graphic Era University", detail: "Prepared real-world data and developed evaluated Scikit-learn models." },
  { date: "May — Jul 2025", role: "AI & ML Intern", place: "Graphic Era University", detail: "Designed and developed CareerHub's AI-powered, responsive career workflows." },
];

function Portfolio() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="site-grid" aria-hidden="true" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
          <a href="#top" className="group flex items-center gap-3 font-display text-lg font-semibold">
            <span className="flex size-9 items-center justify-center border border-primary text-xs text-primary transition-transform group-hover:rotate-12">KJ</span>
            <span className="hidden sm:inline">Kanika Jamwal</span>
          </a>
          <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground md:flex">
            <a className="nav-link" href="#work">Work</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#about">About</a>
          </div>
          <a href="mailto:jamwalkanikaofficial07@gmail.com" className="button-link">Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[94vh] max-w-7xl items-center gap-10 px-5 pb-14 pt-28 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[.24em] text-primary">
            <span className="status-dot" /> Available for opportunities
          </div>
          <h1 className="font-display text-[clamp(3.7rem,8.5vw,8rem)] font-semibold leading-[.84]">
            Building ideas<br />into <span className="text-outline">impact.</span>
          </h1>
          <div className="mt-10 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              I’m <strong className="font-medium text-foreground">Kanika Jamwal</strong> — a web developer and product designer crafting responsive digital products, intelligent AI tools, and human-centered experiences.
            </p>
            <a href="#work" aria-label="Explore selected work" className="scroll-button"><ArrowDown size={21} /></a>
          </div>
        </div>

        <div className="portrait-stage">
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <div className="portrait-frame">
            <img src={portrait.url} alt="Kanika Jamwal speaking at a podium" className="h-full w-full object-cover object-[52%_center] grayscale-[15%]" />
            <div className="portrait-shade" />
            <div className="absolute bottom-5 left-5 right-5 flex justify-between border-t border-foreground/25 pt-4 text-[10px] font-semibold uppercase tracking-[.18em] text-foreground">
              <span>Developer</span><span>Designer</span><span>AI Builder</span>
            </div>
          </div>
          <div className="floating-code code-a">&lt;creative /&gt;</div>
          <div className="floating-code code-b">01 — 3D</div>
        </div>
      </section>

      <div className="border-y border-border bg-surface py-4">
        <div className="marquee-track font-display text-sm font-semibold uppercase tracking-[.18em] text-muted-foreground">
          <span>React.js</span><i /> <span>Product Design</span><i /> <span>Computer Vision</span><i /> <span>AI & Machine Learning</span><i /> <span>Figma</span><i /> <span>Responsive Development</span><i />
        </div>
      </div>

      <section id="work" className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-40">
        <SectionHeading label="Selected work" number="01" title={<>Projects with<br /><span className="text-primary">purpose.</span></>} />
        <div className="mt-16 divide-y divide-border border-y border-border">
          {projects.map((project) => <ProjectRow key={project.number} {...project} />)}
        </div>
      </section>

      <section id="experience" className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-28 lg:grid-cols-[.72fr_1.28fr] lg:px-8 lg:py-40">
          <div>
            <p className="section-label">02 / Experience</p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-none sm:text-6xl">Learning by<br /><span className="text-primary">building.</span></h2>
            <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">From AI research to aerial computer vision, every role has strengthened how I turn technical possibilities into useful products.</p>
          </div>
          <div className="divide-y divide-border border-t border-border">
            {experience.map((item, index) => (
              <article key={item.role} className="experience-row grid gap-4 py-8 sm:grid-cols-[9rem_1fr]">
                <p className="font-mono text-xs text-primary">{item.date}</p>
                <div><p className="mb-1 text-xs uppercase tracking-[.16em] text-muted-foreground">{item.place}</p><h3 className="font-display text-2xl font-semibold">{item.role}</h3><p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">{item.detail}</p></div>
                <span className="experience-number">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-40">
        <SectionHeading label="About & toolkit" number="03" title={<>Logic meets<br /><span className="text-outline">imagination.</span></>} />
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div className="border-l border-primary pl-6 sm:pl-10">
            <p className="max-w-3xl font-display text-2xl leading-relaxed sm:text-4xl">A Computer Science undergraduate who cares equally about clean code, thoughtful interfaces, and technology that solves a real human problem.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              {["React.js", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Python", "OpenCV", "Figma", "Gemini API", "REST APIs", "Firebase"].map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
            </div>
          </div>
          <div className="space-y-4">
            <InfoPanel title="Education" body="B.Tech. Computer Science · GPA 8.3" meta="PIET · 2023—2027" />
            <InfoPanel title="Recognition" body="Internal Smart India Hackathon Winner" meta="AICTE Merit Scholarship" />
            <InfoPanel title="Certification" body="Building LLM Applications" meta="NVIDIA · Prompt Engineering" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface px-5 pb-8 pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">Have an idea?</p>
          <a href="mailto:jamwalkanikaofficial07@gmail.com" className="footer-cta group mt-5 flex items-end justify-between border-b border-border pb-10 font-display font-semibold">
            <span>Let’s create.</span><ArrowUpRight className="mb-2 shrink-0 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2" />
          </a>
          <div className="mt-10 flex flex-col gap-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-5">
              <a className="footer-link" href="mailto:jamwalkanikaofficial07@gmail.com"><Mail size={15} /> Email</a>
              <a className="footer-link" href="https://linkedin.com/in/kanika-jamwal1" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
              <a className="footer-link" href={resume.url} download><Download size={15} /> Résumé</a>
            </div>
            <p className="flex items-center gap-2"><MapPin size={14} /> Jammu & Kashmir, India</p>
          </div>
          <p className="mt-16 text-[10px] uppercase tracking-[.18em] text-muted-foreground">© 2026 Kanika Jamwal · Designed with curiosity</p>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({ label, number, title }: { label: string; number: string; title: React.ReactNode }) {
  return <div className="grid gap-5 sm:grid-cols-[10rem_1fr]"><p className="section-label">{number} / {label}</p><h2 className="font-display text-5xl font-semibold leading-[.95] sm:text-7xl">{title}</h2></div>;
}

function ProjectRow({ number, title, type, description, stack, visual }: (typeof projects)[number]) {
  return (
    <article className="project-row group grid gap-6 py-8 lg:grid-cols-[5rem_1fr_1fr_.75fr] lg:items-center">
      <span className="font-mono text-xs text-primary">{number}</span>
      <div><p className="mb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-muted-foreground">{type}</p><h3 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h3></div>
      <p className="max-w-lg leading-relaxed text-muted-foreground">{description}</p>
      <div className={`project-visual ${visual}`} aria-hidden="true"><div className="visual-core" /><div className="visual-ring" /><span>{stack[0]}</span></div>
      <div className="col-span-full flex flex-wrap gap-2 lg:pl-20">{stack.map((item) => <span className="project-tag" key={item}>{item}</span>)}</div>
    </article>
  );
}

function InfoPanel({ title, body, meta }: { title: string; body: string; meta: string }) {
  return <div className="info-panel"><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-primary">{title}</p><p className="mt-4 font-display text-xl font-semibold">{body}</p><p className="mt-1 text-sm text-muted-foreground">{meta}</p></div>;
}
