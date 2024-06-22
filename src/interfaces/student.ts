export interface IStudent {
    
    _id?: string;
    studentId: string;
    name: string;
    age:number;
    phone: number;
    email: string;
}
/*import React, { useState, useEffect } from 'react';

function IncrementButton() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (count > 0) {
      setMessage('Data is updated');
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
     .. .<button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{message}</p>
    </div>
  );
}

export default IncrementButton;*/