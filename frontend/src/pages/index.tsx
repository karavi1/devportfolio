import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function Home(): JSX.Element {
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

      <main className="flex flex-col items-center justify-center px-6 md:px-10 lg:px-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section className="text-center py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Building Scalable APIs, Data Pipelines & Fast Web Apps
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I’m Kaushik — a full-stack engineer with a strong foundation in systems
            design, ML infrastructure, and product development. I’ve shipped products
            from concept to launch in health, education, and knowledge management.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/projects"
              className="rounded-2xl px-6 py-3 text-base font-semibold shadow-sm border hover:shadow-md transition bg-white"
            >
              View Projects
            </a>
            <a
              href="/experience"
              className="rounded-2xl px-6 py-3 text-base font-semibold shadow-sm border hover:shadow-md transition bg-white"
            >
              Work Experience
            </a>
            <a
              href="/contact"
              className="rounded-2xl px-6 py-3 text-base font-semibold shadow-sm border bg-black text-white hover:shadow-md transition"
            >
              Contact Me
            </a>
          </div>
        </section>
      </main>
    </>
  );
}