import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

function ScrollToTop() {
    const [isVisible ,  setIsVisible] = useState(false);
    useEffect(()=> {
    const toggleVisibility = ()=>{
        window.scrollY > 120 ? setIsVisible(true) : setIsVisible(false);
    };

        window.addEventListener("scroll" , toggleVisibility);
        return ()=> window.removeEventListener("scroll" , toggleVisibility);
    },[])

    const handlerScrollTo = ()=>{
        isVisible && 
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    };
  return (
    <button className={isVisible ? "flex justify-center items-center w-12 h-12 bg-primary text-white text-md rounded-[50%] fixed bottom-16 right-6 ease-out duration-300 hover:bg-primary-100" :"hidden"} onClick={handlerScrollTo}>
        <MdKeyboardArrowUp/>
    </button>
  )
}

export default ScrollToTop