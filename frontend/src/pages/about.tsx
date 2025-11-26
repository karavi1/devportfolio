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
          Along the way, I realized that the real leverage of technology comes from how effectively it can elevate human capability. 
          Across healthcare, research, education, and public service, there are professionals doing high-stakes work essential to our society’s wellbeing—and many of their tools, workflows, and knowledge systems are still fragmented or inefficient. 
          This gap presents a major opportunity: software that improves clarity, reduces cognitive load, and scales human expertise can create disproportionate value. 
          After taking time to study how different sectors operate, I’ve become focused on building systems that strengthen learning, reflection, and real-world decision-making. 
          To me, impact is measured by how much we collectively grow—how effectively we use technology to empower the people who move our world forward. That is the direction I’m committed to building toward.
        </p>

        <p>
          
          My recent projects, below, center on using software to enhance physical and mental wellbeing, streamline knowledge workflows, and help people and organizations operate with more insight and efficiency. I am extremely passionate about fitness, reading, and knowledge in general. If we
          In finding ways to achieve this, I built{" "}
          <strong>Triance</strong>, <strong>Resonote</strong>, and <strong>MathTutor</strong>.
          Triance is a fitness tracking application, focusing on strength training, mobility, and
          cardio. Resonote is a reading and reflection and knowledge graph tool to help modularize
          and automate content consumption while also urging consistent reflection to improve memory
          and critical thinking. MathTutor aims to both aid and challenge student’s learning journey
          in math, with problem deconstruction, solution composition and dynamic curriculum
          generation. Triance and Resonote were done independently, and MathTutor was built with a
          partner. Working on these projects, which I happily continue to grow today, reinvigorated
          my belief in software’s utility to help people through knowledge management and encourage people and business thinking. 
        </p>

        <p>
          For more information, feel free to visit my GitHub profile:
        </p>

        <ul>
          <li>
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