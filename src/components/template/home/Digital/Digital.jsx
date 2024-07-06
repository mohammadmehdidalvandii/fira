import { FaCheckSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


function Digital() {
  return (
    <section className="block w-full mt-12">
        <div className="container">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="block">
                    <img className="w-full" src="/assets/images/digital.png" alt="digital image" />
                </div>
                <div className="block">
                    <div className="block mt-20">
                        <h3 className="block font-dana-bold text-4xl text-secondary">بازاریابی <span className="text-primary">دیجیتالی</span></h3>
                        <p className="block my-6 text-textColor">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        <div className="flex flex-wrap gap-16 my-8">
                            <ul className="block">
                                <li className="flex items-center text-lg mb-6">
                                    <span className="text-primary ml-1"><FaCheckSquare/></span>
                                    <span className="">بازاریابی سئو</span>
                                </li>
                                <li className="flex items-center text-lg mb-6">
                                    <span className="text-primary ml-1"><FaCheckSquare/></span>
                                    <span className="">بازاریابی یوتیوب</span>
                                </li>
                                <li className="flex items-center text-lg mb-6">
                                    <span className="text-primary ml-1"><FaCheckSquare/></span>
                                    <span className="">بازاریابی فیس بوک</span>
                                </li>
                            </ul>
                            <ul className="block">
                                <li className="flex items-center text-lg mb-6">
                                    <span className="text-primary ml-1"><FaCheckSquare/></span>
                                    <span className="">بازاریابی ایمیل</span>
                                </li>
                                <li className="flex items-center text-lg mb-6">
                                    <span className="text-primary ml-1"><FaCheckSquare/></span>
                                    <span className="">بازاریابی اجتماعی</span>
                                </li>
                                <li className="flex items-center text-lg mb-6">
                                    <span className="text-primary ml-1"><FaCheckSquare/></span>
                                    <span className="">رتبه بندی صفحه</span>
                                </li>
                            </ul>
                        </div>
                        <Link to='/' className="button-primary">اطلاعات بیشتر</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Digital