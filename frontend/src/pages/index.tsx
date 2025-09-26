import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaushik Ravi | Full-Stack Developer</title>
        <meta
          name="description"
          content="Full-stack developer and consultant specializing in FastAPI, React, cloud deployments, and ML pipelines. Available for freelance or consulting projects."
        />
        <meta property="og:title" content="Kaushik Ravi | Full-Stack Developer" />
        <meta
          property="og:description"
          content="I provide scalable API development, data/ML pipelines, and polished web apps. Available as a freelancer or consultant for your project needs."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-blue-50" />

        <section className="mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Full-Stack Developer & Consultant
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            I’m Kaushik Ravi — a full-stack software engineer with a strong foundation in systems design and ML infrastructure.
            Previously SDE II at Amazon and solo-developed full-stack projects that you can peruse through in the Projects section above.
            Now helping startups, teams, and business owners create and deliver meaningful and impactful products end-to-end.
            Available for freelance and consulting opportunities.
          </p>

          <p className="mt-4 text-gray-700">Here are some of the skills I bring to the table:</p>

          <ul className="mt-14 flex flex-col items-start gap-4 text-sm text-gray-700">
            <li className="w-full max-w-4xl">
              <strong className="font-bold text-blue-900 mr-1">Backend:</strong>
              Python, Java, Ruby, TypeScript, SQL, Scala, FastAPI, Flask, Spring MVC, CDK, AWS DynamoDB, AWS S3, AWS Step Functions, AWS RDS, AWS State Machines, AWS SageMaker, Git, Docker, CI/CD, Nginx
            </li>

            <li className="w-full max-w-4xl">
              <strong className="font-bold text-blue-900 mr-1">Frontend:</strong>
              React, JavaScript, TypeScript, HTML, CSS, Tailwind, Bootstrap
            </li>

            <li className="w-full max-w-4xl">
              <strong className="font-bold text-blue-900 mr-1">Data, Machine Learning, and AI:</strong>
              System Design, Reinforcement Learning, NLP (Transformers, HuggingFace), Statistical Analysis, AWS SageMaker, ML Pipelines
            </li>

            <li className="w-full max-w-4xl">
              <strong className="font-bold text-blue-900 mr-1">DevOps, Monitoring and Deployment:</strong>
              AWS EC2, GitHub Actions, CloudWatch, Secrets Manager, RDS Snapshots, Docker, Production Monitoring & Logging
            </li>

            <li className="w-full max-w-4xl">
              <strong className="font-bold text-blue-900 mr-1">Misc:</strong>
              Technical Writing, Product Design, Developer Mentoring, Cross-Team Collaboration
            </li>
          </ul>

          <div className="mt-12 grid w-full max-w-md gap-4">
            {/* <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
              aria-label="Contact Kaushik"
            >
              Contact Me
            </Link> */}
            Contact me at kaush.ravi@gmail.com!
          </div>
        </section>
      </main>
    </>
  );
}