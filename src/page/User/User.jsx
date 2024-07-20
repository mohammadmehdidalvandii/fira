import { useState } from "react";
import Dashboard from "../../components/template/user/Dashboard";

function User() {
    const [isUserMenu , setIsUserMenu] = useState("dashboard");

    const handlerMenuUser = (userID)=>{
        setIsUserMenu(userID)
    }

  return (
    <section className="block w-full pt-12">
      <div className="flex gap-6">
        <div className="w-[20%] bg-primary rounded-lg p-4">
          <div className="block text-center mx-auto">
            <div className="block text-center mx-auto text-white border-b pb-4">
              <img
                src="/assets/images/team-1.jpg"
                alt="user image"
                className="block w-[120px] h-[120px] rounded-[50%] mx-auto"
              />
              <h5 className="block my-3 text-xl">جان اندرسون</h5>
              <button className="flex items-center justify-center mx-auto ease-out duration-300 hover:text-secondary text-lg">
                خروج
              </button>
            </div>

            <ul className="block mt-4 text-center mx-auto">
                <li className="block mb-4">
                    <button className={isUserMenu === "dashboard" ? "flex items-center justify-center bg-secondary text-white w-full h-12 rounded-md ":"flex items-center justify-center bg-white w-full h-12 rounded-md ease-out duration-300 hover:bg-secondary hover:text-white"}
                    onClick={()=>handlerMenuUser("dashboard")}
                    >پیشخوان</button>
                </li>
                <li className="block mb-4">
                    <button className={isUserMenu === "info" ? "flex items-center justify-center bg-secondary text-white w-full h-12 rounded-md ":"flex items-center justify-center bg-white w-full h-12 rounded-md ease-out duration-300 hover:bg-secondary hover:text-white"}
                    onClick={()=>handlerMenuUser("info")}
                    >اطلاعات</button>
                </li>
                <li className="block mb-4">
                    <button className={isUserMenu === "request" ? "flex items-center justify-center bg-secondary text-white w-full h-12 rounded-md ":"flex items-center justify-center bg-white w-full h-12 rounded-md ease-out duration-300 hover:bg-secondary hover:text-white"}
                    onClick={()=>handlerMenuUser("request")}
                    >درخواست ها</button>
                </li>
            </ul>
          </div>
        </div>
        <div className="w-[80%] bg-success p-4 rounded-lg">
            {isUserMenu === "dashboard" && (<Dashboard/>)}
            {isUserMenu === "info" && (<h1>info</h1>)}
            {isUserMenu === "request" && (<h1>request</h1>)}
        </div>
      </div>
    </section>
  );
}

export default User;
