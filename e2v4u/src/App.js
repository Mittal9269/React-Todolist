import React from "react";
import "./styles.css";
// import Add from "./add";
// import New from "./new";
import Todo from "./Todo";
// // let d = new Date();
// let time = d.getHours();
// let sent;
// if (time > 12) {
//   sent = "Good AftreNoon";
// } else if (time < 12) {
//   sent = "Good Morning";
// } else {
//   sent = "Good Afternoon";
// }

export default function App() {
  return (
    <div className="App">
      {/* <h1 style={{ color: "blue", textAlign: "center" }}>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic and {l} happen!</h2>
      <h2>{`my name is ${l}`}</h2> */}
      <h1>
        {/* <span style={{ color: "blue" }}>Hello Mayank</span>
        <span style={{ color: "red" }}>{sent}</span> */}
        {/* <Add /> */}
        {/* <New /> */}
        <Todo />
      </h1>
    </div>
  );
}
