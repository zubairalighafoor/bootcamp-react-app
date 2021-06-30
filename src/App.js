import {useState} from 'react';
import Count from './Count';
import './App.css';
function App() {
  let [count,setCount]=useState(0);
  let [day,setDay]=useState(true);
  return (
    <div className={day?'day':'night'}>
      <h1>Day Time = {day?"Morning":"Night"}</h1>
      <Count counter={count}/>
      <button onClick={()=>{setCount(count+1)}}>Add</button>
      <button onClick={()=>{setDay(!day)}}>Update Day</button>
    </div>
  );
}

export default App;
