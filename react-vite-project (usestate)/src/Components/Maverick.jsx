import React, { useState } from 'react'

function Maverick() {
 let [titl, setTitl] = useState("do bhau bhau");

 function handletodo(){
    setTitl(Math.floor(Math.random()*10))
 }



  return (
    <div>
      <MavKeTodo title={titl} />
      <button onClick={handletodo}>click</button>
      <MavKeTodo title= "eat" />
      <MavKeTodo title="fdg " />
      <MavKeTodo title="sit" />
    </div>
  )
}

function MavKeTodo(props){
    return(
        <h1>task:{props.title}</h1>
    )
}

export default Maverick
