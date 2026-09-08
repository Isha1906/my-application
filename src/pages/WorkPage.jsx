import projects from "../data/workData";
function WorkPage() {
  return (
    <section>
      <div>
        <p>WORK</p>
        <h1>Your heading here</h1>
        <p>Your description here</p>
      </div>

      <div>
        {projects.map()}
      </div>
    </section>
  );
}

export default WorkPage;