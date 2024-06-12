import {useEffect,useState } from 'react';
import './App.css'

function App() {
  const [data,setData]=useState<number>(0);
  const [numberData, setNumberData] = useState<number>(0);
  const numberArray=[1,2,3,4,5,6,7,8];
  const people=[
    {name:"john" ,age:33 },
    {name:"riya" ,age:33 },
    {name:"lia" ,age:33 },];
useEffect(()=>{},
[numberData]);
const addData =()=>{

};
const decrementData=()=>{
};
  
  return (
    <>
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

  );
}

export default App;
