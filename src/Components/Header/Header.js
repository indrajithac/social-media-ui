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
                <img className='rightProfilePic' src='/assets/dp.jpeg' alt=''/>
            </div>

        </div>
    )
}

export default Header