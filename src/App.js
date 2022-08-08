import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState(0);
  const numpad = [1,2,3,4,5,6,7,8,9]
  const nowTime = () => {
    let d = new Date()
    let now = Date.now()
    let hr = d.getHours()
    let min = d.getMinutes()
    return `${hr}:${min}`
  }

  return (
    <div className="App">
      <div className="calculator">
        <header className="App-header">
          { nowTime() }
        </header>

        <div className="calculator-body">
          <div className="result">{result}</div>

          <div className="numpads">
            {
              numpad.map((num, i)=> (
                <button key={i} className="num pad">{num}</button>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
