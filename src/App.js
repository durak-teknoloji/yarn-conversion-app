//import logo from './logo.svg';
import logo from './amblem.png';
import './App.css';
import React, { useState, useEffect, Fragment } from 'react';
import Tabletop from 'tabletop';


function App() {

  //CONVERSION TABLE
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

  //YARN TYPES TABLE
  //GOOGLE SHEETS CONNECTION
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1sQXI-ocD-huRSlOzTB0vt8QiYjXW71lHZpioDeQnokc",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  //TABLE FILTER
  function fFilter() {
    var filter = document.getElementById('filter1').value;
    var lis = document.getElementsByName('c1');
    for (var i = 0; i < lis.length; i++) {
      var txt = lis[i].innerText;
      if (txt === filter) {
        lis[i].parentElement.style.display = 'table-row';
        document.getElementById(txt).style.display = "unset";
      }
      else {
        lis[i].parentElement.style.display = 'none';
        document.getElementById(txt).style.display = "none";
      }
    }
    if (filter === "") {
      for (var j = 0; j < lis.length; j++) {
        lis[j].parentElement.style.display = 'table-row';
      }
    }
  }

  function fYarnTable() {
    document.getElementById("conversionDiv").style.display = "none";
    document.getElementById("yarnTableDiv").style.display = "unset";
    document.getElementById("yarnTableBtn").style.display = "none";
    document.getElementById("conversionBtn").style.display = "unset";
  }

  function fConversion() {
    document.getElementById("yarnTableDiv").style.display = "none";
    document.getElementById("conversionDiv").style.display = "unset";
    document.getElementById("conversionBtn").style.display = "none";
    document.getElementById("yarnTableBtn").style.display = "unset";
  }

  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <div className="btnDivLeft">
          <input type="button" id="yarnTableBtn" value="İplik Tablosu" onClick={fYarnTable} />
          <input type="button" id="conversionBtn" value="Çevrim" onClick={fConversion} />
        </div>
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <div id="conversionDiv">
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
        </div>
        <div id="yarnTableDiv">
          <table>
            <thead>
              <tr>
                <th>
                  <select id="filter1" onChange={fFilter}>
                    <option></option>
                    {data.map((item, i) => (
                      <Fragment key={i}>
                        {(() => {
                          if (item.L1 !== "") {
                            return (
                              <option>{item.L1}</option>
                            )
                          }
                        })()}
                      </Fragment>
                    ))}
                  </select>
                </th>
                <th>TKT No.</th>
                <th>Metraj (Meter/ Yrd)</th>
                <th>Gramaj</th>
                <th>Nominal Tex</th>
                <th>Konik Tipi</th>
                <th>Kutuda Bobin Adedi</th>
                <th>Kolide Bobin Adedi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <Fragment key={i}>
                  <tr name="row">
                    <td name="c1">{item.C1}</td>
                    <td>{item.C2}</td>
                    <td>{item.C3}</td>
                    <td>{item.C4}</td>
                    <td>{item.C5}</td>
                    <td>{item.C6}</td>
                    <td>{item.C7}</td>
                    <td>{item.C8}</td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
          <div className="imgDivDiv">
            <div className="imgDiv">
              {data.map((item, i) => (
                <Fragment key={i}>
                  {(() => {
                    if (item.L1 !== "" && item.L2 !== "") {
                      return (
                        <img className="productImg" id={item.L1} src={item.L2} alt=""></img>
                      )
                    }
                  })()}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
