import Image from "next/image";
import Link from "next/link";
import ActiveNav from "@/components/ActiveNav";
import BackToTop from "@/components/BackToTop";
import MobileNav from "@/components/MobileNav";
import GlowCard from "@/components/GlowCard";
import Reveal from "@/components/Reveal";
import ThemeToggle from "@/components/ThemeToggle";
import Typewriter from "@/components/Typewriter";

const CAREER_START_YEAR = 2022;
const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

const skills = {
  Frontend: ["React.js", "Next.js", "Vite.js", "TypeScript", "Tailwind CSS", "Material UI", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "Redis"],
  Web3: ["Web3.js", "Ethers.js", "Smart Contracts"],
  Tools: ["Git", "GitHub", "Docker", "Postman", "Swagger", "Orval", "VS Code"],
  Domain: [
    "Fintech Architecture",
    "Multi-Tenant Systems",
    "RBAC",
    "Financial Workflows",
    "Performance Optimization",
    "Secure API Integration",
  ],
};

const experience = [
  {
    period: "Jan 2025 — Present",
    company: "Mojo Verse LTD",
    location: "Lebanon",
    role: "Web Developer",
    bullets: [
      "Architect and lead frontend development for Mojo Fintech Wallet (Admin Backoffice & Agent Dashboards).",
      "Built a full Online Reconciliation Platform for financial record matching and discrepancy resolution.",
      "Developed a Multi-Tenant Payment Gateway Dashboard with tenant isolation and scalable architecture.",
      "Designed and implemented RBAC across multiple financial systems.",
      "Collaborated closely with backend and product teams to translate complex financial workflows into scalable UI systems.",
    ],
  },
  {
    period: "Jan 2022 — Jan 2025",
    company: "Cryptoware.me",
    location: "",
    role: "Web Developer",
    bullets: [
      "Led development of EVO Wallet Admin Dashboard for a fintech digital wallet platform.",
      "Built secure transaction ledger interfaces and settlement management tools.",
      "Developed applications using React, Next.js, Node.js, and TypeScript.",
      "Integrated Web3 technologies including wallet connectivity and smart contract interactions.",
      "Designed scalable component architecture and improved overall application performance.",
      "Implemented secure API integrations across financial workflows.",
    ],
  },
];

type Project = {
  name: string;
  description: string;
  tech: string[];
  links?: { label: string; url: string }[];
};

const projects: Project[] = [
  {
    name: "Mojo Fintech Wallet",
    description:
      "Admin Backoffice & Agent Dashboards for a digital wallet platform with RBAC and real-time transaction management.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    links: [{ label: "Website ↗", url: "https://mojo.com.lb/" }],
  },
  {
    name: "Online Reconciliation Platform",
    description:
      "Financial record matching and discrepancy resolution system used to reconcile high-volume transaction data.",
    tech: ["React", "TypeScript", "PostgreSQL"],
  },
  {
    name: "Multi-Tenant Payment Gateway",
    description:
      "Scalable payment gateway dashboard with full tenant isolation and configurable access policies.",
    tech: ["Next.js", "TypeScript", "RBAC", "REST APIs"],
  },
  {
    name: "EVO Wallet Admin Dashboard",
    description:
      "Secure transaction ledger and settlement management tools for a fintech digital wallet platform.",
    tech: ["React", "Next.js", "Node.js", "Web3.js"],
    links: [{ label: "Website ↗", url: "https://evowallet.net/" }],
  },
  {
    name: "OasisX",
    description:
      "NFT marketplace simplifying digital asset ownership for creators, brands, and artists.",
    tech: ["React.js", "Node.js", "Web3.js", "Ethers.js"],
  },
  {
    name: "Foothills",
    description:
      "Web application for a US-based facility management company — managing facilities, maintenance tasks, and partner coordination.",
    tech: ["React.js", "Node.js"],
    links: [{ label: "Website ↗", url: "https://foothillsms.com/" }],
  },
];

// Reusable class strings
const cardCls =
  "rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-accent/40 dark:bg-[#11121a] dark:border-white/5 dark:hover:border-accent/50 dark:shadow-none transition-all duration-200";

const chipCls =
  "text-xs px-2 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 dark:bg-white/5 dark:border-white/10 dark:text-slate-300";

const skillChipCls =
  "text-sm px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 dark:bg-white/5 dark:border-white/10 dark:text-slate-200";

const accentText = "text-cyan-700 dark:text-cyan-300";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-slate-50/80 dark:bg-[#0a0a0f]/80 border-b border-slate-200 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="#top"
            aria-label="Rami Metry — Home"
            className="inline-flex items-center text-slate-900 dark:text-slate-100 hover:text-accent dark:hover:text-accent transition-colors"
          >
            {/* Inline SVG so it inherits currentColor and adapts to light/dark */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 280 48"
              fill="none"
              className="h-7 w-auto"
              aria-hidden="true"
            >
              <text
                x="0"
                y="32"
                fontFamily="Inter, system-ui, sans-serif"
                fontSize="22"
                fontWeight="600"
                fill="currentColor"
                letterSpacing="4"
              >
                RAMI
              </text>
              <line
                x1="78"
                y1="14"
                x2="78"
                y2="34"
                stroke="currentColor"
                strokeWidth="1.2"
                opacity="0.4"
              />
              <text
                x="90"
                y="32"
                fontFamily="Inter, system-ui, sans-serif"
                fontSize="22"
                fontWeight="300"
                fill="currentColor"
                letterSpacing="4"
              >
                METRY
              </text>
            </svg>
          </Link>
          <div className="flex items-center gap-6">
            <ActiveNav />
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="max-w-5xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-[1fr_auto] gap-12 items-center"
      >
        <div className="relative z-10">
          <p
            className={`hero-entrance hero-entrance-1 text-sm uppercase tracking-widest mb-4 ${accentText}`}
          >
            <Typewriter />
          </p>
          <h1 className="hero-entrance hero-entrance-2 text-5xl sm:text-6xl font-bold leading-tight">
            Hi, I&apos;m <span className="gradient-text">Rami Metry</span>
          </h1>
          <p className="hero-entrance hero-entrance-3 mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            I build production-grade fintech platforms — digital wallets,
            reconciliation systems, and multi-tenant payment gateways — from
            architecture to deployment.
          </p>
          <div className="hero-entrance hero-entrance-4 mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-3 rounded-lg bg-accent hover:bg-accent/90 text-white font-medium transition-colors shadow-sm"
            >
              View My Work
            </a>
            <a
              href="/Rami_Metry_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white font-medium transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-lg border border-slate-300 dark:border-white/15 hover:border-accent dark:hover:border-accent font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hero-entrance hero-entrance-photo relative z-10 justify-self-center md:justify-self-end">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-accent to-cyan-500 blur-2xl opacity-30" />
          <Image
            src="/profile.jpg"
            alt="Rami Metry"
            width={220}
            height={220}
            priority
            className="relative rounded-full border-4 border-white dark:border-white/10 shadow-xl"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <Reveal>
          <div className="section-divider">
            <h2 className="text-3xl font-bold">About</h2>
          </div>
        </Reveal>
        <Reveal delay={100} className={`${cardCls} p-8`}>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Senior Web Developer with{" "}
            <strong className="text-slate-900 dark:text-white">
              {yearsOfExperience}+ years
            </strong>{" "}
            of experience designing and delivering production-grade fintech
            platforms, including digital wallets, reconciliation systems, and
            multi-tenant payment gateways. Proven ability to own complete web
            applications from architecture to deployment. Strong expertise in
            React, Next.js, Vite, Node.js, and TypeScript, with deep experience
            in financial dashboards, role-based access control (RBAC), real-time
            transaction systems, and scalable multi-tenant architectures.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-slate-500 dark:text-slate-500">Location</p>
              <p className="font-medium">Qattine, Lebanon</p>
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-500">Experience</p>
              <p className="font-medium">{yearsOfExperience}+ years</p>
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-500">Education</p>
              <p className="font-medium">BSc Computer Science</p>
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-500">Languages</p>
              <p className="font-medium">Arabic, English, French</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-16">
        <Reveal>
          <div className="section-divider">
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
        </Reveal>
        <div className="space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 120}>
              <GlowCard className={`${cardCls} p-6`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">
                    {job.role} · <span className={accentText}>{job.company}</span>
                  </h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside marker:text-accent">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <Reveal>
          <div className="section-divider">
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 80} className="flex">
              <GlowCard className={`${cardCls} p-6 flex flex-col w-full`}>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className={chipCls}>
                      {t}
                    </span>
                  ))}
                </div>
                {p.links && (
                  <div className="mt-4 flex flex-wrap gap-4 pt-4 border-t border-slate-200 dark:border-white/5">
                    {p.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm font-medium hover:text-accent transition-colors ${accentText}`}
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
        <Reveal>
          <div className="section-divider">
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(skills).map(([group, items], i) => (
            <Reveal key={group} delay={i * 80} className="flex">
              <GlowCard className={`${cardCls} p-6 w-full`}>
                <h3
                  className={`text-sm uppercase tracking-widest mb-4 ${accentText}`}
                >
                  {group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className={skillChipCls}>
                      {s}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
        <Reveal>
          <div className="section-divider">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>
        </Reveal>
        <Reveal delay={100} className={`${cardCls} p-8`}>
          <p className="text-slate-700 dark:text-slate-300">
            Open to senior frontend and fintech roles. Reach out and let&apos;s
            build something.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              {
                label: "Email",
                value: "ramimetry2018@gmail.com",
                href: "mailto:ramimetry2018@gmail.com",
              },
              {
                label: "Phone",
                value: "+961 71 935 698",
                href: "tel:+96171935698",
              },
              {
                label: "GitHub",
                value: "github.com/RamiMetry",
                href: "https://github.com/RamiMetry",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/rami-metry-",
                href: "https://www.linkedin.com/in/rami-metry-",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 transition-colors"
              >
                <span className={`text-sm ${accentText}`}>{c.label}</span>
                <span className="font-medium">{c.value}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-slate-200 dark:border-white/5 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-slate-500 dark:text-slate-500">
          <span>© {new Date().getFullYear()} Rami Metry. All rights reserved.</span>
        </div>
      </footer>

      <BackToTop />
    </main>
  );
}
