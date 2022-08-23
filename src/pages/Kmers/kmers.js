import { Button } from "antd";
import Item from "antd/lib/list/Item";
import React, { useState, useEffect } from "react";
import data from "../human_data.txt";
const Practice = () => {
  useEffect(() => {
    arrayFunc();
  }, []);
  const [textData, setTextData] = useState([[]]);
  const myFunc = (val) => {
    const n = 6;
    const str = val;
    var sliced = "";
    var myArr = [];
    var i;
    for (i = 0; i < str.length - (n - 1); i++) {
      sliced = str.slice(i, str.length);
      const sndSlice = sliced.slice(0, n);

      myArr.push(sndSlice);
    }
    return JSON.stringify(myArr);
  };
  const arrayFunc = () => {
    fetch(data)
      .then((r) => r.text())
      .then((text) => {
        const arr = text.split(/\r?\n/);
        const entries = Object.entries(arr);
        console.log("typeof entries shanita", entries.shift());
        setTextData(entries);
        console.log(typeof arr);
      });
  };
  const array1 = ["aaa", "bbb", "ccc"];
  const array2 = [
    { name: "shanita", age: 28 },
    { name: "anin", age: 29 },
    { name: "shanin", age: 50 },
  ];
  const myObject = {
    myArr: [
      { name: "shanita", age: 28 },
      { name: "anin", age: 29 },
      { name: "shanin", age: 50 },
    ],
  };

  //   function myFunc(val){
  //     console.log("I Love You Shanita",val)
  //     const n = 5;
  //     const str = 'atcgatcgdde';
  // var sliced = "";
  // var myArr = [];
  // for (i=0;i<str.length-(n-1);i++){
  //  sliced = str.slice(i,str.length);
  //  const sndSlice = sliced.slice(0,n);
  //  console.log("final slice:",sndSlice);
  //  myArr.push(sndSlice);
  // }

  return (
    <div>
      <ul>
        {array2.map((Item) => {
          return (
            <li>
              {Item.name}
              {Item.age}
            </li>
          );
        })}
      </ul>
      <ul>
        {myObject.myArr.map((Item) => {
          return (
            <li>
              {Item.name}
              {Item.age}
            </li>
          );
        })}
      </ul>

      <table>
        <tr>
          <td></td>
          <td>Sequence</td>
          <td>Class</td>
        </tr>
        <tbody>
          {textData[0].map((obj, k) => {
            return (
              <tr key={k}>
                <td>{k}</td>
                <td style={{ maxWidth: "400px", overflow: "hidden" }}>
                  {myFunc(obj.substring(0, obj.length - 1))}
                </td>

                <td>{obj.slice(-1)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <table>
        <tr>
          <td>Serial</td>
          <td>Number</td>
          <td>Class</td>
        </tr>
        <tbody>
          {array1.map((obj, k) => {
            return (
              <tr key={k}>
                <td>{k}</td>
                <td style={{ maxWidth: "400px", overflow: "hidden" }}>
                  {obj[k].substring(0, obj[1].length - 1)}
                </td>

                <td>{obj[k].slice(-1)}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
};

export default Practice;
