import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState(0);
  const numpad = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const topFormula = [{ title: "C", value: "clear" }, { title: "+/-" }, { title: "%" }]
  const rightFormula = [{ title: "÷" }, { title: "x" }, { title: "-" }, { title: "+" }, { title: "=" }]

  const nowTime = () => {
    let d = new Date()
    let now = Date.now()
    let hr = d.getHours()
    let min = d.getMinutes()
    return `${hr}:${min}`
  }

  const appendResult = (key) => {
    // console.log(key.target.value);
    if (result == 0) {
      setResult(`${key.target.value}`)
    } else {
      setResult(`${result}${key.target.value}`)
    }
  }

  const handleFormula = (key) => {
    const formula =  key.target.value
    console.log(key, formula);

    switch (formula) {
      case "clear":
        setResult(0)        
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
                <button key={i} className="formula pad">{formula.title}</button>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
