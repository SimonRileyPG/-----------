import React from 'react'
import Profile from './Profile'
import { useState , useEffect} from 'react';
function App() {
  const [dice,setDice] = useState(1)
  const [dice2,setDice2] = useState(1)
  function cl(){
    const newNum= [Math.ceil(Math.random() * 6)];
    const newN2um= [Math.ceil(Math.random() * 6)];
    setDice2(newN2um)
    setDice(newNum)
  }
  
  return (
    <div>
      <div>{dice}</div>
      <div>{dice2}</div>
      <button onClick={cl}></button>
    </div>
  );
}


export default App
