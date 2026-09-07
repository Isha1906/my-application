function ProjectCard(props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-lg">
      
      <p className="text-sm font-semibold tracking-wider text-blue-600">
        {props.category}
      </p>

      <h3 className="mt-4 text-2xl font-bold">
        {props.title}
      </h3>

      <p className="mt-4 leading-relaxed text-slate-600">
        {props.description}
      </p>

      <button className="mt-6 font-medium transition hover:text-blue-600">
        View Project →
      </button>

    </div>
  );
}

export default ProjectCard;