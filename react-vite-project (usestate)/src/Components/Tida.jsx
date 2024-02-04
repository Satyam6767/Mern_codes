import React, { useState } from 'react'

function Tida() {
    return (
        <div>
            <Head task="do roll"/>
            <Head task="do swif"/>
            <BadaHead task="do jump"/>
        </div>
    )
}

function Head({task}) {
    return (
        <h1>Title: {task}</h1>
    )
}


function BadaHead({task}) {
    let [t, setT] = useState(task)
    function handleClick() {
        setT(Math.floor(Math.random()*10))

    }
    return (
        <>
            <Head task = {t}/>
            <button onClick={handleClick}>click</button>
        </>
    )

}
export default Tida
