import React, { useState, useEffect } from "react";
import Task from "./task";

function Home() {
  
  const [task, setTask] = useState([]);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  console.log(task);
  // useEffect(() => {
  //     console.log("run")
  // })
  // function handle(e){
  //     console.log(e.target.value);
  // }
  // let inputvalue=0
  // const [ivalue,setvalue]=useState(0);
  // function Decrement(){
  //     setvalue(ivalue-1)
  // }
  // function Increment(){
  //     setvalue(ivalue+1)
  // }
  // const btnstyle={
  //     padding:20,
  //     border:"none",
  //     backgroundColor:"rgba(78, 113, 144, 0.4)",
  //     margin:10
  // }
  function sub(e) {
    e.preventDefault();
    setTask([
      ...task,
      {
        title,
        desc,
      },
    ]);
    settitle("")
    setdesc("");
  }
  function inp(e) {
    settitle(e.target.value);
  }
  function des(e) {
    setdesc(e.target.value);
  }
  function deletetask(index) {
    const filteredarray = task.filter((value, i) => {
      return i != index;
    });
    console.log(filteredarray);
    setTask(filteredarray);
  }
  // useEffect(()=>{
  //   localStorage.setItem("task",JSON.stringify(task)),[task];
  // })
  return (
    <div className="container">
      <h1>DAILY GOALS</h1>
      {/* <input style={{padding:'20', margin:'20', border:"1px solid rgba(7, 27, 45, 0.4)"}}
        type="number"
        placeholder='enter something'
        // onChange={handle}
        value={ivalue}
        readOnly
        />
        <button style={btnstyle} onClick={Decrement}>-</button>
        <button style={btnstyle} onClick={Increment}>+</button> */}
      <form onSubmit={sub}>
        <input
          type="text"
          placeholder="Goal Title"
          value={title}
          onChange={inp}
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={des}
        ></textarea>
        <button type="submit">ADD</button>
      </form>
      {task.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          desc={item.desc}
          deletetask={deletetask}
          index={index}
        />
      ))}
    </div>
  );
}

export default Home;
