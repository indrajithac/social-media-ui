import React, { useEffect, useState } from 'react'
import './Giphy.css'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';



function Giphy() {
    const [gifs, setGifs] = useState([])

    //for fetching gifs from giphy.com
    useEffect(() => {
        const fetchData = async () => {
            const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key: "Kx0T9kk2dQCRk03BGGM5OVBDclmSOIEl",
                    limit: 100
                }
            });

            console.log(results.data.data);
            setGifs(results.data.data);
        }
        fetchData();
    }, [])
    console.log(gifs);
    return (
        <div className='gifContainer'>
            <div className='gifSearchBar'>
                <SearchIcon className='searchIcon' />
                <input className='searchInput' placeholder='Search gifs...' />
            </div>
            <div>
              
            </div>
        </div>
    )
}

export default Giphy