import React from 'react'
import Avatar from './Avatar'

const Userinfo = ({author}) => {
  return (
    <div className="UserInfo">
        <Avatar author={author} />
        <div className="UserInfo-name">
            {author.name}
        </div>
    </div>
  )
}

export default Userinfo
