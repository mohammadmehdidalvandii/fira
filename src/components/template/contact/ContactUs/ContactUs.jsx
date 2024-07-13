import { FaMailBulk, FaPhone } from "react-icons/fa"
import { FaMapLocation } from "react-icons/fa6"


function ContactUs() {
  return (
    <section className="block w-full mt-12">
        <div className="container">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="block bg-white py-6 px-4 rounded-lg shadow-lg shadow-gray-300 text-center">
                    <span className="flex items-center justify-center mx-auto text-5xl text-primary "><FaMapLocation/></span>
                    <h4 className="block my-4 font-dana-bold text-3xl text-secondary">موقعیت</h4>
                    <span className="block mb-3 text-textColor">ایران تهران میدان آزادی خیابان 9شرقی</span>
                </div>
                <div className="block bg-white py-6 px-4 rounded-lg shadow-lg shadow-gray-300 text-center">
                    <span className="flex items-center justify-center mx-auto text-5xl text-primary "><FaMailBulk/></span>
                    <h4 className="block my-4 font-dana-bold text-3xl text-secondary">ایمیل</h4>
                    <span className="block mb-3 text-textColor">faxFria@gmail.com</span>
                    <span className="block mb-3 text-textColor">infoFria@gmail.com</span>
                </div>
                <div className="block bg-white py-6 px-4 rounded-lg shadow-lg shadow-gray-300 text-center">
                    <span className="flex items-center justify-center mx-auto text-5xl text-primary "><FaPhone/></span>
                    <h4 className="block my-4 font-dana-bold text-3xl text-secondary">موقعیت</h4>
                    <span className="block mb-3 text-textColor">021-55664488</span>
                    <span className="block mb-3 text-textColor">021-55664488</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs