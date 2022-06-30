import React, { useState } from 'react'
import './Message.css'
import Giphy from '../Giphy/Giphy';
import GifIcon from '@mui/icons-material/Gif';

function Message() {
    const [showGif, setShowGif] = useState(false);
    const [gifClick, setGifClick] = useState(null)

    const messageGif = (result) => {
        setGifClick(result)
    }
    console.log(gifClick);
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
                <div className='messageGif'>
                    {gifClick ? <img src={gifClick.images.fixed_height.url} alt="gif" /> : <div />}

                </div>
                <hr className="MessageHr" />
                <div className="messageBottom">
                    <div className='gif'>
                        <div className='loadGifButton' onClick={() => setShowGif(!showGif)}>
                            <GifIcon htmlColor="tomato" className="gifIcon" />
                            <span className="messageOptionText">Insert Gif</span>
                        </div>
                        {showGif ? <Giphy messageGif={messageGif} /> : <div />}
                    </div>

                    <button className="postButton">Post</button>
                </div>
            </div>
        </div>

    )
}

export default Message