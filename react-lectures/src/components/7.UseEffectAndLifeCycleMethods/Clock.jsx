import { useEffect } from "react";
import { useState } from "react"

const Clock = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  let intervalId = ''

  useEffect( () => {
    console.log("setting title")
    document.title = `You have clicked ${count} times`;
  }, [count]);

  useEffect( () => {
    // Step2: Runs after rendering & commit 
    intervalId = setInterval(
        tick,
        1000
    )
    console.log("setting interval")

    // Step3: Runs when DOM is removed/unmounted
    return () => { 
        console.log("clear interval")
        clearInterval(intervalId) 
    }
  }, []); // Step 4: Dependency list - Empty list means that this useEffect is only triggered once after first rendering.

  function tick() {
    console.log('tick');
    setDate(new Date());
  }

  // Step 1: Rendering and understanding variables used
  return (
    <div>
      {date.toLocaleTimeString()}
      <br />
      <button onClick={() => {setCount(count + 1)}}>Increment: {count}</button>
    </div>
  )
}

export default Clock
