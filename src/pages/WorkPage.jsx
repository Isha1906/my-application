import projects from "../data/workData";
import ProjectCard from "../components/ProjectCard";

function WorkPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:py-20">

      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-widest text-blue-600">
          OUR WORK
        </p>

        <p className="mt-4 text-gray-600">
          Explore the projects and collaborations we have worked on.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            category={project.category}
            description={project.description}
          />
        ))}
      </div>

    </section>
  );
}

export default WorkPage;