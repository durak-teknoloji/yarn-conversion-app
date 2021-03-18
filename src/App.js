//import logo from './logo.svg';
import logo from './logo.png';
import './App.css';
import { useState } from 'react';

function App() {

  const [val, setVal] = useState()
  const [val2, setVal2] = useState()
  const [val3, setVal3] = useState()
  const [val4, setVal4] = useState()
  const [val5, setVal5] = useState()

  function handleChange(event) {
    if (event.target.id === "TEX") {
      setVal();
      setVal2(event.target.value * 10);
      setVal3(event.target.value * 9);
      setVal4(1000 / event.target.value);
      setVal5(590 / event.target.value);
    }
    else if (event.target.id === "DTEX") {
      setVal(event.target.value * 0.1);
      setVal2();
      setVal3(event.target.value * 0.9);
      setVal4(10000 / event.target.value);
      setVal5(5900 / event.target.value);
    }
    else if (event.target.id === "DENYE") {
      setVal(event.target.value * 0.11);
      setVal2(event.target.value * 1.11);
      setVal3();
      setVal4(9000 / event.target.value);
      setVal5(5315 / event.target.value);
    }
    else if (event.target.id === "NM") {
      setVal(1000 / event.target.value);
      setVal2(10000 / event.target.value);
      setVal3(9000 / event.target.value);
      setVal4();
      setVal5(event.target.value * 0.59);
    }
    else if (event.target.id === "NE") {
      setVal(590 / event.target.value);
      setVal2(5900 / event.target.value);
      setVal3(5315 / event.target.value);
      setVal4(event.target.value * 1.69);
      setVal5();
    }
    else {
      console.log("ERROR");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="UnitDiv">
          <label>TEX:</label>
          <input type="number" id="TEX" value={val} onChange={handleChange}></input>
        </div>
        <div className="UnitDiv">
          <label>DTEX:</label>
          <input type="number" id="DTEX" value={val2} onChange={handleChange}></input>
        </div>
        <div className="UnitDiv">
          <label>DENYE:</label>
          <input type="number" id="DENYE" value={val3} onChange={handleChange}></input>
        </div>
        <div className="UnitDiv">
          <label>NM:</label>
          <input type="number" id="NM" value={val4} onChange={handleChange}></input>
        </div>
        <div className="UnitDiv">
          <label>NE:</label>
          <input type="number" id="NE" value={val5} onChange={handleChange}></input>
        </div>
      </header>
    </div>
  );
}

export default App;
