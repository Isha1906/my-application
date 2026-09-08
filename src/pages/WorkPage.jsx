import projects from "../data/workData";
import ProjectCard from "../components/ProjectCard";
function WorkPage() {
  return (
    <section>
      <div>
        <p>WORK</p>
        <h1>Your heading here</h1>
        <p>Your description here</p>
      </div>

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