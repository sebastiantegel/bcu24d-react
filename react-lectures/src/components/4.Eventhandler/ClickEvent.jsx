import React from 'react'

const handleClick = (e) => {
    e.target.innerText = "is clicked";
    // console.log(e.target.innerText + " button is clicked");
}

const ClickEvent = () => {
  return (
    // <button onClick={handleClick}>Click me</button>
    <button onClick={(e) => {e.target.innerText = "Is Clicked with embedded handler"}}>Click me</button>
  )
}

export default ClickEvent
