import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className="Header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img className='header-image'
                src='https://www.tinderpressroom.com/image/flame-gradient-RGB_tn1100-category.png'
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    );
}

export default Header;