import { Link } from 'react-router-dom'

function ProjectCard() {
  return (
    <Link to='/'  className="block w-full bg-white rounded-lg shadow-lg shadow-gray-300 ">
    <img src="/assets/images/project.png" alt="project image" className="block w-full" />
    <div className="block py-4 px-2 text-secondary ease-out duration-300 hover:bg-primary hover:text-white cursor-pointer">
        <h6 className="block font-dana-bold text-2xl  ">توسعه دهنده وب</h6>
        <span className="block  mt-4 ">طراحی وب سایت </span>
    </div>
</Link>
  )
}

export default ProjectCard