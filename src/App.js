import "./App.css";
import React from "react";
import Dcard from "./Decard";
import arr from "./Array";
 
export default function App() {
 
  return (
    <div className="main">
      {
        arr.map((obj)=><Dcard key={obj.userName} prop={obj}/>)
      }
    </div>
  );
}