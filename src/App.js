import React from "react";
import "./index.css";
import { useSelector,useDispatch } from "react-redux";
import {incNumber,decNumber} from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h2>Increment/Decrement Counter Using React Redux</h2>

        <div className="quantity">
          <a className="quantity-minus" title="Decrement" onClick={ () => dispatch(decNumber()) }> <span>-</span></a>
          <input name="quantity" type="text" className="quantity-input" value={myState} />
          <a className="quantity-plus" title="Increment" onClick={ () => dispatch(incNumber()) } > <span>+</span></a>
        </div>
      </div>
    </>
  )
}

export default App;