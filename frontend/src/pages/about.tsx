import Head from "next/head";
import type { NextPage } from "next";
import Navbar from "@/components/Navbar";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Me | Kaushik Ravi</title>
        <meta name="description" content="About Kaushik Ravi – Developer Portfolio" />
      </Head>

      <Navbar />

      <main className="max-w-3xl mx-auto p-6 prose prose-lg">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <p>
          Back in Fall 2020, I had joined Amazon, as a new graduate, to gain experience in software
          development in the big tech industry, since my internship experience in college felt
          insubstantial. Working at Amazon, I have developed full-stack features and ML
          infrastructure to scale and facilitate the consumer experience, by reducing their
          cognitive load in replenishing their everyday essentials, such as toothpaste, soap, paper
          towels, etc. I have learned countless lessons from senior engineers, product teams,
          designers, etc. regarding software development workflows, cross team collaborations and
          vision planning.
        </p>

        <p>
          While I had been there for years and gained several technical skills, my overall positive
          impact on our world feels pretty minimal. I had originally joined without much
          consideration for where my work would be going, since I felt that I needed experience to
          do anything useful. But over time, I realized that I strongly resonate with the idea that
          impact is measured by how much we can improve our society’s wellbeing and growth. After
          leaving Amazon last year feeling disillusioned, I took some time off to work on
          understanding how the world currently functions and if it would be possible to use
          software to better our reality. We have many medical professionals working in the
          healthcare field, students and scientists researching in universities and laboratories,
          passionate people striving to improve our planet, and more and more. These people are
          doing high stakes work everyday to help our society stand up tall and flourish. There is a
          lot of opportunity to use technology to help boost their productivity and efficiency. I
          find myself making more of an impact when I am able to use my software and analytical
          skills to help peoples’ lives, physical and mental. What is the purpose of doing our work
          if we aren’t growing and thriving as a whole?
        </p>

        <p>
          To reignite my love and interests in software development, I set out to work on a few
          personal projects of my own that would help myself and possibly others in our day to day
          lives. I am extremely passionate about fitness, reading, and education in general. If we
          don’t have our physical health, what do we have? Aren’t we our best selves when we are
          constantly learning? Through diving deeper into these questions, I built{" "}
          <strong>Triance</strong>, <strong>Resonote</strong>, and <strong>MathTutor</strong>.
          Triance is a fitness tracking application, focusing on strength training, mobility, and
          cardio. Resonote is a reading and reflection and knowledge graph tool to help modularize
          and automate content consumption while also urging consistent reflection to improve memory
          and critical thinking. MathTutor aims to both aid and challenge student’s learning journey
          in math, with problem deconstruction, solution composition and dynamic curriculum
          generation. Triance and Resonote were done independently, and MathTutor was built with a
          partner. Working on these projects, which I happily continue to grow today, reinvigorated
          my belief in software’s utility to help people.
        </p>

        <p>
          For more information on these projects and my Amazon experience, please visit my website
          and GitHub profile:
        </p>

        <ul>
          <li>
            Website:{" "}
            <a href="https://devportfolio-rouge.vercel.app/" className="text-blue-600 hover:underline">
              devportfolio-rouge.vercel.app
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/karavi1" className="text-blue-600 hover:underline">
              github.com/karavi1
            </a>
          </li>
        </ul>

        <p>
          I want to use my skills and passion to help make a positive difference in our world. If
          any of this resonates with you, I would love to chat and see if I can help you!
        </p>

        <p>
          Email:{" "}
          <a href="mailto:kaush.ravi@gmail.com" className="text-blue-600 hover:underline">
            kaush.ravi@gmail.com
          </a>
        </p>
      </main>
    </>
  );
};

export default AboutPage;