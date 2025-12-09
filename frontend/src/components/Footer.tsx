const socials = [
  { href: "https://github.com/karavi1", label: "GitHub", icon: GitHubIcon },
  { href: "https://www.linkedin.com/in/kaushik-ravi-0b9818330/", label: "LinkedIn", icon: LinkedInIcon },
  { href: "mailto:kaush.ravi@gmail.com", label: "Email", icon: MailIcon },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-emerald-700">Open for full-time and consulting</p>
          <p className="mt-1 text-sm text-slate-500">
            Available for scoped projects, quick audits, and building production-ready features.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="group rounded-full border border-slate-200 bg-white p-2 text-slate-500 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-md"
            >
              <item.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

type IconProps = { className?: string };

function GitHubIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 4.77 5.07 5.07 0 0 0 17.91 1S16.73.65 14 2.48a13.38 13.38 0 0 0-5 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 16.13V21"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M3 6.75C3 5.784 3.784 5 4.75 5h14.5C20.216 5 21 5.784 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25z"
        strokeLinejoin="round"
      />
      <path d="M4 7l7.34 5.156a1 1 0 0 0 1.32 0L20 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
