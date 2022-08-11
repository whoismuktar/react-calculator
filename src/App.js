import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';

function App() {
  const [result, setResult] = useState(0);
  const [fn, setFn] = useState("");
  const [fromCalc, setFromCalc] = useState(0);
  const [toCalc, setToCalc] = useState(0);

  const numpad = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const topFormula = [{ title: "+/-", value: "plusMinus" }, { title: "%", value: "percentage" }]
  const rightFormula = [{ title: "÷", value: "divide" }, { title: "x", value: "multiply" }, { title: "-", value: "substract" }, { title: "+", value: "add" }, { title: "=", value: "equals" }]

  const nowTime = () => {
    let d = new Date()
    let hr = d.getHours()
    let min = d.getMinutes()
    return `${hr}:${min}`
  }

  const isFnSelected = (f) => {
    if (f === fn) {
      return "fn_selected "
    }
    return ""
  }

  const appendResult = (key) => {
    const num = key.target.innerText;

    if (fn) {
      setFromCalc(parseInt(result))
      setToCalc(parseInt(`${num}`))
      // setResult(toCalc) // didn't work
      setResult(num)

      return
    }

    if (result == 0) {
      setResult(`${num}`)
    } else {
      setResult(`${result}${num}`)
    }
  }

  const handleFn = (key) => {
    const formula = key.target.value
    console.log(formula);

    switch (formula) {
      case "equals":
        calculate()
        break;
      case "percentage":
        console.log(formula);
        // setFn(() => formula);
        setFn(formula);
        console.log(fn);
        // if (typeof result === "number" && result != 0) {
        // if (result > 0) {
        //   calculate()
        // }
        break;
      case "clear":
        // console.log("clear");
        setResult(0)
        setToCalc(0)
        setFromCalc(0)
        setFn(null)
        break;
      default:
        setFn(formula)
    }
  }

  const calculate = () => {
    let calc
    console.log({ fn, result, fromCalc });

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
      case "percentage":
        console.log(123);
        calc = result / 100
        break;
      default:
        break;
    }

    setResult(calc)
    setFn(null)
  }

  useEffect(() => {
    if (fn === "percentage") {
      console.log({result});
      if (result > 0) {
        calculate()
      }
    }
  }, [fn])

  return (
    <div className="App">
      <div className="calculator">
        <header className="App-header">
          {nowTime()}
        </header>

        {
          <div className="result">{result}</div>
        }

        <div className="calculator-body">
          <div className='left-flags'>
            <div className="top-formulas">
              <button className="formula pad" value="clear" onClick={handleFn}>C</button>
              {
                topFormula.map((formula, i) => (
                  <button key={i} className={`${isFnSelected(formula.value)}formula pad`} value={formula.value} onClick={handleFn}>{formula.title}</button>
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
              <button className="num pad zero" onClick={appendResult}>0</button>
              <button className="num pad dot">.</button>
            </div>
          </div>

          <div className="right-formulas">
            {
              rightFormula.map((formula, i) => (
                <button key={i} className={`${isFnSelected(formula.value)}formula pad`} value={formula.value} onClick={handleFn}>{formula.title}</button>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
