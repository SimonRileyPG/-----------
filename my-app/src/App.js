import React from 'react'
import Profile from './Profile'
import { useState , useEffect} from 'react';
function App() {
  const [buttonAdd, setButtonAdd] = useState(0);
  const [buttonColor, setButtonColor] = useState('red');
  function fear(){
    if(buttonAdd < 10){
      const colors = ['red','green','blue']
      const randomColor=colors[Math.floor(Math.random()*colors.length)]
    setButtonAdd(buttonAdd + 1);
    setButtonColor(randomColor)
    }
  }
  function fe1ar(){
    setButtonAdd(buttonAdd - 1);
  }
  return (
    <div style={{backgroundColor: buttonColor}}>
      <button onClick={fear}>+</button>
      <p>{buttonAdd}</p>
      <button onClick={fe1ar}>-</button>
    </div>
  )
}


export default App
