import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { RiArrowDropUpFill } from "react-icons/ri";

function Accordion({title}) {
    const [isAccordion , setIsAccordion] = useState(false);
    const handlerShowAccordion = ()=>{
        setIsAccordion(!isAccordion);
    }
  return (
    <div className="block mb-6 select-none bg-success p-6 rounded-lg cursor-pointer ease-out duration-300 hover:text-primary">
      <div className="flex items-center justify-between" onClick={handlerShowAccordion}>
        <span className="block font-dana-bold text-2xl text-secondary">
            {title}
        </span>
        {isAccordion ? (
                <span className="block text-md">
                <RiArrowDropUpFill />
              </span>
        ) :(
                <span className="block text-md">
                <RiArrowDropDownFill />
              </span>
        )}
      </div>
      {isAccordion && (
      <div className="block mt-6">
        <p className="block text-sm text-textColor">
          لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به
          مدت 40 سال استاندارد صنعت بوده است.
        </p>
      </div>
      )}
    </div>
  );
}

export default Accordion;
