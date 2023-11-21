import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <Button variant="contained" color="success" onClick={handleIncrement}>Increment</Button>
    </div>
  );
};

export default Counter;
