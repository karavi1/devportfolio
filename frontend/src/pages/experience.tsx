import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Experience = {
  role: string;
  company: string;
  location?: string;
  dates: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

const experiences: Experience[] = [
  {
    role: "Software Development Consulting",
    company: "Independent",
    location: "Remote",
    dates: "Aug 2025 – Present",
    summary:
      "Partnering with business owners, artists, and non-technical teams on social impact products—from scoping to shipped features and runbooks.",
    highlights: [
      "Translate ideas into lean roadmaps and ship fast: APIs, dashboards, and data/ML flows that stay understandable for non-technical teams",
      "Coach founders and creatives on decision-making, analytics, and documentation so they can own their tools after launch",
      "Focus on social impact: education, knowledge workflows, and community tools that reduce cognitive load and encourage thinking",
      "Improve developer experience: templates, lint/CI tuning, and docs/runbooks so collaborators stay in flow",
    ],
    tags: ["Consulting", "Product Delivery", "Social Impact", "Full-stack", "Data/ML"],
  },
  {
    role: "Software Development Engineer II",
    company: "Amazon (Global Retail)",
    location: "Seattle, WA",
    dates: "Sep 2020 – Jun 2024",
    summary:
      "Owned ML infrastructure and APIs powering high-traffic retail widgets and global recommendation datasets.",
    highlights: [
      "Built and maintained ML infrastructure that aggregates upstream models into global datasets, which power catalog data for retail and third-party clients (e.g., Samsung). Models have improved recommendations (up to 12% in CTA) for replenishable products based on personalized purchase history versus static population trends",
      "Implemented and maintained APIs and backend services supporting high-traffic customer-facing widgets (Dash Buttons, Your Essentials, Purchase Reminders, and Past Order Information), doubling reorder rates of relevant products. These products have been productionized worldwide and serve every customer that uses Amazon.com (millions)",
      "Led a 9-month migration of a high-revenue widget ($1M+, since the widget is on a highly interactive Detail Page) from design to deployment, including onboarding and development in a functional internal backend language",
      "Delivered full-stack features across unfamiliar stacks in short and rapid timeframes (~2 weeks), prioritizing delivery and iteration",
      "Created reusable developer libraries with AWS CDK constructs to automate ML pipeline workflows and infrastructure provisioning, lowering setup time by 70%. Built CloudWatch alerting dashboards, reducing pipeline failures by up to 35% and improving triage speed",
      "Authored, reviewed, and executed 7+ technical designs, including new system designs, service migrations, widget experiments, and pipeline improvements, with a focus on purpose, technical architecture, operational maintenance, and milestone/timeline execution. These have been done both independently and with other developers",
      "Served as bi-monthly on-call, resolved production incidents within 1-2 days, and mentored 3 junior devs on system designs, code quality and deployment best practices, and cross-team collaboration",
      "Established runbooks, SOPs, monitoring, and automation to reduce operational overhead and ticket intake by 50%, allowing developers and team to focus on product roadmap execution",
      "Worked with other teams in Amazon both as a client and as a service. Consistently coordinated and aligned across 5+ stakeholders (dev teams, data scientists, QA, UX, product, business and leadership exec) to accommodate everyone’s needs in a timely fashion. Helped shape product direction through a developer-focused lens",
    ],
    tags: ["ML Infrastructure", "APIs", "AWS", "CDK", "Data Pipelines", "On-call"],
  },
  {
    role: "Independent Software Projects",
    company: "Triance • Resonote • MathTutor",
    location: "Remote",
    dates: "Dec 2024 – Present",
    summary:
      "Own product vision, system design, TDD, deployment, and maintenance across three apps focused on wellbeing and learning.",
    highlights: [
      "Productionized Triance (triance.app) with auth, workout builders, analytics, and automated ops on AWS",
      "Built Resonote ingestion + NLP tagging/clustering with a React knowledge graph to visualize reading/learning",
      "Prototyped MathTutor’s adaptive practice engine using structured LLM prompts and routing for targeted exercises",
      "Collaborate tightly with stakeholders, ship in short cycles, and keep delivery measurable with dashboards/metrics",
    ],
    tags: ["FastAPI", "Flask", "React", "AWS", "HuggingFace", "LLM prompts", "Ops"],
  },
  {
    role: "B.A. Computer Science & Statistics",
    company: "UC Berkeley",
    location: "Berkeley, CA",
    dates: "2016 – 2020",
    summary: "",
    highlights: [],
    tags: [],
  },
];

function ExperienceItem({ experience, isLast }: { experience: Experience; isLast?: boolean }) {
  const showDetails = experience.summary || experience.highlights.length || experience.tags.length;
  return (
    <div className="relative pl-10 md:pl-14">
      {!isLast && <div className="absolute left-4 top-8 h-full w-px bg-slate-200 md:left-6" />}
      <div className="absolute left-2 top-4 h-4 w-4 rounded-full border-4 border-white bg-emerald-500 shadow md:left-4" />

      <article className="mb-10 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              {experience.dates}
            </p>
            <h3 className="text-xl font-bold text-slate-900">{experience.role}</h3>
            <p className="text-sm font-semibold text-slate-600">
              {experience.company}
              {experience.location ? ` — ${experience.location}` : ""}
            </p>
          </div>
          {experience.tags[0] ? (
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {experience.tags[0]}
            </span>
          ) : null}
        </div>

        {experience.summary ? (
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{experience.summary}</p>
        ) : null}

        {experience.highlights.length ? (
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {experience.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {experience.tags.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </article>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience | Kaushik Ravi</title>
      </Head>
      <Navbar />

      <main className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-emerald-50" />
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-32">
          <div className="mb-10 space-y-3 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Journey
            </p>
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">Experience</h1>
          </div>

          <div className="relative">
            {experiences.map((experience, idx) => (
              <ExperienceItem
                key={experience.role}
                experience={experience}
                isLast={idx === experiences.length - 1}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
