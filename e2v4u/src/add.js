import React from "react";

const Slot = (props) => {
  if (props.x === props.y && props.y === props.z) {
    return (
      <>
        <div>
          <h1>
            {props.x} {props.y} {props.z}
          </h1>
          <h2>This is matching</h2>
          <hr />
        </div>
      </>
    );
  } else {
    return <h1>Awoume</h1>;
  }
};

export default function Add() {
  return (
    <>
      <h1>(●'◡'●)(●'◡'●)</h1>
      <Slot x="😁" y="😁" z="😁" />
      <Slot x="😁" y="😁" z="😁" />
      <Slot x="😁" y="😁" z="😁" />
      <Slot x="😁" y="😁" z="😁" />
    </>
  );
}
