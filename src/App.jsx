import { Timer } from "./components/timer";
import { useState } from "react";
import './App.css';

function App() {
  const [show,setShow] = useState(false);
  return (
    <div className="App">
      <h1 style={{color:"blue"}}>Timer</h1>
      {show ? <Timer /> : null}
      <button  style={{background:"green", border:"green", width:"70px", height:"30px"}} onClick={()=>{setShow(!show)}} >{ show ? "hide" : "show" }  </button>
    </div>
  );
}

export default App;
