import React from 'react'
import './Message.css'
import GifIcon from '@mui/icons-material/Gif';

function Message() {
    return (
        <div className="message">
            <div className="messageWrapper">
                <div className="messageTop">
                    <img className="messageProfileImg" src="/assets/dp.jpeg" alt="" />
                    <input
                        placeholder="Write Something..."
                        className="messageInput"
                    />
                </div>
                <hr className="MessageHr" />
                <div className="messageBottom">
                    <div className='gif'>
                        <GifIcon htmlColor="tomato" className="gifIcon" />
                        <span className="messageOptionText">Insert Gif</span>
                    </div>

                    <button className="postButton">Post</button>
                </div>
            </div>
        </div>

    )
}

export default Message