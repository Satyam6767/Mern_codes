import React, { useState } from 'react'

function CaseTwo() {
    const [count, setCount] = useState(0);

    function handleIncrement(){
        setCount (count+1);
        console.log(count);
    }
  return (
    <div>
      <button onClick={handleIncrement}>click</button>
    </div>
  )
}

export default CaseTwo
