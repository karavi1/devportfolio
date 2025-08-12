import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaushik Ravi | Full-Stack & ML Engineer</title>
        <meta
          name="description"
          content="Full-stack engineer specializing in FastAPI, React, and cloud deployments. Projects, experience, and AI tools by Kaushik Ravi."
        />
        <meta property="og:title" content="Kaushik Ravi | Full-Stack & ML Engineer" />
        <meta
          property="og:description"
          content="I build scalable APIs, data/ML pipelines, and polished web apps. Explore Triance, Resonote, and more."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />

      <main className="px-6 md:px-10 lg:px-16">
        {/* Hero */}
        <section className="mx-auto max-w-5xl py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            I build scalable APIs, data/ML pipelines, and fast web apps.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-600 leading-relaxed">
            I’m Kaushik — a full-stack engineer with a strong foundation in systems
            design, ML infrastructure, and product development. As an SDE II at Amazon,
            I implemented and scaled ML pipelines and high-traffic web features. Lately,
            I’ve been shipping full-stack products in health, education, and knowledge
            management, owning the full lifecycle from design to deployment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm border hover:shadow-md transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm border bg-black text-white hover:shadow-md transition"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Skills */}
        <section aria-labelledby="skills-heading" className="mx-auto max-w-5xl pb-8 md:pb-12">
          <h2 id="skills-heading" className="text-2xl md:text-3xl font-bold">
            Skills & Tools
          </h2>
          <p className="mt-2 text-gray-600">
            Practical, production-tested stack choices. Comfortable jumping across layers as needed.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold text-lg">Backend</h3>
              <ul className="mt-3 space-y-1 text-gray-700">
                <li>Python, Java, Ruby, TypeScript, SQL, Scala</li>
                <li>FastAPI, Flask, Spring (MVC)</li>
                <li>AWS: CDK, Lambda, API Gateway, DynamoDB, S3, RDS, Step Functions, SageMaker</li>
                <li>Git, Docker, CI/CD, Nginx</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold text-lg">Frontend</h3>
              <ul className="mt-3 space-y-1 text-gray-700">
                <li>React, Next.js, JavaScript/TypeScript</li>
                <li>HTML, CSS, Tailwind, Bootstrap</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold text-lg">Data, ML & AI</h3>
              <ul className="mt-3 space-y-1 text-gray-700">
                <li>System Design, Statistical Analysis</li>
                <li>NLP (Transformers, Hugging Face)</li>
                <li>SageMaker, ML pipelines & evaluation</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold text-lg">DevOps & Ops</h3>
              <ul className="mt-3 space-y-1 text-gray-700">
                <li>AWS EC2, GitHub Actions, CloudWatch, Secrets Manager</li>
                <li>RDS snapshots, production monitoring & logging</li>
                <li>Technical writing, product design, mentoring, cross-team collaboration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects anchor (fill with cards later) */}
        <section id="projects" aria-labelledby="projects-heading" className="mx-auto max-w-5xl py-12">
          <h2 id="projects-heading" className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
          <p className="mt-2 text-gray-600">
            A few end-to-end builds that reflect my approach: clear goals, lean execution, measurable impact.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Example placeholder card — replace with real project cards */}
            <article className="rounded-2xl border p-5">
              <h3 className="font-semibold text-lg">Triance</h3>
              <p className="mt-2 text-gray-700">
                Fitness tracking & education platform. FastAPI backend, React frontend, AWS deployment.
              </p>
              <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
                <li>Async SQLAlchemy, JWT auth</li>
                <li>EC2 + RDS + Nginx, CI/CD</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a href="https://triance.app" target="_blank" rel="noreferrer" className="text-sm underline">
                  Live
                </a>
                <a href="https://github.com/karavi1/Triance" target="_blank" rel="noreferrer" className="text-sm underline">
                  GitHub
                </a>
              </div>
            </article>

            <article className="rounded-2xl border p-5">
              <h3 className="font-semibold text-lg">Resonote</h3>
              <p className="mt-2 text-gray-700">
                Reading & reflection tool with curation and knowledge graph indexing.
              </p>
              <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
                <li>Flask + React (Vite)</li>
                <li>Tag-based indexing, graph visualization</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a href="https://github.com/karavi1/Resonote" target="_blank" rel="noreferrer" className="text-sm underline">
                  GitHub
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-heading" className="mx-auto max-w-5xl py-12">
          <h2 id="contact-heading" className="text-2xl md:text-3xl font-bold">Get in Touch</h2>
          <p className="mt-2 text-gray-600">
            Open to short-term contracts and collaborations. Prefer projects with clear scope and fast iteration.
          </p>
          <div className="mt-4">
            <a
              href="mailto:kaush.ravi@gmail.com"
              className="inline-block rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm border hover:shadow-md transition"
            >
              kaush.ravi@gmail.com
            </a>
          </div>
        </section>

        <footer className="mx-auto max-w-5xl py-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Kaushik Ravi
        </footer>
      </main>
    </>
  );
}
