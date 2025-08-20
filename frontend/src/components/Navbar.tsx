import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex flex-wrap justify-center space-x-4">
          <Link href="/">
            <button className="bg-blue-600 text-white font-medium px-3 py-1.5 rounded hover:bg-blue-700 transition">
              Home
            </button>
          </Link>

          <Link href="/about">
            <button className="bg-blue-600 text-white font-medium px-3 py-1.5 rounded hover:bg-blue-700 transition">
              About Me
            </button>
          </Link>

          <Link href="/projects">
            <button className="bg-blue-600 text-white font-medium px-3 py-1.5 rounded hover:bg-blue-700 transition">
              Projects
            </button>
          </Link>

          <Link href="/experience">
            <button className="bg-blue-600 text-white font-medium px-3 py-1.5 rounded hover:bg-blue-700 transition">
              Experience
            </button>
          </Link>

          {/* <Link href="/tools">
            <button className="bg-blue-600 text-white font-medium px-3 py-1.5 rounded hover:bg-blue-700 transition">
              AI Tools
            </button>
          </Link> */}
        </div>
      </div>
    </nav>
  );
}