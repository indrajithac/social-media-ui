import React from 'react'
import Message from '../Message/Message'
import Posts from '../Posts/Posts'
import './Feed.css'

function Feed() {
  return (
    <div className='feed'>
        <div className='feedLeftBar'></div>
        <div className='feedPost'>
            <Message/>
            <Posts/>
        </div>
        <div className='feedRightBar'></div>

        
    </div>
  )
}

export default Feed