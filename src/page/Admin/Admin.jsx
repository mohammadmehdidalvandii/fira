import { useState } from "react"
import Dashboard from "../../components/template/admin/Dashboard";
import Articles from "../../components/template/admin/Articles";
import Projects from "../../components/template/admin/Projects";
import Info from "../../components/template/admin/Info";


function Admin() {
    const [isAdminMenu , setIsAdminMenu] = useState("dashboard");

    const handlerMenuAdmin = (adminID)=>{
        setIsAdminMenu(adminID);
    }

  return (
    <section className="block w-full pt-12">
        <div className="flex gap-6">
            <div className="w-[20%] bg-primary rounded-lg p-4">
                <div className="block text-center mx-auto">
                    <div className="block text-center mx-auto text-white border-b pb-4">
                        <img src="/assets/images/team-1.jpg" alt="user image" className="block w-[120px] h-[120px] rounded-[50%] mx-auto" />
                        <h5 className="block my-3 text-xl">جان اندرسون</h5>
                        <button className="flex items-center justify-center mx-auto ease-out duration-300 hover:text-secondary text-lg">خروج</button>
                    </div>
                    <ul className="block mt-4 text-center mx-auto">
                        <li className="block mb-4">
                            <button className={isAdminMenu === "dashboard" ? "flex items-center justify-center bg-secondary text-white w-full h-12 rounded-md " : "flex items-center justify-center bg-white w-full h-12 rounded-md ease-out duration-300 hover:bg-secondary hover:text-white"}
                            onClick={()=>handlerMenuAdmin("dashboard")}
                            >پیشخوان</button>
                        </li>
                        <li className="block mb-4">
                            <button className={isAdminMenu === "articles" ? "flex items-center justify-center bg-secondary text-white w-full h-12 rounded-md " : "flex items-center justify-center bg-white w-full h-12 rounded-md ease-out duration-300 hover:bg-secondary hover:text-white"}
                            onClick={()=>handlerMenuAdmin("articles")}
                            >مقالات</button>
                        </li>
                        <li className="block mb-4">
                            <button className={isAdminMenu === "projects" ? "flex items-center justify-center bg-secondary text-white w-full h-12 rounded-md " : "flex items-center justify-center bg-white w-full h-12 rounded-md ease-out duration-300 hover:bg-secondary hover:text-white"}
                            onClick={()=>handlerMenuAdmin("projects")}
                            >پروژه ها</button>
                        </li>
                        <li className="block mb-4">
                            <button className={isAdminMenu === "info" ? "flex items-center justify-center bg-secondary text-white w-full h-12 rounded-md " : "flex items-center justify-center bg-white w-full h-12 rounded-md ease-out duration-300 hover:bg-secondary hover:text-white"}
                            onClick={()=>handlerMenuAdmin("info")}
                            >اطلاعات</button>
                        </li>
                        <li className="block mb-4">
                            <button className={isAdminMenu === "list-user" ? "flex items-center justify-center bg-secondary text-white w-full h-12 rounded-md " : "flex items-center justify-center bg-white w-full h-12 rounded-md ease-out duration-300 hover:bg-secondary hover:text-white"}
                            onClick={()=>handlerMenuAdmin("list-user")}
                            >کاربران</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-[80%] bg-success p-4 rounded-lg">
                {isAdminMenu === "dashboard" && (<Dashboard/>)}
                {isAdminMenu === "articles" && (<Articles/>)}
                {isAdminMenu === "projects" && (<Projects/>)}
                {isAdminMenu === "info" && (<Info/>)}
                {isAdminMenu === "list-user" && (<h1>list-user</h1>)}
            </div>
        </div>
    </section>
  )
}

export default Admin