import ExperienceBlock from '@/components/ExperienceBlock';
import experience from '@/data/experience.json';

export default function Experience() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Experience</h1>
      {experience.map((exp, i) => (
        <ExperienceBlock key={i} {...exp} />
      ))}
    </main>
  );
}