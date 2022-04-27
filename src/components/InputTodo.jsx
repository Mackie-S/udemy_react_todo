import React from "react";

const style = {

    backgroundColor: "#c1ffff",
    width: "400px",
    height: "150px",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px"
}

export const InputTodo = (props) => {
  const{todoText,onChange, onClick, disabled } = props;
  return (
    <header style={style}>
      <h1 className="c-title">TODO LIST</h1>
      <input
        disabled={disabled}
        placeholder = "TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </header>
  );
};