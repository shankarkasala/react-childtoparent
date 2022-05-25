import React, { useState } from 'react';
import './style.css';
import Child from './Child';
export default function App() {
  const [data, setData] = useState('');
  const childtoparent = (childdata) => {
    setData(childdata);
  };
  return (
    <div>
      {data}
      <Child childtoparent={childtoparent} />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
