import profile from "../assets/resume.jpeg";
export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div>
          <div className="w-72 h-72 rounded-2xl bg-slate-700 flex items-center justify-center text-7xl">
            👨‍💻
          </div>
        </div>

        <div>

          <p className="text-lg leading-8 text-gray-300">
            I'm <span className="text-blue-400 font-semibold">Prabhat Kumar Arya</span>,
            a Computer Science student passionate about building scalable web
            applications using the MERN stack.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            I enjoy solving Data Structures & Algorithms problems, learning
            modern technologies, and creating projects that solve real-world
            problems.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Currently, I'm looking for Software Development internships where I
            can contribute, learn from experienced developers, and grow as a
            full-stack engineer.
          </p>

        </div>

      </div>
    </section>
  );
}