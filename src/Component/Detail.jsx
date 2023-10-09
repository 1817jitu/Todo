import React from "react";
import Item from "./Item";

function Detail({data, setTodo}) {

  return (
    <>
      <div className="p-3">
        <Item setTodo = {setTodo} data={data} />
      </div>
    </>
  );
}

export default Detail;
