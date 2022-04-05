import React from 'react';
import PropTypes from 'prop-types';
import premade1 from '../img/premades/premade1.jpg';

function PremadeController(props){
  return(
    <div className="premadeControllerContainer">
      <div className="premadeImgWrapper">
        <img className="premadeImg" src={props.premadeImgURL} alt="Premade Controller 1"/>
      </div>
      <div className="premadeInfoContainer">
        <h2>Specs:</h2>
        <div className="premadeSpecsWrapper">
          <ul className="premadeSpecs">
            {
              props.premadeSpecList.map((spec,index) =>
                <li>{spec}</li>
              )
            }
            {/* <li>Indigo Top / JP White Bottom</li>
            <li>Brand New T3 board from an boxed Ult edition</li>
            <li>Wavedash Notches + Vanilla Shield Drop</li>
            <li>No Reset + Adjustable Snapback Module</li> */}
          </ul>
        </div>
        <div className="premadePrice">
          <h2 className="">${props.premadePrice}</h2>
          {/* <button className="premadeButton">Click to DM about this controller</button> */}
        </div>
      </div>
    </div>
  )
}

export default PremadeController;