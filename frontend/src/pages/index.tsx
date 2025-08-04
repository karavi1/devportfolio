import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaushik Ravi | Developer Portfolio</title>
        <meta name="description" content="Projects, experience, and AI tools by Kaushik Ravi" />
      </Head>
      <Navbar />
      <main className="p-4">
        <h1 className="text-4xl font-bold">Welcome to my portfolio</h1>
        <p className="mt-2 text-lg">
          I’m Kaushik — I build tools that combine backend systems, agentic AI, and SEO-powered
          platforms.
        </p>
      </main>
    </>
  );
}