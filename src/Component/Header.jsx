import React, { useRef } from 'react'
import { AiOutlinePlus } from "react-icons/ai";

function Header(props) {
  const InputBox = useRef()
  return (
    <>
        {/* Header input field  */}
        <div className="p-3 flex justify-around">
            <input
              type="text"
              placeholder="Enter Data Here!!"
              className="p-3 focuse:outline-none w-[90%] border border-slate-400" ref={InputBox}
            />

            <div className="cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-[50%] flex justify-center items-center" 
            onClick={() => {
              props.handler(InputBox.current.value);
              InputBox.current.value = "";
            } }>
              <AiOutlinePlus />
            </div>
          </div>
          {/* Header input field End  */}
    </>
  )
}

export default Header