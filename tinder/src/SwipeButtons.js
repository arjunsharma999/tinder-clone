import React from 'react'
import "./SwipeButton.css";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButton() {
  return (
    <div className='SwipeButton'>
    <IconButton className='swipeButton__repeate'>
        <ReplayIcon fontSize='larger'/>
    </IconButton>
    <IconButton className='swipeButton__left'>
        <CloseIcon fontSize='larger'/>
    </IconButton>
    <IconButton className='swipeButton__star'>
        <StarRateIcon fontSize='larger'/>
    </IconButton>
    <IconButton className='swipeButton__right'>
        <FavoriteIcon fontSize='larger'/>
    </IconButton>
    <IconButton className='swipeButton__lightning'>
        <FlashOnIcon fontSize='larger'/>
    </IconButton>


    </div>
  )
}

export default SwipeButton;