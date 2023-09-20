import React from 'react';

function Player(props){
  return(                  
    <div className="player">
      {/* <div className="rank">
        <span className="current">Current</span>
        <div className="socalnumber">
          <span className="socal">SoCal</span>#
          <span className="number">{props.playerRank}</span>
        </div>
      </div> */}
      <img className="playerPic img--med" src={props.playerImg} alt={props.playerTag}/>
      <h5 className="playerTag">{props.playerTag}</h5>
    </div>
    )
}

export default Player;