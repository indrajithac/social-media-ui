import React, { useState } from 'react'
import Message from '../Message/Message'
import Posts from '../Posts/Posts'
import './Feed.css'

function Feed() {
  const [post, setPost] = useState([])

  const fetchPost=(result)=>{
    setPost([...post,result])
  }

  return (
    <div className='feed'>
      <div className='feedLeftBar'></div>
      <div className='feedPost'>
        <Message fetchPost={fetchPost}/>
        <Posts posts={post}/>
      </div>
      <div className='feedRightBar'></div>


    </div>
  )
}

export default Feed