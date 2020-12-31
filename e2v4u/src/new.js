import React, { useState } from "react";

export default function New() {
  // let count ;
  const [count, setCount] = useState(1);
  let inc = () => {
    setCount(count + 1);
  };
  const [name, changeinp] = useState({
    inputVal: "",
    pass: ""
  });

  let inputEvent = (event) => {
    // changeinp(event.target.value);
    // let vlaue = event.target.value;
    // let name = event.target.name;
    const { name, value } = event.target;
    changeinp((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
      // if (name === "name") {
      //   return {
      //     inputVal: vlaue,
      //     pass: preValue.pass
      //   };
      // } else {
      //   return {
      //     inputVal: preValue.inputVal,
      //     pass: vlaue
      //   };
      // }
    });
  };

  let click = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <h1> {count} </h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={inc}>Click Me</button>
        <form onSubmit={click}>
          <h1>
            Hello {name.inputVal} {name.pass}
          </h1>
          <input
            type="text"
            onChange={inputEvent}
            name="inputVal"
            value={name.inputVal}
          />
          <br />
          <input
            type="password"
            onChange={inputEvent}
            name="pass"
            value={name.pass}
          />
          <button type="submit">Click</button>
        </form>
      </div>
    </>
  );
}
