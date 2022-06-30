import React, { useState } from 'react'
import './Message.css'
import Giphy from '../Giphy/Giphy';
import GifIcon from '@mui/icons-material/Gif';

function Message(props) {
    const [showGif, setShowGif] = useState(false);
    const [gifClick, setGifClick] = useState(null);
    const [message, setMessage] = useState("")


    const messageGif = (result) => {
        setGifClick(result)
    }

    const postHandler = (e) => {
        e.preventDefault();
        if (message === "" || gifClick === null) {
            alert("enter message and insert a gif")

        } else {
            props.fetchPost({message,gifClick})
            setMessage("");
            setGifClick(null);

        }
    }

    return (
        <div className="message">
            <form onSubmit={postHandler}>
                <div className="messageWrapper">
                    <div className="messageTop">
                        <img className="messageProfileImg" src="/assets/dp.jpeg" alt="" />
                        <input
                            value={message}
                            placeholder="Write Something..."
                            className="messageInput"
                            onChange={(e) => setMessage(e.target.value)}
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
            </form>
        </div>

    )
}

export default Message