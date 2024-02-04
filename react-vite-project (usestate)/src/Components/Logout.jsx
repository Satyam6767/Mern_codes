import React, { useState } from 'react';
import Person from './Person';

function Logout() {
  let [username, setUsername] = useState("mohit");

  function handleClick() {
    setUsername("anonymous"); // Use setUsername to update the state
  }

  return (
    <div>
      <h1>Logout page</h1>
      <Person Name={username} age="22" color="red" />
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default Logout;
