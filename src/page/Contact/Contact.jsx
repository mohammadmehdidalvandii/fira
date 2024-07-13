import Breadcrumb from '../../components/module/Breadcrumb/Breadcrumb'
import ContactUs from '../../components/template/contact/ContactUs/ContactUs'
import Suggest from '../../components/template/contact/Suggest/Suggest'

function Contact() {
  return (
    <>
    <Breadcrumb title="تماس با ما" subtitle="تماس با ما"/>
    <ContactUs/>
    <Suggest/>
    </>
  )
}

export default Contact