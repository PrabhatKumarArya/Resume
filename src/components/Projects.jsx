import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center">
          Featured Projects
        </h1>

        <p className="text-center text-gray-400 mt-4 mb-14">
          Some of my recent work
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}