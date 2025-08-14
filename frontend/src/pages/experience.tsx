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

function Pill({ children }: PropsWithChildren): JSX.Element {
  return <span className="inline-block rounded-full border px-3 py-1 text-xs font-medium text-gray-700">{children}</span>;
}

function Bullet({ children }: { children: ReactNode }): JSX.Element {
  return <li className="pl-2 leading-relaxed text-gray-700">{children}</li>;
}

function ExperienceCard({ role, company, location, dates, pills = [], bullets = [] }: ExperienceCardProps): JSX.Element {
  return (
    <article className="rounded-2xl border p-6 transition hover:shadow-md">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold">{role}</h3>
        <span className="text-sm text-gray-500">{dates}</span>
      </header>
      <p className="mt-1 text-gray-700">
        <span className="font-medium">{company}</span>
        {location ? <span className="text-gray-500"> • {location}</span> : null}
      </p>
      {pills.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {pills.map((p) => (
            <Pill key={p}>{p}</Pill>
          ))}
        </div>
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

export default function Experience(): JSX.Element {
  return (
    <>
      <Head>
        <title>Experience | Kaushik Ravi</title>
      </Head>
      <Navbar />
      <main className="px-6 md:px-10 lg:px-16">
        <section className="mx-auto max-w-6xl py-12">
          <h1 className="text-3xl md:text-4xl font-bold">Work Experience</h1>
          <div className="mt-6 grid gap-6">
            <ExperienceCard
              role="Software Development Engineer II"
              company="Amazon"
              location="(Global Retail)"
              dates="Sep 2020 – Jun 2024"
              pills={["ML Infrastructure", "APIs & Services", "Global Scale"]}
              bullets={[
                "Built ML infrastructure aggregating models into global datasets; improved CTA for replenishable products by up to 12%.",
                "Maintained APIs/services for high-traffic widgets (Dash Buttons, Your Essentials, Purchase Reminders, Past Order Information), doubling reorder rates worldwide.",
                "Led a 9‑month migration of a high‑revenue widget (>$1M) from design to launch, onboarding to a functional internal backend language.",
                "Reduced pipeline setup time by 70% with reusable AWS CDK constructs; cut failures up to 35% with CloudWatch dashboards and better alerting.",
                "Authored/reviewed 7+ technical designs; bi‑monthly on‑call; mentored junior devs; instituted SOPs/runbooks lowering tickets by ~50%.",
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
                "Prototyped MathTutor’s adaptive practice engine with structured LLM prompts.",
              ]}
            />
          </div>
        </section>
      </main>
    </>
  );
}