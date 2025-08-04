import React, { useState } from 'react';
import Child from '../child/Child';

export default function Parent() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleNum1Change = (e) => {
    setNum1(Number(e.target.value));
  };

  const handleNum2Change = (e) => {
    setNum2(Number(e.target.value));
  };

  const performOperation = (operator) => {
    let res;
    if (operator === '+') {
      res = num1 + num2;
    } else if (operator === '-') {
      res = num1 - num2;
    } else if (operator === '*') {
      res = num1 * num2;
    } else {
      res = null;
    }
    setResult(res);
  };

  return (
    <div>
      <input type="number" placeholder="Enter num1" onChange={handleNum1Change} /><br />
      <input type="number" placeholder="Enter num2" onChange={handleNum2Change} /><br />
      
      <Child onOperate={performOperation} result={result} />
    </div>
  );
}
