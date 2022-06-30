import React from 'react'
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className='headerContainer'>
            <div className='headerLeft'>
                <span className='logo'>Social Media</span>
            </div>
            <div className='headerCenter'>
                <div className='searchBar'>
                    <SearchIcon className='searchIcon' />
                    <input className='searchInput' placeholder='Search anything...' />
                </div>
            </div>
            <div className='headerRight'>
                <div className='rightIcon'><PersonIcon /></div>
                <div className='rightIcon'><MessageIcon /></div>
                <div className='rightIcon'><NotificationsIcon /></div>
                <img className='rightProfilePic' src='https://i.pinimg.com/736x/e9/e2/78/e9e2787d0cb55d570fe1c76843506759.jpg' alt=''/>
            </div>

        </div>
    )
}

export default Header