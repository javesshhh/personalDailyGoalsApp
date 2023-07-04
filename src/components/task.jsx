import React from "react";

function Task({title,desc,deletetask,index}) {
  return (
    <div className="task">
      <div>
        <p>{title}</p>
        <span>{desc}</span>
      </div>
      <button onClick={()=>deletetask(index)}>-</button>
    </div>
  );
}

export default Task;
