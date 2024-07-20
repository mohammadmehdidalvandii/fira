import { useParams } from "react-router-dom"
import Breadcrumb from "../../components/module/Breadcrumb/Breadcrumb"
import Content from "../../components/template/project/Content/Content"
import Details from "../../components/template/project/Details/Details"
import Gallery from "../../components/template/project/Gallery/Gallery"
import { useEffect, useState } from "react"


function ProjectDetails() {
  const {id} = useParams();
  const [projects , setProjects] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`) 
      .then(response => response.json())
      .then(data => {
        setProjects(data); 
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);
  return (
    <>
    <Breadcrumb title={`جزئیات پروژه ${projects.title}`} subtitle='جزئیات پروژه'/>
    <Gallery image={projects.image} key={projects.id}/>
    <Content {...projects}/>
    <Details {...projects}/>
    </>
  )
}

export default ProjectDetails