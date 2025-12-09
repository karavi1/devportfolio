import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LinkItem = { label: string; href: string };

type Project = {
  id: string;
  title: string;
  blurb: string;
  points: string[];
  tags: string[];
  links: LinkItem[];
  accent: string;
};

const projects: Project[] = [
  {
    id: "triance",
    title: "Triance",
    blurb: "Fitness platform covering strength, mobility, and cardio with analytics and automation.",
    points: [
      "Built FastAPI + SQLAlchemy backend, React frontend, deployed to production on EC2 with Nginx.",
      "Custom exercise/workout builders, secure auth, dynamic editing, and categorized analytics.",
      "Automated EC2/RDS snapshots, CloudWatch monitoring, and an operational dashboard.",
    ],
    tags: ["FastAPI", "React", "AWS", "Postgres", "Docker", "Analytics"],
    links: [
      { label: "Live", href: "https://triance.app" },
      { label: "GitHub", href: "https://github.com/karavi1/Triance" },
      { label: "Architecture", href: "/projects/triance/architecture" },
    ],
    accent: "from-emerald-400/25 via-emerald-200/25 to-emerald-100/25",
  },
  {
    id: "resonote",
    title: "Resonote",
    blurb: "Reading, reflection, and knowledge graph tool to modularize and automate content.",
    points: [
      "Built ingestion pipelines for custom sources (Guardian/Reddit), plus NLP tagging, clustering, and reflection prompting.",
      "Force-directed knowledge graph in React to surface relationships and retention.",
      "Designed the system to generalize indexing, ingestion, curation, and reflection workflows; focused on reducing cognitive load and improving recall.",
    ],
    tags: ["Flask", "MySQL", "HuggingFace", "React", "NLP", "Knowledge graphs"],
    links: [
      { label: "Live", href: "https://resonote-sable.vercel.app" },
      { label: "GitHub", href: "https://github.com/karavi1/Resonote" },
      { label: "Architecture", href: "/projects/resonote/architecture" },
    ],
    accent: "from-indigo-400/25 via-blue-300/25 to-cyan-200/20",
  },
  {
    id: "mathtutor",
    title: "MathTutor",
    blurb: "Adaptive math learning and problem generator that meets students where they are.",
    points: [
      "Classifies problem difficulty and generates practice via structured LLM prompts and evals/guardrails.",
      "Designed routing logic and classification flow for adaptive practice and feedback.",
      "Built alongside another engineer to explore dynamic curriculum generation.",
    ],
    tags: ["LLM prompts", "React", "APIs", "Education", "Evals"],
    links: [
      { label: "GitHub", href: "https://github.com/karavi1/mathtutor" },
      { label: "Architecture", href: "/projects/mathtutor/architecture" },
    ],
    accent: "from-amber-300/25 via-orange-200/25 to-yellow-200/20",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={project.id}
      className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${project.accent} opacity-80`}
      />
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Product
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">{project.blurb}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {project.points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
        {project.links.map((link) =>
          /^https?:\/\//i.test(link.href) ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
            >
              {link.label} →
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
            >
              {link.label} →
            </Link>
          ),
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Kaushik Ravi</title>
      </Head>
      <Navbar />
      <main className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-emerald-50" />
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-32 space-y-10">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Featured work
            </p>
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">Projects</h1>
            <p className="text-lg text-slate-600">
              A few end-to-end builds with clear goals, seamless execution, and high impact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-6 py-6 text-sm text-emerald-900 shadow-sm md:flex md:items-center md:justify-between">
            <div>
              Interested in a focused build or rapid prototype? I can jump in with clear scopes and
              weekly checkpoints.
            </div>
            <a
              href="mailto:kaush.ravi@gmail.com"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow md:mt-0"
            >
              Say hello
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
