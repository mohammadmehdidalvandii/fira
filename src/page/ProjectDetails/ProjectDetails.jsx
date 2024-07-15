import Breadcrumb from "../../components/module/Breadcrumb/Breadcrumb"
import Content from "../../components/template/project/Content/Content"
import Gallery from "../../components/template/project/Gallery/Gallery"


function ProjectDetails() {
  return (
    <>
    <Breadcrumb title='جزئیات پروژه' subtitle='جزئیات پروژه'/>
    <Gallery/>
    <Content/>
    </>
  )
}

export default ProjectDetails