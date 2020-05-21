import React, {useState} from 'react';
import './App.css';

function App() {
  const [inputValue, changeInput] = useState("");
  const [ exp, changeExp] = useState([]);

  const handleKeyClick = (e) => {
    changeInput(e.target.value)
  }

  const updateExpressin = (value) => {
    let newExp = [...exp];
    if (isNaN(parseInt(value))) {
      newExp.push(value)
    } else if(newExp.length > 0){
      if (!isNaN(newExp[newExp.length -1 ])) {
        let top = newExp.pop();
        top = top + "" + value
        newExp.push(top)
      } else {
        newExp.push(value);
      }
    } else {
      newExp.push(value);
    }
    changeExp(newExp);
  }

  const evaluate = () => {
    let solve = [];
    for(let i =0; i < exp.length; i++) {
    }
    console.log("newExp", exp);
  }

  const handleClick = (e, value) => {
    console.log("e", e.target.valu, value);
    updateExpressin(value);
    let newValue;
    if (value == "=") {
      evaluate()
    } else newValue = inputValue + "" + value;
    changeInput(newValue);
  }
 
  return (
    <div className="App">

     <h2>Calculator</h2>

     <div className="">
        <input className="input" onChange={handleKeyClick} type="text" value={inputValue}/>
      </div>
     <div className="main">
       <div className="row">
         <Block number={7} handleClick={handleClick}/>
         <Block number={8} handleClick={handleClick}/>
         <Block number={9} handleClick={handleClick}/>
         <Block number={"*"} handleClick={handleClick}/>
       </div>
       <div className="row">
         <Block number={4} handleClick={handleClick}/>
         <Block number={5} handleClick={handleClick}/>
         <Block number={6} handleClick={handleClick}/>
         <Block number={"-"} handleClick={handleClick}/>
       </div>
       <div className="row">
         <Block number={1} handleClick={handleClick}/>
         <Block number={2} handleClick={handleClick}/>
         <Block number={3} handleClick={handleClick}/>
         <Block number={"+"} handleClick={handleClick}/>
       </div>
       <div className="row">
         <Block number={0} handleClick={handleClick}/>
         <Block number={"."} handleClick={handleClick}/>
         <Block number={"="} handleClick={handleClick}/>
       </div>
     </div>
    </div>
  );
}

function Block(props) {
  return (
    <div className="cell" onClick={(e) => props.handleClick(e, props.number)}>
      {props.number}
    </div>
  )
}

export default App;
