import React from 'react'
import { Link } from 'react-router-dom'

const HomePage:React.FC = () => {
  return (
    <><button> <Link to="/student">students</Link></button></>
  )
}

export default HomePage  /* <>
    <button title ="title" onClick={addData} className={'number ${data'}>   </button>
      <div> Incremented data: {data}</div>
      <br />
      <button onClick={decrementData} className={'decrement ${numberData}'}>   </button>
      <div>decremented data: {numberData}</div>
    {numberArray.map((item,i)=>{
    })}
    {people.map((item,i)=>{
  return (
    <div key={i}>
          <div> name: {item.name}</div>
          <div> Age: {item.age}</div>
          <br />
          </div>
         );
    })}  
      </>

  );}

*/