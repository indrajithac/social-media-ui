import React, { useState } from 'react'
import './Message.css'
import Giphy from '../Giphy/Giphy';
import GifIcon from '@mui/icons-material/Gif';

function Message() {
    const [showGif,setShowGif]=useState(false)
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
                        <div className='loadGifButton' onClick={()=>setShowGif(!showGif)}>
                            <GifIcon htmlColor="tomato" className="gifIcon" />
                            <span className="messageOptionText">Insert Gif</span>
                        </div>
                        {showGif ? <Giphy /> : <div/>}
                    </div>

                    <button className="postButton">Post</button>
                </div>
            </div>
        </div>

    )
}

export default Message