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
    console.log("solve start", inputValue, exp);

    let solve = [];
    let i = 0;
    while(i < exp.length) {
      if(exp[i] === "*" || exp[i] === "+" || exp[i] === "-" || exp[i] === "/") {
        console.log("solvesdd=---", solve, exp[i]);

        var a = solve.pop();
        var b = exp[ i+ 1];
        if (a == undefined ) {
          window.alert("wrong expression");
          changeInput("Wrong Input");
          return;
        }
        let result;
        if(exp[i] === "*") {
          result = parseInt(a) * parseInt(b);
        } else if (exp[i] === "+") {
          result = parseInt(a) + parseInt(b);
        } else if (exp[i] === "-") {
          result = parseInt(a) - parseInt(b);
        } else if (exp[i] === "/") {
          result = parseInt(a) / parseInt(b);
        }
        solve.push(result)
        i = i+2;
      } else {
        solve.push(exp[i]);
        i++
      }
    }
    changeInput(solve[0]);
    changeExp([solve[0]])
    console.log("solve end", solve);

  }

  const handleClick = (e, value) => {
    updateExpressin(value);
    if (value == "=") {
      evaluate()
    } else {
      let newValue = inputValue + "" + value;;
      changeInput(newValue)
    } 
  }

  const handleRemove = () => {
    changeInput("");
    changeExp([])
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
         <Block number={"*"} ops="operator" handleClick={handleClick}/>
       </div>
       <div className="row">
         <Block number={4} handleClick={handleClick}/>
         <Block number={5} handleClick={handleClick}/>
         <Block number={6} handleClick={handleClick}/>
         <Block number={"-"} ops="operator" handleClick={handleClick}/>
       </div>
       <div className="row">
         <Block number={1} handleClick={handleClick}/>
         <Block number={2} handleClick={handleClick}/>
         <Block number={3} handleClick={handleClick}/>
         <Block number={"+"} ops="operator" handleClick={handleClick}/>
       </div>
       <div className="row">
         <Block number={0} handleClick={handleClick}/>
         <Block number={"C"} ops="operator" handleClick={handleRemove}/>
         <Block number={"/"} ops="operator" handleClick={handleClick}/>
         <Block number={"="} ops="operator" handleClick={handleClick}/>
       </div>
     </div>
    </div>
  );
}

function Block(props) {
  return (
    <div className={`cell ${props.ops ? props.ops : ""}`} onClick={(e) => props.handleClick(e, props.number)}>
      {props.number}
    </div>
  )
}

export default App;
