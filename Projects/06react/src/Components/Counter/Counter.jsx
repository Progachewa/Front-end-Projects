import  "./Counter.css"
import { useState,useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";


function Counter() {

    const initValue = 0;
    let $resetBtn = "Reset";
    // Count is my default state - in this case "0"
    const [count, setCount] = useState(initValue);

    let decrementCount = () => {
    // Call setCount func to update our state
        setCount(count - 1);
    };

    let increment = () => {
        // Call setCount func to update our state
        setCount(count + 1);
    };

    let reset = () => {
        setCount(initValue);
    };

    useEffect( () => {
        console.log("change")
    },[]);

  return (
    <div className="border border-5">
      <button
        type="button"
        className="btn btn-primary fw-bolder"
        onClick={decrementCount}
      >
        <FaMinus></FaMinus>
      </button>
      <span>{count}</span>
      <button
        type="button"
        className="btn btn-primary fw-bolder"
        onClick={increment}
      >
        <FaPlus></FaPlus>
      </button>
      <br />
      <button
        type="button"
        className="btn btn-primary fw-bolder"
        onClick={reset}
      >
        {$resetBtn}
      </button>
    </div>
  ); 
}

export default Counter
