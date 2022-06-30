import React from 'react'
import './Posts.css'

function Posts(props) {

    return (
        props.posts.slice(0).reverse().map((post) => {
            return (
                <div className="post">
                    <div className="postWrapper">
                        <div className="postTop">
                            <div className="postTopLeft">
                                <img
                                    className="postProfileImg"
                                    src="https://i.pinimg.com/736x/e9/e2/78/e9e2787d0cb55d570fe1c76843506759.jpg"
                                    alt=""
                                />
                                <span className="postUsername">
                                    Username
                                </span>
                                <span className="postDate"> 5 min ago</span>
                            </div>

                        </div>
                        <div className="postCenter">
                            <span className="postText">{post.message}</span>
                            <img className="postImg" src={post.gifClick.images.fixed_height.url} alt="loading.." />
                        </div>

                    </div>
                </div>
            )
        })



    )
}

export default Posts