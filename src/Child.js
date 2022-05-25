import React, { useEffect } from 'react';
const Child = ({ childtoparent }) => {
  let data = 'shankar';
  useEffect(() => {
    childtoparent(data);
  }, []);
  return (
    <div>{/* <button onClick={() => childtoparent(data)}>send</button> */}</div>
  );
};
export default Child;
