//import logo from './logo.svg';
import './App.css';
//import { useState, useEffect } from "react";
import { Form } from './form';
import { Location } from './Location';
import { QuoteOfTheDay } from './QuoteOfTheDay';
// import { LanguagesKnown } from "./language";

/*function App() {
  let [num, setNum] = useState(1)
  let [factorial,setFactorial] = useState(1)

  useEffect(()=>{
    let result = factorialcalculator(num)
    setFactorial(result);
  },[num])

  function factorialcalculator(n) {
    let fact = 1
    while (n > 0) {
      fact = fact * n
      n = n - 1
    }
    return fact
  }

  return (
    <>
      <input type={"number"} onChange={e => {
        console.log(e.target.value)
        // name = e.target.value
        setNum(e.target.valueAsNumber);
      }} />
      <h1>factorial of {num} is: {factorial} </h1>
    </>
  );
}
*/

const App = () => (
  <div>
    {/* <Location/> */}
    <QuoteOfTheDay/>
    {/* <MyComp /> */}
    {/* <LanguagesKnown/> */}
    {/* <Form/> */}
  </div>
);

export default App;