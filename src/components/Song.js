import React from 'react';

export const Song  = (props) => {
    return (
        <div className="song-container "> 
        <img alt={props.currentSong.name} src={props.currentSong.cover}></img>
        <h1>{props.currentSong.name} </h1>
        <h2> {props.currentSong.artist} </h2>
        </div>
    )
}
