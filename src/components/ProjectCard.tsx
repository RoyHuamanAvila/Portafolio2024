import { FC } from "react"
import Github from "./icons/Github"

const ProjectCard = () => {
  return (
    <div className="w-[316px] mx-auto bg-background-200 rounded shadow-lg">
      <div className="bg-background-300 w-full flex gap-1 p-2">
        <div className="rounded-full size-[10px] bg-background-200"></div>
        <div className="rounded-full size-[10px] bg-background-200"></div>
        <div className="rounded-full size-[10px] bg-background-200"></div>
      </div>
      <div className="px-4 py-6 space-y-2">
        <img src="/Patitas.png" alt="Patitas Website" />
        <h3 className="text-lg text-primary-100 font-bold">Patitas</h3>
        <p className="text-gray-100">
          Página de adopción de mascotas creada para un albergue, funcionando
          como intermediario entre amantes de las mascotas y animales que necesitan su ayuda.
        </p>
        <a href="#" className="text-sm text-complementary-100 font-medium">Ver más...</a>
        <div className="flex gap-2">
          <Tag name="HTML" />
          <Tag name="CSS" />
          <Tag name="JavaScript" />
          <Tag name="React" />
        </div>
        <div className="flex flex-row-reverse">
          <a href="#" title="Github" className="flex place-content-center items-center rounded-full bg-background-100 size-[40px]">
            <Github />
          </a>
        </div>
      </div>
    </div>
  )
}

const Tag: FC<{ name: string }> = ({ name }) => {
  return (
    <span className="text-sm px-2 py-1 rounded font-medium bg-background-300 text-gray-100">{name}</span>
  )
}

export default ProjectCard
