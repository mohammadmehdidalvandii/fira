import Breadcrumb from "../../components/module/Breadcrumb/Breadcrumb"
import Content from "../../components/template/articles/Content/Content"
import Latest from "../../components/template/articles/Latest/Latest"


function ArticleDetails() {
  return (
    <>
    <Breadcrumb title='جزئیات مقاله' subtitle='جزئیات مقاله'/>
    <Content/>
    <Latest/>
    </>
  )
}

export default ArticleDetails