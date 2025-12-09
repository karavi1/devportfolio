import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  // { href: "/tools", label: "AI Tools" },
];

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <div className="rounded-full border border-slate-200/70 bg-white/80 px-2 py-2 shadow-sm shadow-slate-200/80 backdrop-blur-md">
        <ul className="flex items-center gap-1">
          {links.map((link) => {
            const isActive =
              pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`relative z-10 block rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive ? "text-emerald-900" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
                {isActive ? (
                  <span className="absolute inset-0 -z-0 rounded-full bg-emerald-100 transition-all duration-200" />
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
