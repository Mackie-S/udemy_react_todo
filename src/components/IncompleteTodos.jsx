import React from "react";

export const IncompleteTodos = (props) => {
  const {todos, onClickComplete, onClickDelete} = props;
  return(
    <section className="p-incomplete">
      <h2 className="c-title">未完了のTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return(
            <div key = {todo}className="c-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
          </div>
          );
        })}
      </ul>
    </section>
  );
};