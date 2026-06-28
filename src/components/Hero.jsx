import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import profile from "../assets/resume.jpeg";
import resume from "../assets/Resume.pdf";
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-blue-400 text-lg">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold mt-3">
            Prabhat Kumar Arya
          </h1>

          <h2 className="text-3xl mt-4 text-gray-300">
            Software Developer
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Passionate about building scalable MERN applications,
            solving Data Structures & Algorithms problems,
            and creating modern web experiences.
          </p>

            <div className="flex gap-4 mt-8 flex-wrap">

                <a
                href={resume}
                download="Prabhat_Kumar_Arya_Resume.pdf"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center gap-2 transition hover:scale-105"
                >
                <FaDownload />
                Resume
                </a>

                <a
                    href="#contact"
                    className="border border-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition"
                >
                    Hire Me
                </a>

            </div>

            <div className="flex gap-5 mt-8">

                <a
                    href="https://github.com/PrabhatKumarArya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-blue-400 transition"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/prabhat-kumar-arya-883a79324/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-blue-400 transition"
                >
                    <FaLinkedin />
            </a>

            </div>
        </div>

        <div className="flex justify-center">
  <div className="relative p-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_40px_rgba(59,130,246,0.5)] 
                  transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(59,130,246,0.8)]">
    <img
      src={profile}
      alt="Prabhat Kumar Arya"
      className="w-72 h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full object-cover border-4 border-slate-900"/>

    {/* Online indicator */}
    <span className="absolute bottom-8 right-8 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse"></span>
  </div>
</div>

      </div>
    </section>
    
  );
}