import React from 'react'
import './Posts.css'

function Posts() {
    return (
        <>
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src="/assets/dp.jpeg"
                            alt=""
                        />
                        <span className="postUsername">
                            Username
                        </span>
                        <span className="postDate"> 5 min ago</span>
                    </div>
                    
                </div>
                <div className="postCenter">
                    <span className="postText">Message</span>
                    <img className="postImg" src="/assets/dp.jpeg" alt="" />
                </div>

            </div>
        </div>
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src="/assets/dp.jpeg"
                            alt=""
                        />
                        <span className="postUsername">
                            Username
                        </span>
                        <span className="postDate"> 5 min ago</span>
                    </div>
                    
                </div>
                <div className="postCenter">
                    <span className="postText">Message</span>
                    <img className="postImg" src="/assets/dp.jpeg" alt="" />
                </div>

            </div>
        </div>
        </>
        
    )
}

export default Posts