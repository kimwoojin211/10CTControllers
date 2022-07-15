import React from 'react';

function Player(props){
  return(                  
    <div className="player">
      <img className="playerPic img--med" src={props.playerImg} alt={props.playerTag}/>
        <h5 className="playerTag">{props.playerTag}</h5>
    </div>
    )
}

export default Player;