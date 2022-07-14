import React, {useState} from 'react';
import ReactTooltip from 'react-tooltip';

function ModListTable(props){
  return (
    <React.Fragment>
      <h4 className="modListTitle">{props.tableTitle}</h4>
      <div className="modListContainer">
        {props.modListArray.map((modification, index) => (
          <div className="modListItem row">
            <div className="modListFeature" id={`${props.tableId}Item${index}`}>
              <span data-tip data-for={`${props.tableId}Item${index}`}>{modification.feature}{" "}
              {modification.oem && <span className="oemOnly">(OEM only)</span>}</span>
              <ReactTooltip id={`${props.tableId}Item${index}`} place="right" type="light">
                <div className="popupContainer">
                  {modification.image && <img className="img--lrg" src={modification.image}/>}
                  <span>{modification.description}</span>
                </div>
              </ReactTooltip>
            </div>
            <div className="modListPrice">
              <span>{modification.price}</span>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ModListTable;