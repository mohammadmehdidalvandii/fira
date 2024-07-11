import { FaCheck } from "react-icons/fa"


function Content({text}) {
  return (
    <section className="block">
        <h6 className="block font-dana-bold text-3xl text-secondary"> {text} ایده های خلاقانه برای کسب وکار</h6>
        <ul className="block mt-8">
            <li className="flex items-center mb-4">
              <span className="block text-2xl text-primary"><FaCheck/></span>
              <span className="block mr-3 text-xl">فلسفه تحلیل تجارت</span>
            </li>
            <li className="flex items-center mb-4">
              <span className="block text-2xl text-primary"><FaCheck/></span>
              <span className="block mr-3 text-xl">پیگیری سریع</span>
            </li>
            <li className="flex items-center mb-4">
              <span className="block text-2xl text-primary"><FaCheck/></span>
              <span className="block mr-3 text-xl">پیشنهادی برای تجارت شما</span>
            </li>
            <li className="flex items-center mb-4">
              <span className="block text-2xl text-primary"><FaCheck/></span>
              <span className="block mr-3 text-xl">معامله نهایی در مورد تجارت</span>
            </li>
        </ul>
        <p className="block text-textColor mt-7">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
    </section>
  )
}

export default Content