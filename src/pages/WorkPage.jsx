import projects from "../data/workData";
import ProjectCard from "../components/ProjectCard";
function WorkPage() {
  return (
    <section>
      <div>
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