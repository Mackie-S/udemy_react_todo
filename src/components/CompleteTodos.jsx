import React from "react";

export const CompleteTodos = (props) => {
  const {todos, onClickBack} = props;
  return(
    <section className="p-complete">
      <h2 className="c-title">完了したTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return(
            <div key={todo} className="c-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index) }>戻す</button>
            </div>
          );
        })}
      </ul>
    </section>
  );
};