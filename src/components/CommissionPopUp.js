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
            className="button oemGCC"
            onClick={(e) => handleClick(e)}
          >
            OEM GCC
          </a>
        </div>
        <p className="commissionFootnote">*For questions about the differences between a OEM GCC & a PhobGCC, please refer to the FAQ.</p>
      </div>
    </div>
  );
}

export default CommissionPopUp;