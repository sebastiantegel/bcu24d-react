import React from 'react'

const Item = ({stuff, isPacked}) => {
    // if (isPacked) {
    //     return <li>{stuff} ✔</li>
    // } else {
    //     return <li>{stuff}</li>
    // }

    // return isPacked 
    //     ? <li>{stuff} ✔</li> 
    //     : <li>{stuff}</li>

    // return (<li>{`${stuff} ${isPacked ? '✔':''}`}</li>)

    return (<li>{stuff} {isPacked && '✔'}</li>)
}

export default Item
