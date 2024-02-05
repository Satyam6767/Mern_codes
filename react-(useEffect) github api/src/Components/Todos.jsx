import React, { useState } from 'react'
import { Fragment } from 'react'

function Todos() {
  let arr = [
    { titl: "go to place-1", desc: "place-1 is amazing" },
    { titl: "go to place-2", desc: "place-2 is amazing" },
    { titl: "go to place-3", desc: "place-3 is amazing" },
  ];
  let [arrays, setArrays] = useState(arr);

  return (
    <Fragment>
      <SingleTodo todos={arrays} />
    </Fragment>
  );
}

function SingleTodo({ todos }) {
  //   console.log(todos);
  return (
    <Fragment>
      {todos.map((item, index) => {
        return (
          <div key={index}>
            <h1> {item.titl} </h1>
            <h1> {item.desc} </h1>
          </div>
        );
      })}
    </Fragment>
  );
}export default Todos
