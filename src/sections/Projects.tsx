import { ProjectCard } from "../components"

const Projects = () => {
  return (
    <div id="Projects">
      <p className="label-section">- MIS PROYECTOS</p>
      <h2 className="title-section">Proyectos recientes</h2>
      <p className="text-gray-100">En esta sección puedes ver algunos de los proyectos que he realizado o en los que estoy trabajando actualmente.</p>
      <div className="mt-6">
        <ProjectCard />
      </div>
    </div>
  )
}
export default Projects
