import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";

function Item({ props, data, setTodo }) {

  const handleIsCompleted = (id) => {
    const updatedTodos = data.map((todo) => {
      if (todo.id === id) {
        // If the todo has the specified id, update isCompleated to 1.
        if (todo.isCompleated == 0) {
          return { ...todo, isCompleated: 1 };
        } else {
          return { ...todo, isCompleated: 0 };
        }
      } else {
        // Otherwise, keep the todo as it is.
        return todo;
      }
    });
  
    setTodo(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = data.filter((todo) => todo.id !== id);
    setTodo(updatedTodos);
  };

  // useEffect(()=>{
  //   console.log(data);
  // },[data])

  return (
    <>
      {/* DataAdd & Showing Space */}
      {Array.isArray(data) &&
        data?.map((val, key) => (
          <div
            className={`select-none cursor-pointer w-full border-b p-3 flex justify-between items-center`}
            key={key}
          >
            <div>
              <span className="pr-2 text-[13px] text-slate-400">
                {val?.time}
              </span>
              <span
                onClick={() => handleIsCompleted(val?.id)}
                className={`${val?.isCompleated == 1 ? "line-through" : ""} text-[20px]`}
              >
                {val?.item}
              </span>
            </div>
            <div onClick={() => handleDelete(val?.id)}>
              <HiOutlineTrash className="text-[#e74c3c]" />
            </div>
          </div>
        ))}

      {/* DataAdd & Showing Space End */}
    </>
  );
}

export default Item;
