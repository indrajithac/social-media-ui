import React, { useState } from 'react'
import './Giphy.css'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';



function Giphy(props) {
    console.log(props);
    const [gifs, setGifs] = useState([])
    const [gifSearch, setGifSearch] = useState("")
    const [loading, setLoading] = useState(false)

    //for fetching gifs from giphy.com
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const results = await axios("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "Kx0T9kk2dQCRk03BGGM5OVBDclmSOIEl",
                    q: gifSearch,
                    limit: 15
                }
            });

            console.log(results.data.data);
            setGifs(results.data.data);

        } catch (error) {
            console.log(error);
            alert("Something went wrong")

        }
        setLoading(false);
    }



    const rendergifs = () => {
        if (loading) {
            return (
                <p>Loading gifs..</p>
            )
        } else {
            return gifs.map(gif => {
                return (
                    <div key={gif.id} className='gifImg' onClick={()=>props.messageGif(gif)}>
                        <img src={gif.images.fixed_width_small.url} alt="" />
                    </div>
                );
            });
        }

    }

    return (
        <div className='gifContainer'>
            <div className='gifSearchBar'>
                <input className='searchInput' placeholder='Search gifs...' onChange={(e) => setGifSearch(e.target.value)} />
                <button onClick={handleSubmit} className="searchButton">
                    <SearchIcon className='searchIcon' />
                </button>
            </div>
            <div>
                <div className='renderGifs'>
                    {rendergifs()}
                </div>
            </div>

        </div>
    )
}

export default Giphy