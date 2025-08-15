import Head from "next/head";
import Navbar from "@/components/Navbar";
import { PropsWithChildren, ReactNode } from "react";

type ExperienceCardProps = {
  role: string;
  company: string;
  location?: string;
  dates: string;
  pills?: string[];
  bullets?: string[];
};

function Bullet({ children }: { children: ReactNode }) {
  return <li className="pl-2 leading-relaxed text-slate-700">{children}</li>;
}

function ExperienceCard({
  role,
  company,
  location,
  dates,
  pills = [],
  bullets = [],
}: ExperienceCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-900">{role}</h3>
        <span className="text-sm text-slate-500">{dates}</span>
      </header>

      <p className="mt-1 text-slate-700">
        <span className="font-medium">{company}</span>
        {location ? <span className="text-slate-500"> • {location}</span> : null}
      </p>

      {pills.length ? (
        <p className="mt-3 text-sm text-slate-700">
          <span className="font-semibold text-blue-900">Key Learnings:</span>{" "}
          {pills.join(", ")}
        </p>
      ) : null}

      {bullets.length ? (
        <ul className="mt-4 space-y-2">
          {bullets.map((b, i) => (
            <Bullet key={i}>{b}</Bullet>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience | Kaushik Ravi</title>
      </Head>
      <Navbar />

      <main className="px-6 md:px-10 lg:px-16">
        <section className="mx-auto max-w-6xl py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Work Experience</h1>

          <div className="mt-6 grid gap-6">
            <ExperienceCard
              role="Software Development Engineer II"
              company="Amazon"
              location="(Global Retail)"
              dates="Sep 2020 – Jun 2024"
              pills={[
                "ML Infrastructure",
                "APIs & Services",
                "Global Scale"
              ]}
              bullets={[
                "Built and maintained ML infrastructure that aggregates upstream models into global datasets, which power catalog data for retail and third-party clients (e.g., Samsung). Models have improved recommendations (up to 12% in CTA) for replenishable products based on personalized purchase history versus static population trends",
                "Implemented and maintained APIs and backend services supporting high-traffic customer-facing widgets (Dash Buttons, Your Essentials, Purchase Reminders, and Past Order Information), doubling reorder rates of relevant products. These products have been productionized worldwide and serve every customer that uses Amazon.com (millions)",
                "Led a 9-month migration of a high-revenue widget ($1M+, since the widget is on a highly interactive Detail Page) from design to deployment, including onboarding and development in a functional internal backend language",
                "Delivered full-stack features across unfamiliar stacks in short and rapid timeframes (~2 weeks), prioritizing delivery and iteration",
                "Created reusable developer libraries with AWS CDK constructs to automate ML pipeline workflows and infrastructure provisioning, lowering setup time by 70%. Built CloudWatch alerting dashboards, reducing pipeline failures by up to 35% and improving triage speed",
                "Authored, reviewed, and executed 7+ technical designs, including new system designs, service migrations, widget experiments, and pipeline improvements, with a focus on purpose, technical architecture, operational maintenance, and milestone/timeline execution. These have been done both independently and with other developers",
                "Served as bi-monthly on-call, resolved production incidents within 1-2 days, and mentored 3 junior devs on system designs, code quality and deployment best practices, and cross-team collaboration",
                "Established runbooks, SOPs, monitoring, and automation to reduce operational overhead and ticket intake by 50%, allowing developers and team to focus on product roadmap execution",
                "Worked with other teams in Amazon both as a client and as a service. Consistently coordinated and aligned across 5+ stakeholders (dev teams, data scientists, QA, UX, product, business and leadership exec) to accommodate"
              ]}
            />

            <ExperienceCard
              role="Independent Software Projects"
              company="Triance • Resonote • MathTutor"
              location="(Owner/Builder)"
              dates="Dec 2024 – Present"
              pills={["FastAPI", "React", "AWS", "Data/ML"]}
              bullets={[
                "Own product vision, system design, TDD, deployment, and ongoing maintenance across three apps.",
                "Productionized Triance (triance.app) with auth, analytics, and automated ops.",
                "Built Resonote ingestion + NLP tagging/clustering and a React knowledge graph.",
                "Prototyped MathTutor’s adaptive practice engine with structured LLM prompts."
              ]}
            />
          </div>
        </section>
      </main>
    </>
  );
}