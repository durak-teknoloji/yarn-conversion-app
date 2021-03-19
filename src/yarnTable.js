import './App.css';
import React, { useState, useEffect, Fragment } from 'react';
import Tabletop from "tabletop";

function yarnTable() {

    const [data, setData] = useState([]);

    useEffect(() => {
        Tabletop.init({
            key: "1sQXI-ocD-huRSlOzTB0vt8QiYjXW71lHZpioDeQnokc",
            simpleSheet: true
        })
            .then((data) => setData(data))
            .catch((err) => console.warn(err));
    }, []);


    return (
        <div className="App">
            <header className="App-header">
                <h1>data from google sheets</h1>
                <ul>
                    {data.map((item, i) => (
                        <Fragment key={i}>
                            <li>URL -- {item.Test_Col1}</li>
                            <li>Email - {item.Test_Col2}</li>
                            <li>Token - {item.Test_col3}</li>
                            <br />
                        </Fragment>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default yarnTable;
