import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/module/Breadcrumb/Breadcrumb';
import Content from '../../components/template/services/Content/Content';
import Overview from '../../components/template/services/Overview/Overview';
import { useParams } from 'react-router-dom';

function ServicesDetails() {
  const { id } = useParams(); 
  const [service, setService] = useState({}) 

  useEffect(() => {
    fetch(`http://localhost:3000/services/${id}`) 
      .then(response => response.json())
      .then(data => {
        setService(data); 
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);
  return (
    <>
        <Breadcrumb title={`جزئیات ${service.title}`} subtitle="جزئیات خدمات"/>
          <Content key={service.id} {...service}/>
        <Overview/>
    </>
  )
}

export default ServicesDetails