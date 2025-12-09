import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const capabilityCards = [
  {
    title: "Backend & APIs",
    copy:
      "FastAPI/Flask services, reliable data pipelines, and production-ready ML infrastructure with clear runbooks so teams can move fast and stay reliable.",
    tags: ["Python", "FastAPI", "SQL/NoSQL", "AWS", "CDK", "Docker"],
  },
  {
    title: "ML & AI Engineering",
    copy:
      "Structured prompting, evaluation, and data feedback loops for LLM features. Transparency over hype—features people can trust.",
    tags: ["LLM evals", "HuggingFace", "SageMaker", "Data pipelines", "Ops"],
  },
  {
    title: "Frontend Product",
    copy:
      "React/Next experiences that stay quick under load and communicate complex data clearly. Editor quality, collaboration flows, and clarity for real users.",
    tags: ["React", "TypeScript", "Tailwind", "UX flows", "Analytics", "Collaboration"],
  },
  {
    title: "Delivery & Ops",
    copy:
      "Owning roadmap, design docs, on-call, and automation so teams can ship faster and sleep better. Every build comes with instrumentation and documentation.",
    tags: ["System Design", "CI/CD", "Monitoring", "Runbooks", "Stakeholders", "DX"],
  },
];

const quickSkills = [
  {
    title: "Backend",
    body:
      "Python, Java, Ruby, TypeScript, SQL/NoSQL, FastAPI, Flask, Spring MVC, AWS (DynamoDB, S3, RDS, Step Functions, SageMaker), Git, Docker, Nginx",
  },
  {
    title: "Frontend",
    body: "React, TypeScript, HTML/CSS, Tailwind, Bootstrap",
  },
  {
    title: "Data, ML, AI",
    body: "System design, Reinforcement Learning, NLP (Transformers, HuggingFace), Statistical Analysis, ML pipelines",
  },
  {
    title: "DevOps & Delivery",
    body: "AWS EC2, GitHub Actions, CloudWatch, Secrets Manager, RDS snapshots, production monitoring & logging",
  },
  {
    title: "DX & Tooling",
    body: "TypeScript performance, linting/formatting, CI/CD, templates/CLI, dashboards, runbooks, experiments/analytics",
  },
];

const projectTeasers = [
  {
    title: "Triance",
    blurb:
      "Full-stack fitness platform with auth, workout builders, and automated ops. Built FastAPI + React, deployed on EC2 with automated backups and monitoring.",
    href: "/projects#triance",
    accent: "from-emerald-500/20 to-emerald-300/30",
  },
  {
    title: "Resonote",
    blurb:
      "Reading + reflection tool with ingestion pipelines, NLP tagging/clustering, and a force-directed knowledge graph.",
    href: "/projects#resonote",
    accent: "from-indigo-500/20 to-blue-400/30",
  },
  {
    title: "MathTutor",
    blurb:
      "Adaptive math practice engine with structured LLM prompts and routing to generate targeted exercises.",
    href: "/projects#mathtutor",
    accent: "from-amber-400/25 to-orange-300/30",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaushik Ravi | Full-Stack Developer</title>
        <meta
          name="description"
          content="Product-minded full-stack & AI engineer (ex-Amazon) building knowledge, learning, and collaboration tools with FastAPI, React, and ML pipelines."
        />
        <meta property="og:title" content="Kaushik Ravi | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Full-stack & AI engineer designing and shipping APIs, data/ML pipelines, and polished frontends for knowledge and learning tools."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />

      <main className="relative overflow-hidden bg-slate-50">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-white to-slate-50" />
        <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-56 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />

        <section className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-7">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
                  Kaushik Ravi
                  <span className="block bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                    Full-stack & AI engineer
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                  Product-focused developer (previous Amazon SDE II) focused on building knowledge and learning tools.
                  I design and ship APIs, data/ML pipelines, and thoughtful/elegant frontends end-to-end,
                  with a developer-growth experience mindset so teams stay fast and reliable.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
                >
                  View projects
                </Link>
                <a
                  href="mailto:kaush.ravi@gmail.com"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-md"
                >
                  Book a call
                </a>
                <p className="text-sm text-slate-500">kaush.ravi@gmail.com</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {["Full-stack systems", "ML infrastructure", "Data-driven UX"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-emerald-100 to-amber-50 blur-2xl" />
              <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-emerald-50">
                <div className="border-b border-slate-100 bg-slate-900 px-6 py-4 text-sm font-semibold text-white">
                  Where I can help fast
                </div>
                <div className="grid gap-0 border-t border-slate-100 bg-white/90 sm:grid-cols-2">
                  {capabilityCards.map((item) => (
                    <div key={item.title} className="flex flex-col gap-3 border-slate-100 px-6 py-5">
                      <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{item.copy}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold">
                01
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Latest Products</h2>
                <p className="text-sm text-slate-500">
                  Lean, production-focused projects I’ve shipped independently.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {projectTeasers.map((project) => (
                <Link
                  key={project.title}
                  href={project.href}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className={`absolute inset-0 -z-10 bg-gradient-to-br ${project.accent} opacity-60 transition group-hover:opacity-80`}
                  />
                  <div className="text-sm font-semibold text-emerald-700">Product</div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.blurb}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-700">
                    View details →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold">
                02
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Skills</h2>
                <p className="text-sm text-slate-500">Breadth across systems, data, and delivery.</p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {quickSkills.map((skill) => (
                <div
                  key={skill.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
                      {skill.title.slice(0, 2)}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{skill.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{skill.body}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-800">Why I build</p>
            <p className="mt-2 text-sm text-emerald-900">
              I care about tools that help people think for themselves—edtech, knowledge systems, and
              learning workflows that turn unorganized/overwhelming information into confident decisions. Every product I
              created aims to make thinking visible and organization effortlessm so people and businesses
              can grow faster. 
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
