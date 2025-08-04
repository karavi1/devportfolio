type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({ title, description, tech, github, demo }: ProjectProps) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-xs text-gray-400 mt-2">Tech: {tech.join(', ')}</p>
      <div className="mt-2 flex gap-4">
        {github && (
          <a href={github} className="text-blue-500 underline" target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {demo && (
          <a href={demo} className="text-green-600 underline" target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>
    </div>
  );
}