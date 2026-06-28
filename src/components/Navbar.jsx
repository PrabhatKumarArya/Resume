import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">Prabhat.</h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#achievements" className="hover:text-blue-400">Achievements</a></li>
          <li><a href="#education" className="hover:text-blue-400">Education</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        <div className="flex gap-4 text-xl">
          <a target="_blank" href="https://github.com/PrabhatKumarArya" rel="noopener noreferrer"><FaGithub /></a>
          <a target="_blank" href="https://www.linkedin.com/in/prabhat-kumar-arya-883a79324/" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </nav>
  );
}