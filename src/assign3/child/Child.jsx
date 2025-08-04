import React from 'react';

export default function Child({ onOperate, result }) {
  return (
    <div>
      <button onClick={() => onOperate('+')}>Addition + </button>
      <button onClick={() => onOperate('-')}>Subtraction -</button>
      <button onClick={() => onOperate('*')}>Multiplication *</button>
      <h3>Result: {result !== null ? result : 'No calculation yet'}</h3>
    </div>
  );
}
