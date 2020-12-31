import React from "react";

export default function TempTodo(props) {
  return (
    <>
      <div className="list">
        <li>{props.text}</li>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            props.onUpdate(props.id);
          }}
        >
          Up
        </button>
      </div>
    </>
  );
}
