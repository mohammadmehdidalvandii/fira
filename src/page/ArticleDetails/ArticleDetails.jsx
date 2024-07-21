import { useEffect, useState } from "react"
import Breadcrumb from "../../components/module/Breadcrumb/Breadcrumb"
import Content from "../../components/template/articles/Content/Content"
import Latest from "../../components/template/articles/Latest/Latest"
import { useParams } from "react-router-dom";


function ArticleDetails() {
  const {id} = useParams();
  const [articles , setArticles] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:3000/articles/${id}`)
    .then(res=> res.json())
    .then(data=>{
      setArticles(data)
    })
    .catch(err=>{
      console.log("Error =>" , err);
    });
  },[id])
  return (
    <>
    <Breadcrumb title={`جزئیات مقاله / ${articles.title}`} subtitle='جزئیات مقاله'/>
    <Content  {...articles}/>
    <Latest/>
    </>
  )
}

export default ArticleDetails