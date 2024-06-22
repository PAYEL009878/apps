import  { useState } from 'react'

const Test1 = () => {
    const[val,setVal]=useState(0);
    useEffect(()=>{
        console.log("val change");

    }
    )
  return (<>
    <h1>
    <button onClick={()=>{setVal(val+1)}}>click{val}</button>
   
    </h1>
    <div>Test1</div>

</>
  )}
export default Test1