import { FaCheckCircle } from "react-icons/fa";

function ContentTab({title}) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            <div className="block">
                <div className="block">
                    <h4 className="block font-dana-bold text-5xl text-secondary">{title}</h4>
                    <p className="block text-textColor mt-4">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                </div>
                <ul className="block mt-6">
                    <li className="flex mb-8">
                        <span className="block text-4xl text-primary"><FaCheckCircle/></span>
                        <div className="block mr-3">
                            <span className="block font-dana-bold text-2xl text-secondary">پشتیبانی حرفه ای</span>
                            <span className="block text-textColor mt-3">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</span>
                        </div>
                    </li>
                    <li className="flex mb-8">
                        <span className="block text-4xl text-primary"><FaCheckCircle/></span>
                        <div className="block mr-3">
                            <span className="block font-dana-bold text-2xl text-secondary">امنیت بالا</span>
                            <span className="block text-textColor mt-3">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</span>
                        </div>
                    </li>
                    <li className="flex mb-8">
                        <span className="block text-4xl text-primary"><FaCheckCircle/></span>
                        <div className="block mr-3">
                            <span className="block font-dana-bold text-2xl text-secondary">انتخاب بهینه</span>
                            <span className="block text-textColor mt-3">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="block">
                <img src="/assets/images/tab.png" alt="tab image" className="" />
            </div>
          </div>
  )
}

export default ContentTab