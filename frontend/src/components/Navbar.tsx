import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex space-x-6">
      <Link href="/">
        <span className="hover:text-blue-300 transition-colors cursor-pointer">Home</span>
      </Link>
      <Link href="/projects">
        <span className="hover:text-blue-300 transition-colors cursor-pointer">Projects</span>
      </Link>
      <Link href="/experience">
        <span className="hover:text-blue-300 transition-colors cursor-pointer">Experience</span>
      </Link>
      <Link href="/tools">
        <span className="hover:text-blue-300 transition-colors cursor-pointer">AI Tools</span>
      </Link>
    </nav>
  );
}