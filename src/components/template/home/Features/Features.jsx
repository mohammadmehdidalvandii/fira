import { BiAnalyse } from "react-icons/bi";
import { MdStackedBarChart } from "react-icons/md";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { GiTeamIdea } from "react-icons/gi";



function Features() {
  return (
   <section className="block w-full sm:mt-8 md:mt-48 border-t border-gray-400 pt-12">
        <div className="container">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex justify-center items-center flex-col w-full bg-slate-200 rounded-lg p-4 ease-linear delay-300 cursor-pointer">
                    <span className="flex items-center justify-center w-16 h-16 border-dotted border-spacing-1 rounded-[50%]  bg-white text-md "><BiAnalyse/></span>
                    <h5 className="block my-6 font-dana-bold text-2xl">مشاوره سئو</h5>
                    <p className="block font-dana-medium text-sm text-textColor text-center">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-slate-200 rounded-lg p-4 ease-linear delay-300 cursor-pointer">
                    <span className="flex items-center justify-center w-16 h-16 border-dotted border-spacing-1 rounded-[50%]  bg-white text-md "><MdStackedBarChart/></span>
                    <h5 className="block my-6 font-dana-bold text-2xl">بازاریابی اجتماعی</h5>
                    <p className="block font-dana-medium text-sm text-textColor text-center">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-slate-200 rounded-lg p-4 ease-linear delay-300 cursor-pointer">
                    <span className="flex items-center justify-center w-16 h-16 border-dotted border-spacing-1 rounded-[50%]  bg-white text-md "><TbDeviceDesktopAnalytics/></span>
                    <h5 className="block my-6 font-dana-bold text-2xl">تجزیه و تحلیل</h5>
                    <p className="block font-dana-medium text-sm text-textColor text-center">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-slate-200 rounded-lg p-4 ease-linear delay-300 cursor-pointer">
                    <span className="flex items-center justify-center w-16 h-16 border-dotted border-spacing-1 rounded-[50%]  bg-white text-md "><GiTeamIdea/></span>
                    <h5 className="block my-6 font-dana-bold text-2xl">ایده خلاقانه</h5>
                    <p className="block font-dana-medium text-sm text-textColor text-center">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Features