import React from 'react'
import Avatar from './Avatar';
import Userinfo from './Userinfo';

const Comment = ({author, text, date}) => {
  return (
    <div>
        {/* Version 1: before refactoring */}
        {/* <div className="UserInfo">
            <img className="Avatar"
                src={author.avatarUrl}
                alt={author.name}
            />
            <div className="UserInfo-name">
                {author.name}
            </div>
        </div>  */}

        {/* Version 2: refactoring to avatar component */}
        {/* <div className="UserInfo">
            <Avatar author={author} />
            <div className="UserInfo-name">
                {author.name}
            </div>
        </div>  */}

        {/* Version 3: Refactoring to Userinfo component */}
        <Userinfo author={author} />

        <div className="Comment-text">
            {text}
        </div>
        <div className="Comment-date">
            {formatDate(date)}
        </div>
    </div>
  )
}

function formatDate(date) {
    return date.toLocaleDateString();
}

export default Comment
