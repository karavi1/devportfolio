import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const principles = [
  {
    title: "Build to elevate people",
    body:
      "The best software reduces cognitive load and scales human expertise. I obsess over clarity, clean interfaces, and workflows that help people think and execute better.",
  },
  {
    title: "Own delivery end-to-end",
    body:
      "From design docs to on-call, I ship independently and keep stakeholders looped in with crisp updates, metrics, and tradeoffs.",
  },
  {
    title: "Bias for learning",
    body:
      "Each build tightens the feedback loop. I prefer shipping small, measuring impact, and iterating ruthlessly.",
  },
];

const focusAreas = [
  { label: "Systems & ML", value: "ML infra, APIs, data pipelines" },
  { label: "Product Craft", value: "Practical UX that communicates complexity" },
  { label: "Ops", value: "Runbooks, monitoring, resilient releases" },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Me | Kaushik Ravi</title>
        <meta name="description" content="About Kaushik Ravi – Developer Portfolio" />
      </Head>

      <Navbar />

      <main className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-emerald-50" />
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-32 space-y-14">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Profile</p>
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">About Me</h1>
            <p className="text-lg text-slate-600">
              Full-stack/AI engineer building learning, knowledge, and edtech tools to help society thrive
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">
            <div className="space-y-6">
              <div className="space-y-4 text-lg leading-relaxed text-slate-700">
                <p>
                  I joined Amazon as a new grad in 2020 to deepen my software fundamentals. Over
                  four years I delivered high-traffic retail experiences and ML infrastructure that
                  power worldwide recommendations—learning how to design systems, write design docs,
                  and execute with many stakeholders.
                </p>
                <p>
                  Along the way, I saw how fragmented tooling slows down teams who do high-stakes
                  work. My focus now is to continually build software that reduces cognitive load, strengthens
                  reflection, and helps humans operate with more insight. That’s where I create
                  value.
                </p>
                <p>
                  I care deeply about empowering people to think for themselves and want to achieve that through edtech,
                  knowledge management systems, and learning tools that make it easier to capture,
                  organize, and revisit ideas. Technology should encourage judgment and not replace it,
                  and I build with that core principle in mind.
                </p>
                <p>
                  I bring a developer-experience mindset to every project: clear design docs, linting
                  and CI/CD to stay fast, dashboards/alerts, and handoffs non-technical partners can
                  own. Prefer SF Bay Area roles with strong in-office collaboration.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {focusAreas.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-100 bg-white p-4 text-sm shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                      {item.label}
                    </p>
                    <p className="mt-1 text-slate-600">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-emerald-100 to-blue-50 blur-2xl" />
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-emerald-50">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                      Snapshot
                    </p>
                    <p className="text-sm text-slate-500">What drives my work</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Builder
                  </span>
                </div>
                <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                  <p>
                    I’m passionate about fitness, reading, and knowledge design. The products I build
                    reflect that: <strong>Triance</strong> for strength/mobility/cardio tracking,{" "}
                    <strong>Resonote</strong> for reading and reflection with NLP-powered knowledge
                    graphs, and <strong>MathTutor</strong> for adaptive problem solving with
                    structured LLM prompts.
                  </p>
                  <p>
                    These projects, along with my time at Amazon, cemented my belief that thoughtful
                    software can meaningfully empower people and businesses.
                  </p>
                  <p className="rounded-2xl bg-slate-50 p-3 text-slate-700">
                    If this resonates, let’s talk:{" "}
                    <a
                      href="mailto:kaush.ravi@gmail.com"
                      className="font-semibold text-emerald-700 underline decoration-emerald-200"
                    >
                      kaush.ravi@gmail.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">How I work</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{principle.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">What I’m learning right now</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-emerald-700">Expanding playbooks</p>
                <p className="mt-2 text-sm text-slate-600">
                  Faster delivery patterns for data-heavy dashboards, better prompting structures for
                  adaptive tutoring, and ways to make analytics more actionable for small teams.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-emerald-700">Collaboration</p>
                <p className="mt-2 text-sm text-slate-600">
                  I work best with founders and teams who value clear goals, autonomy, and honest
                  feedback loops. If that’s you, I’m excited to collaborate.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}
