import React, { useState } from "react";
import TempTodo from "./Temptodo";
import "./Todo.css";

export default function Todo() {
  const [inputlist, setinputlist] = useState("");
  const [items, setitems] = useState([]);
  let itemEvent = (event) => {
    setinputlist(event.target.value);
  };
  let itemToStore = () => {
    if (inputlist === "") alert("please enter somethnig");
    else {
      setitems((preValue) => {
        return [...preValue, inputlist];
      });
      setinputlist("");
    }
  };
  let DelteFun = (id) => {
    setitems((preValue) => {
      return preValue.filter((arrElm, index) => {
        return index !== id;
      });
    });
  };
  let UpdateIn = (id) => {
    if (id === 0) {
      return;
    } else {
      let newArr = items;
      [newArr[id], newArr[id - 1]] = [newArr[id - 1], newArr[id]];

      setitems([...newArr]);
      console.log(items);
      // return newArr;
    }
  };
  return (
    <>
      <h1> Todo List</h1>
      <div className="container">
        <br />
        <div className="inputCon">
          <input
            type="text"
            name="list"
            value={inputlist}
            placeholder="Enter list name"
            onChange={itemEvent}
          />
          <button
            className="button"
            onClick={itemToStore}
            style={{ border: "2px solid blue", borderRadius: "10px" }}
          >
            +
          </button>
        </div>
        {/* <li>{inputlist}</li> */}
        <ol>
          {items.map((value, index) => {
            return (
              <TempTodo
                key={index}
                id={index}
                text={value}
                onSelect={DelteFun}
                onUpdate={UpdateIn}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
}
