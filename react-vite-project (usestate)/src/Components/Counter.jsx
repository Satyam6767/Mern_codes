// import React, { useState } from 'react'

// function Counter() {
//     let [count, setCount] = useState(0);


//     function handleclick(){
//         setCount(count+1)
//     }

//   return (
//     <div>
//       <button onClick={handleclick}>Incresse - {count} </button>
//     </div>
//   )
// }

// export default Counter





import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};


export default Counter
