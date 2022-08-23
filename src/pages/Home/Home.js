import { Button, Checkbox, Form, Input } from "antd";

import React, { useState, useEffect } from "react";

import data from "../human_data.txt";

import "./Home.css";

export const HomeMain = () => {
  const [textData, setTextData] = useState([]);
  const [processHexaData, setProcessHexaData] = useState([]);
  useEffect(() => {
    arrayFunc();
  }, []);
  const testFunction = (a, b) => {
    console.log(a, b);
  };
  const arrayFunc = () => {
    fetch(data)
      .then((r) => r.text())
      .then((text) => {
        const arr = text.split(/\r?\n/);
        const entries = Object.entries(arr);
        console.log("typeof entries shanita", entries.shift());

        setTextData(entries);
        var exportArr = textData;
        console.log(typeof arr);
      });
  };
  const showProcessedData = (val, count) => {
    const n = count;
    const str = val;
    var sliced = "";
    var myArr = [];
    var i;
    for (i = 0; i < str.length - (n - 1); i++) {
      sliced = str.slice(i, str.length);
      const sndSlice = sliced.slice(0, n);

      myArr.push(sndSlice);
    }
    console.log("myArr", myArr);
    let unique = myArr.filter((item, i, ar) => ar.indexOf(item) === i);
    console.log("unique", unique);
    const newwArr = JSON.stringify(myArr);
    setProcessHexaData(newwArr);

    var newString = "";
    myArr.map((val) => {
      newString = newString + val + " ";
    });

    alert(newString.toLowerCase());
  };

  return (
    <div>
      <table>
        <tr>
          <td></td>
          <td>Sequence</td>
          <td>Class</td>
          <td>Action</td>
        </tr>
        <tbody>
          {textData.map((obj, k) => {
            return (
              <tr key={k}>
                <td>{k}</td>
                <td style={{ maxWidth: "400px", overflow: "hidden" }}>
                  {obj[1].substring(0, obj[1].length - 1)}
                </td>

                <td>{obj[1].slice(-1)}</td>
                <td>
                  <Button
                    onClick={() =>
                      showProcessedData(
                        obj[1].substring(0, obj[1].length - 1),
                        6
                      )
                    }
                  >
                    Hexamer
                  </Button>
                  <Button
                    onClick={() =>
                      showProcessedData(
                        obj[1].substring(0, obj[1].length - 1),
                        8
                      )
                    }
                  >
                    Octamer
                  </Button>
                  <Button onClick={() => testFunction("test item", 2)}>
                    test
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br></br>
    </div>
  );
};

export default HomeMain;
