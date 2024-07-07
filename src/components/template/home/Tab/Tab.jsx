import { IoMdAnalytics } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { GiReactor } from "react-icons/gi";
import { FaChartGantt } from "react-icons/fa6";

    

import ContentTab from "./ContentTab";
import { useState } from "react";


function Tab() {
    const [tabSection , setTabSection] = useState("analysis")

    const handlerTab = (tabID)=>{
        setTabSection(tabID);
    }

  return (
    <section className="block w-full mt-12">
      <div className="container">
        <div className="block">
          <div className="block text-center">
            <h4 className="block font-dana-bold text-5xl">تجربه دیجیتال</h4>
            <p className="block text-textColor text-center mx-auto mt-4 w-2/3">
              لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
              ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی
              ساختار چاپ و متن را در بر می گیرد.
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 flex-wrap mt-16 ">
            <button className={tabSection === 'analysis' ? "block w-[200px] h-[120px] shadow-xl rounded-lg shadow-slate-300 bg-primary text-white" :"block w-[200px] h-[120px] bg-white text-secondary shadow-xl rounded-lg shadow-slate-300 mb-6 ease-out duration-300 hover:bg-primary hover:text-white"}
                onClick={()=>handlerTab("analysis")}
            >
                <span className="flex items-center justify-center text-md"><IoMdAnalytics/></span>
                <span className="block mt-2 text-lg ">تجزیه و تحلیل</span>
            </button>
            <button className={tabSection === 'support' ? "block w-[200px] h-[120px] shadow-xl rounded-lg shadow-slate-300 bg-primary text-white" :"block w-[200px] h-[120px] bg-white text-secondary shadow-xl rounded-lg shadow-slate-300 mb-6 ease-out duration-300 hover:bg-primary hover:text-white"}
                onClick={()=>handlerTab("support")}
            >
                <span className="flex items-center justify-center text-md"><MdSupportAgent/></span>
                <span className="block mt-2 text-lg ">پشتیبانی</span>
            </button>
            <button className={tabSection === 'marketing-online' ? "block w-[200px] h-[120px] shadow-xl rounded-lg shadow-slate-300  bg-primary text-white": "block w-[200px] h-[120px] bg-white text-secondary shadow-xl rounded-lg shadow-slate-300 mb-6 ease-out duration-300 hover:bg-primary hover:text-white" }
                onClick={()=>handlerTab("marketing-online")}
            >
                <span className="flex items-center justify-center text-md"><RiTeamFill/></span>
                <span className="block mt-2 text-lg ">بازاریابی آنلاین</span>
            </button>
            <button className={tabSection === 'marketing-email' ? "block w-[200px]  h-[120px] shadow-xl rounded-lg shadow-slate-300 bg-primary text-white": "block w-[200px] h-[120px] bg-white text-secondary shadow-xl rounded-lg shadow-slate-300 mb-6 ease-out duration-300 hover:bg-primary hover:text-white" }
                onClick={()=>handlerTab("marketing-email")}
            >
                <span className="flex items-center justify-center text-md"><GiReactor/></span>
                <span className="block mt-2 text-lg ">بازاریابی ایمیلی</span>
            </button>
            <button className={tabSection === 'marketing-social' ?"block w-[200px]  h-[120px] shadow-xl rounded-lg shadow-slate-300 bg-primary text-white"  :"block w-[200px] h-[120px] bg-white text-secondary shadow-xl rounded-lg shadow-slate-300 mb-6 ease-out duration-300 hover:bg-primary hover:text-white" }
                onClick={()=>handlerTab("marketing-social")}
            >
                <span className="flex items-center justify-center text-md"><FaChartGantt/></span>
                <span className="block mt-2 text-lg ">بازار اجتماعی</span>
            </button>
          </div>
            { tabSection === "analysis" && (<ContentTab title='تجزیه و تحلیل'/>)}
            { tabSection === "support" && (<ContentTab title='پشتیبانی حرفه ای'/>)}
            { tabSection === "marketing-online" && (<ContentTab title='بازاریابی آنلاین'/>)}
            { tabSection === "marketing-email" && (<ContentTab title='بازاریابی ایمیلی'/>)}
            { tabSection === "marketing-social" && (<ContentTab title='بازاریابی اجتماعی'/>)}
        </div>
      </div>
    </section>
  );
}

export default Tab;
