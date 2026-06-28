import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
export default function ProjectCard({ project }) {
  return (
    <div
      className="
      group
      bg-slate-800
      rounded-2xl
      overflow-hidden
      border
      border-slate-700
      hover:border-blue-500
      transition-all
      duration-500
      hover:-translate-y-3
      hover:shadow-2xl
      "
    >
      <div className="overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="
          h-56
          w-full
          object-cover
          transition
          duration-500
          group-hover:scale-110
          "
        />

      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold mb-4">
          {project.title}
        </h2>

        <p className="text-gray-400 mb-5 leading-7">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="
              px-3
              py-1
              rounded-full
              bg-blue-600/20
              text-blue-300
              text-sm
              "
            >
              {tech}
            </span>

          ))}

        </div>

        <div className="flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-2
            bg-slate-700
            px-4
            py-2
            rounded-lg
            hover:bg-blue-600
            transition
            "
          >
            <FaGithub />
            GitHub
          </a>

          {project.demo && (

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              items-center
              gap-2
              bg-green-600
              px-4
              py-2
              rounded-lg
              hover:bg-green-700
              transition
              "
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>

          )}

        </div>

      </div>
    </div>
  );
}