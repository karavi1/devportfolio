import Link from "next/link";

type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  github?: string;            // external
  demo?: string;              // external
  architectureHref?: string;  // internal, e.g. "/projects/triance/architecture"
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  architectureHref,
}: ProjectProps) {
  return (
    <article className="group rounded-2xl border p-6 transition hover:shadow-md">
      <header>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-gray-700">{description}</p>
      </header>

      {/* Tech list */}
      {tech?.length ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-full border px-2.5 py-0.5 text-xs text-gray-600"
            >
              {t}
            </li>
          ))}
        </ul>
      ) : null}

      {/* Links */}
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-gray-400 decoration-1 underline-offset-4 hover:text-gray-900"
          >
            GitHub
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-gray-400 decoration-1 underline-offset-4 hover:text-gray-900"
          >
            Live
          </a>
        )}

        {architectureHref && (
          <Link
            href={architectureHref}
            className="underline decoration-gray-400 decoration-1 underline-offset-4 hover:text-gray-900"
          >
            Architecture
          </Link>
        )}
      </div>
    </article>
  );
}