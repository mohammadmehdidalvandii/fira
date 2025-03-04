import { Link } from 'react-router-dom'

function ProjectCard({image , title ,minTitle ,id}) {
  return (
    <Link to={`/Project-D/${id}`}  className="block w-full bg-white rounded-lg shadow-lg shadow-gray-300 ">
    <img src={image} alt="project image" className="block w-full" />
    <div className="block py-4 px-2 text-secondary ease-out duration-300 hover:bg-primary hover:text-white cursor-pointer">
        <h6 className="block font-dana-bold text-2xl  ">{title}</h6>
        <span className="block  mt-4 ">{minTitle}</span>
    </div>
</Link>
  )
}

export default ProjectCard