import React, { useMemo, useState } from 'react'

function MyMemoHook() {

    let [count, setCount] = useState(0);
    let [inp, setInp] = useState(0);
    function handleClick(){
        setCount(count+1);
    }
    function handleChange(e){
    setInp(e.target.value)
    }


    let loop = useMemo(function(){
        let ans = 0;
        for(let i=1; i<=inp; i++){
            ans = ans+i;
    }
    return ans;
    }, [inp])
    

  return (
    <div>
    <input onChange={handleChange} type="number" value={inp} />
    <h2>Sum till that number: {ans}</h2>
    <button onClick={handleClick}>Counter - {count}</button>
</div>
  )
}

export default MyMemoHook
