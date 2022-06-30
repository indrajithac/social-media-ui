import React, { useEffect, useState } from 'react'
import './Giphy.css'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';



function Giphy() {
    const [gifs, setGifs] = useState([])
    const [gifSearch, setGifSearch] = useState("")

    //for fetching gifs from giphy.com
    const handleSubmit = async (e) => {
        e.preventDefault();
        const results = await axios("https://api.giphy.com/v1/gifs/search", {
            params: {
                api_key: "Kx0T9kk2dQCRk03BGGM5OVBDclmSOIEl",
                q: gifSearch,
                limit: 15
            }
        });

        console.log(results.data.data);
        setGifs(results.data.data);


    }
   
  

    const rendergifs = () => {
        return gifs.map(gif => {
            return (
                <div key={gif.id} className='gifImg' >
                    <img src={gif.images.fixed_width.url} />
                </div>
            );
        });
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