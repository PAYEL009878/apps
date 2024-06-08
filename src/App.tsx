import { useEffect,useState } from 'react';
import './App.css'

function App() {
  const [data, setdata] = useState<string>();
useEffect(()=>{
  setdata("world");
},[]);
  return (
    <>
      <div>{data}
      </div>

    </>
  );
}

export default App;
