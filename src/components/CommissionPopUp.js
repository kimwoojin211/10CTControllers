import React from 'react';

function CommissionPopUp(props){
  const {onCommissionClicked} = props;

  function handleClick(event){
    if(event.target.className === "closeButton" || event.target.className === "fullPageOverlay commissionOverlay"){
      onCommissionClicked(false);
    }
    // console.log(event.target.className);
  }

  return (
    <div
      className="fullPageOverlay commissionOverlay"
      onClick={(e) => handleClick(e)}
    >
      <div className="commissionContainer">
        <p className="closeButton">X</p>
        <h2>Select the type of controller you'd like to commission.</h2>
        <div className="commissionButtonContainer">
          <a
            href="https://forms.gle/oHdcpBJLUZG68md66"
            className="button phobGCC"
            onClick={(e) => handleClick(e)}
          >
            PhobGCC
          </a>
          <a
            href="https://forms.gle/eU3eYAq7BWymBMR76"
            className="button standardGCC"
            onClick={(e) => handleClick(e)}
          >
            Standard GCC
          </a>
        </div>
      </div>
    </div>
  );
}

export default CommissionPopUp;