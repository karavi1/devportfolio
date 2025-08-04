import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json';

export default function Projects() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </main>
  );
}