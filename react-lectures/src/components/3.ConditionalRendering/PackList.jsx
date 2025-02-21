import React from 'react'
import Item from './Item'

const PackList = () => {
  return (
    <>
        <h2>My PackList</h2>
        <ul>
            <Item stuff='Computer' isPacked={true} />
            <Item stuff='Training Gear' isPacked={true} />
            <Item stuff='Ear Plugs' isPacked={false} />
        </ul>
    </>
  )
}

export default PackList
