import { Button } from "antd";
import Item from "antd/lib/list/Item";
import React, { useState, useEffect } from "react";

const Practice = () => {
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
  //   function myFunc(){
  //     const n = 5;
  //     const i;
  //     const str = 'atcgatcgdde';
  // var sliced = "";
  // var myArr = [];
  // for (i=0;i<str.length-(n-1);i++){
  //  sliced = str.slice(i,str.length);
  //  const sndSlice = sliced.slice(0,n);
  //  console.log("final slice:",sndSlice);
  //  myArr.push(sndSlice);
  // }

  // console.log("myArr",myArr)
  // }
  // myFunc();

  //   function myFunc(){
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

  // console.log("myArr",myArr);
  // var newString = "";
  // myArr.map((val)=>{
  //     newString = newString + val + ' ';
  // })
  // console.log(newString);
  // }
  // myFunc();

  return (
    <div>
      <ul>
        {array1.map((Item) => {
          return <li>{Item}</li>;
        })}
      </ul>
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
