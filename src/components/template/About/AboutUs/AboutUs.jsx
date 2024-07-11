import { useState } from "react";
import Content from "./Content";

function AboutUs() {
    const [isActiveMenu , setIsActiveMenu] = useState("history");

    const handlerAboutMenu = (aboutID)=>{
        setIsActiveMenu(aboutID);
    }

  return (
    <section className="block w-full mt-12">
      <div className="container">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="block">
            <img
              src="/assets/images/aboutus.jpg"
              alt="aboutUs image"
              className="w-full rounded-sm"
            />
          </div>
          <div className="block">
            <div className="block">
              <h4 className="block font-dana-bold text-4xl text-secondary">درباه آژانس ما</h4>
              <p className="block text-textColor mt-4 ">
                لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به
                سادگی ساختار چاپ و متن را در بر می گیرد.
              </p>
            </div>
            <div className="flex items-center gap-6 mt-8 border-b pb-4">
                <button
                 className={`${isActiveMenu === 'history' ? "block outline-none border-none bg-transparent font-semibold text-primary" :"block outline-none border-none bg-transparent font-semibold text-secondary ease-out duration-300 hover:text-primary"}`}
                 onClick={()=>handlerAboutMenu("history")}
                 >تاریخچه</button>
                <button
                 className={`${isActiveMenu === 'expertise' ? "block outline-none border-none bg-transparent font-semibold text-primary" :"block outline-none border-none bg-transparent font-semibold text-secondary ease-out duration-300 hover:text-primary"}`}
                 onClick={()=>handlerAboutMenu("expertise")}
                 >تخصص ما</button>
                <button
                 className={`${isActiveMenu === 'support' ? "block outline-none border-none bg-transparent font-semibold text-primary" :"block outline-none border-none bg-transparent font-semibold text-secondary ease-out duration-300 hover:text-primary"}`}
                 onClick={()=>handlerAboutMenu("support")}
                 >پشتیبانی حرفه ای</button>
            </div>
            <div className="block mt-8">
                {isActiveMenu === "history" && (<Content text='تاریخچه'/>)}
                {isActiveMenu === "expertise" && (<Content text='تخصص ما'/>)}
                {isActiveMenu === "support" && (<Content text='پشتیبانی'/>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
