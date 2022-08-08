import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState(0);
  const [fn, setFn] = useState(null);
  const [fromCalc, setFromCalc] = useState(0);
  const [toCalc, setToCalc] = useState(null);

  const numpad = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const topFormula = [{ title: "C", value: "clear" }, { title: "+/-" }, { title: "%" }]
  const rightFormula = [{ title: "÷", value: "divide" }, { title: "x", value: "multiply" }, { title: "-", value: "substract" }, { title: "+", value: "add" }, { title: "=", value: "equals" }]

  const nowTime = () => {
    let d = new Date()
    let now = Date.now()
    let hr = d.getHours()
    let min = d.getMinutes()
    return `${hr}:${min}`
  }

  const appendResult = (key) => {
    if (fn) {
      setFromCalc(parseInt(result))
      setToCalc(parseInt(`${key.target.value}`))
      setResult(toCalc)

      return
    }

    if (result == 0) {
      setResult(`${key.target.value}`)
    } else {
      setResult(`${result}${key.target.value}`)
    }
  }

  const handleFn = (key) => {
    const formula = key.target.value
    console.log(formula);

    switch (formula) {
      case "divide":
        setFn(formula)
        break;
      case "multiply":
        setFn(formula)
        break;
      case "add":
        setFn(formula)
        break;
      case "substract":
        setFn(formula)
        break;
      case "equals":
        calculate()
        break;
      default:
        break;
    }
  }

  const calculate = () => {
    let calc

    switch (fn) {
      case "divide":
        calc = fromCalc / toCalc
        break;
      case "multiply":
        calc = fromCalc * toCalc
        break;
      case "add":
        calc = fromCalc + toCalc
        break;
      case "substract":
        calc = fromCalc - toCalc
        break;
        default:
          break;
    }

    setResult(calc)
    setFn(null)
  }

  const handleFormula = (key) => {
    const formula = key.target.value

    switch (formula) {
      case "clear":
        setResult(0)
        setToCalc(0)
        setFromCalc(0)
        setFn(null)
        break;

      default:
        break;
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <header className="App-header">
          {nowTime()}
        </header>

        <div className="result">{result}</div>
        <div className="calculator-body">
          <div className='left-flags'>
            <div className="top-formulas">
              {
                topFormula.map((formula, i) => (
                  <button key={i} className="formula pad" value={formula.value} onClick={handleFormula}>{formula.title}</button>
                ))
              }
            </div>

            <div className="numpads">
              {
                numpad.map((num, i) => (
                  <button key={i} className="num pad" value={num} onClick={appendResult}>{num}</button>
                ))
              }
            </div>

            <div className="numpads bottom">
              <button className="num pad zero">0</button>
              <button className="num pad dot">.</button>
            </div>
          </div>

          <div className="right-formulas">
            {
              rightFormula.map((formula, i) => (
                <button key={i} className="formula pad" value={formula.value} onClick={handleFn}>{formula.title}</button>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
