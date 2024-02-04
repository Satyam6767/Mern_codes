import React from 'react'

function Person(props) {
  return (
    <div>
      <h1>Name: {props.Name} </h1>
      <h1>UMAR: {props.age}</h1>
      <h1>Coloe: {props.color}</h1>
    </div>
  )
}

export default Person
