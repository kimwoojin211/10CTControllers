import React from 'react';

function ModListTable(props){
  return(
    <React.Fragment>
    <h4 className="modListTitle">{props.tableTitle}</h4>
        <div className="modListContainer">
          {
            props.modListArray.map((modification,index) => (
              <div className="modListItem row">
                <div className="modListFeature">
                  <span>{modification.feature}</span> {modification.oem && (<span className="oemOnly">(OEM only)</span>)}
                </div>
                <div className="modListPrice">
                  <span>{modification.price}</span>
                </div>
              </div>
            ))
          }
        </div>
    </React.Fragment>
  )
}

export default ModListTable;