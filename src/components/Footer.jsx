import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              Prabhat Kumar Arya
            </h2>

            <p className="text-gray-400 mt-2">
              MERN Stack Developer | C++ | DSA
            </p>
          </div>

          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/PrabhatKumarArya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/prabhat-kumar-arya-883a79324/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <hr className="my-8 border-slate-800" />

        <p className="text-center text-gray-500 flex justify-center items-center gap-2">

          Made with <FaHeart className="text-red-500" />

          by Prabhat Kumar Arya © {new Date().getFullYear()}

        </p>

      </div>
    </footer>
  );
}