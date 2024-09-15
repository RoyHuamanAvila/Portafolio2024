import { FC } from "react"
import Github from "./icons/Github"
import { Project } from "../types"

const ProjectCard: FC<Project> = ({ image, title, description, tags }) => {
  return (
    <div className="w-[316px] mx-auto bg-background-200 rounded shadow-lg">
      <div className="bg-background-300 w-full flex gap-1 p-2">
        <div className="rounded-full size-[10px] bg-background-200"></div>
        <div className="rounded-full size-[10px] bg-background-200"></div>
        <div className="rounded-full size-[10px] bg-background-200"></div>
      </div>
      <div className="px-4 py-6 space-y-2">
        <img src={image} alt={`${title} website`} />
        <h3 className="text-lg text-primary-100 font-bold">{title}</h3>
        <p className="text-gray-100">
          {description}
        </p>
        <a href="#" className="text-sm text-complementary-100 font-medium">Ver más...</a>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag key={index} name={tag} />
          ))}
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
