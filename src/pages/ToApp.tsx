import React ,{useState,useEffect}from 'react'
const[val,setVal]=useState(0);
useEffect(()=>{
    console.log("test");
})
const ToApp :React.FC= () => {
  return (
    //<button onClick={() => setCount(var + 1)}>Increment</button>
    <div>ToApp</div>
  )
}

export default ToApp;