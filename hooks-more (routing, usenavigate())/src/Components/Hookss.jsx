import React, { useEffect, useRef } from 'react'

function Hookss() {

    let sallary = 50000;
    let spanEl = useRef();

    useEffect(() =>{
        setTimeout(() =>{
            // document.getElementById("sal").innerHTML = "33000"  way1
            spanEl.current.innerHTML = "33000";
        }, 3000)

    }, []);



  return (
    <div>
      {/* Salary is : <span id='sal'> {sallary} </span> way 1 */}


      Salary is : <span ref={spanEl}> {sallary} </span>
    </div>
  )
}

export default Hookss
