import React, { useState } from 'react'
import "./Calculator.css"

const Calculator = () => {

    let [inputValue,setInputValue] = useState("");

    function functionality(btn){
        if(inputValue == "" && ( btn == "/" || btn == "*" || btn == "-" || btn == "+")){
            setInputValue(inputValue+="");
        }else{
            setInputValue(inputValue += btn); 
        }
    }

    function resultFunction(){
        setInputValue(eval(inputValue))
    }

    function clearFunction(){
        setInputValue("");
    }

    function backFunction(){
        setInputValue(inputValue.toString().slice(0,-1));
    }

  return (
    <>
    <div className="calc-body">
        <div className="display">
            <input id="display-input" value={inputValue}   type="text" placeholder="0" readOnly/>
        </div>
        <p>Calculator by IamSatyamY</p>
        <div className="buttons">
            <button onClick={()=>clearFunction("C")} value="C">C</button>
            <button onClick={()=>backFunction("B")} value="B">B</button>
            <button onClick={()=>functionality("7")} value="7">7</button>
            <button onClick={()=>functionality("8")} value="8">8</button>
            <button onClick={()=>functionality("9")} value="9">9</button>
            <button onClick={()=>functionality("/")} value="/">/</button>
            <button onClick={()=>functionality("4")} value="4">4</button>
            <button onClick={()=>functionality("5")} value="5">5</button>
            <button onClick={()=>functionality("6")} value="6">6</button>
            <button onClick={()=>functionality("*")} value="*">X</button>
            <button onClick={()=>functionality("1")} value="1">1</button>
            <button onClick={()=>functionality("2")} value="2">2</button>
            <button onClick={()=>functionality("3")} value="3">3</button>
            <button onClick={()=>functionality("-")} value="-">-</button>
            <button onClick={()=>functionality(".")} value=".">.</button>
            <button onClick={()=>functionality("0")} value="0">0</button>
            <button onClick={()=>resultFunction("=")} value="=">=</button>
            <button onClick={()=>functionality("+")} value="+">+</button>


        </div>
    </div>
    </>
  )
}

export default Calculator