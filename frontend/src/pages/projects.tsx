import Head from "next/head";
import Navbar from "@/components/Navbar";

type LinkItem = { label: string; href: string };

type ProjectCardProps = {
  title: string;
  blurb: string;
  points?: string[];
  links?: LinkItem[];
};


function ProjectCard({ title, blurb, points = [], links = [] }: ProjectCardProps): JSX.Element {
  return (
    <article className="group rounded-2xl border p-6 transition hover:shadow-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="mt-2 text-gray-700">{blurb}</p>
      {points.length ? (
        <ul className="mt-3 list-disc list-inside text-sm text-gray-600">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      ) : null}
      {links.length ? (
        <div className="mt-4 space-y-2">
          {links.map((l) => (
            <div key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="block text-sm underline"
              >
                {l.label}
              </a>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function Projects(): JSX.Element {
  return (
    <>
      <Head>
        <title>Projects | Kaushik Ravi</title>
      </Head>
      <Navbar />
      <main className="px-6 md:px-10 lg:px-16">
        <section className="mx-auto max-w-6xl py-12">
          <h1 className="text-3xl md:text-4xl font-bold">Featured Projects</h1>
          <p className="mt-2 text-gray-600">A few end‑to‑end builds with clear goals, lean execution, and measurable impact.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Triance"
              blurb="Health & fitness tracking platform covering strength, mobility, and cardio."
              points={[
                "Created and drove the vision to help individuals track and improve physical health across strength, mobility, and cardio",
                "Designed and built the entire backend (FastAPI, SQLAlchemy, RDS) and frontend (React) from scratch, deployed to production on EC2 with Nginx",
                "Implemented secure user authentication, customizable exercises and workout creation and logging, dynamic editing, and categorized analytics",
                "Automated EC2-RDS snapshots and deployment, CloudWatch-based monitoring, and a operational dashboard to track deployment health and developer metrics"
              ]}
              links={[
                { label: "Live", href: "https://triance.app" },
                { label: "GitHub", href: "https://github.com/karavi1/Triance" },
              ]}
            />

            <ProjectCard
              title="Resonote"
              blurb="Reading, Reflection, and Knowledge Graph tool to help modularize and automate content consumption"
              points={[
                "Designed a full stack application and backend pipeline to streamline content overwhelm and promote retention through procedural reading, tagging, and reflection",
                "Built article ingestion pipelines for customizable sources such as Guardian/Reddit, with NLP-based tagging, clustering, and reflection prompting (Flask + MySQL + HuggingFace transformers).",
                "Focused on modularizing indexing, ingestion, curation and reflection for any general use",
                "Implemented a force-directed knowledge graph in React to visualize learning and knowledge areas"
              ]}
              links={[
                { label: "Live", href: "https://resonote-sable.vercel.app" },
                { label: "GitHub", href: "https://github.com/karavi1/Resonote" },
              ]}
            />

            <ProjectCard
              title="MathTutor"
              blurb="Adaptive Math Learning & Problem Generator Service "
              points={[
                "Developed a preliminary educational tool that classifies problem difficulty and generates custom practice questions using structured LLM prompts",
                "Designed problem routing logic and classification flow for adaptive practice. Working on leveraging this into a dynamic and complete curriculum generation",
                "Worked with another software developer/business owner to build the tool"
              ]}
              links={[{ label: "GitHub", href: "https://github.com/karavi1/mathtutor" }]}
            />
          </div>
        </section>
      </main>
    </>
  );
}