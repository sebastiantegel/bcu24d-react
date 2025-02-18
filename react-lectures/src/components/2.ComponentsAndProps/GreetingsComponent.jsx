import React from 'react'

const GreetingsComponent = ({name, imgSource}) => {
  return (
    <section>
        <h2>Hej {name}!</h2>
        <img 
            src={imgSource} 
            alt={name}
            width={200} 
        />
    </section>
  )
}

export default GreetingsComponent
