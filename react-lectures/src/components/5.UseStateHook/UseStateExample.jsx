import React, { useState } from 'react'



const UseStateExample = () => {
  //   let count = 0;
  const [count, setCount] = useState(0)
  

  const handleClick = () => {
    // count = count + 1;
    // count++;

    setCount(count + 1);

    console.log(count);
  }

  const incrementThree = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    // setCount(count + 24);
        
    console.log(count);
  }
  

  return (
    <button onClick={incrementThree}>Increment: {count}</button>
  )
}

export default UseStateExample
