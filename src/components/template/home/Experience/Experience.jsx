import { FaCheckSquare } from "react-icons/fa";


function Experience() {
  return (
    <section className="block w-full mt-12">
        <div className="container">
            <div className="flex flex-col-reverse  sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="block">
                        <div className="block">
                            <h3 className="block font-dana-bold text-5xl font-semibold text-secondary">چرا ما را انتخاب می کنید</h3>
                            <p className="block my-8 text-base text-textColor">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        </div>
                        <ul className="block">
                            <li className="flex mb-6">
                                <span className="text-5xl text-primary"><FaCheckSquare/></span>
                                <div className="block mr-3">
                                    <h5 className="block font-dana-bold text-md text-secondary">اولین فرایند کار</h5>
                                    <span className="block text-textColor mt-3">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</span>
                                </div>
                            </li>
                            <li className="flex mb-6">
                                <span className="text-5xl text-primary"><FaCheckSquare/></span>
                                <div className="block mr-3">
                                    <h5 className="block font-dana-bold text-md text-secondary">عضوتیم احتصاصی</h5>
                                    <span className="block text-textColor mt-3">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</span>
                                </div>
                            </li>
                            <li className="flex mb-6">
                                <span className="text-5xl text-primary"><FaCheckSquare/></span>
                                <div className="block mr-3">
                                    <h5 className="block font-dana-bold text-md text-secondary">پشتیبانی 24/7</h5>
                                    <span className="block text-textColor mt-3">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</span>
                                </div>
                            </li>
                        </ul>
                </div>
                <div className="block mt-12">
                    <img src="/assets/images/experience.png" alt="experience image" className="w-full" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience