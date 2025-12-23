import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import FaqData from "../../Data/FaqData";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Faq() {
  let [currentId, setCurrentId] = useState(FaqData[0].id); //1
  return (
    <div>
      
      <div className="max-w-[700px] mx-auto py-15">
        <>
        {currentId}
          {FaqData.map((obj, index) => {
            return (
              <div
                key={index}
                className="w-full border-b-2 border-gray-300 pb-3 mb-3 text-left group focus:outline-none"
              >
                <div onClick={()=>setCurrentId( obj.id==currentId ? 0 :  obj.id   )} className="text-lg relative cursor-pointer font-semibold">
                  Q: {obj.question}
                  <div  className="absolute right-0 top-0">
                    {
                       currentId ==obj.id ?  <FaMinus /> :   <FaPlus />
                    }
                  
                    
                  </div>
                </div>
                <div
                  className={`mt-3 ${
                    obj.id == currentId ? "block" : "hidden"
                  }   text-gray-700 group-focus:flex`}
                >
                  <p>{obj.answer}</p>
                </div>
              </div>
            );
          })}
        </>
      </div>

     
    </div>
  );
}
