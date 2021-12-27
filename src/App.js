import React from "react";
import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import {incNumber, decNumber} from "./actions/index";

const App = () =>{
  const myState = useSelector((state)=>state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <>
        <h1>React Redux Increment and Decrement Counter</h1>
        <div className="redux-practise">
          <a onClick={()=>dispatch(incNumber(2))}> + </a>
          <div> {myState} </div>
          <a onClick={()=>dispatch(decNumber(2))}> - </a>

        </div>
    </>
  )
}

export default App