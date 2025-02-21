import React from 'react'

//rafc short hand for creating template for component with arrow

// JSX = html + javascript
// There are some specific rules
// 1. One single root element, example <div></div> eller fragment <></>
// 2. Always using closing tag
// 3. html attributes with camelCase + class -> className
// 4. {} open the world to javascript.

const element = <h3>Hej David Borg</h3>

const elements = [
  element,
  element,
  element,
  element,
  element,
  element
]

const user = {
  firstName: 'Matilda',
  lastName: 'Sundqvist'
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {user.firstName} {user.lastName}</h1>
  } else {
    return <h1>Hello, Stranger</h1>
  }
}


const Jsx = () => {
  return (
    <>
        {/* JSX section */}
        {/* Display plain text */}
        <h4>Hello, Manuel Lopez!</h4>
        <br />

        {/* Display an element through a variable */}
        {element}

        {/* Display an element through a function */}
        {getGreeting(user)}
        {getGreeting()}

        {/* Display elements through looping an array */}
        {elements}
        {
          elements.map( e => {
              return <p>{e}</p>
          } )
        }
    </>
  )
}

export default Jsx
