import React from 'react';
import PremadeController from "../components/PremadeController";
import premade1 from '../img/premades/premade1.jpg';
import premade2 from '../img/premades/premade2.jpg';

const speclist1 =
  <React.Fragment>
                <li>Indigo Top / JP White Bottom</li>
            <li>Brand New T3 board from an boxed Ult edition</li>
            <li>Wavedash Notches + Vanilla Shield Drop</li>
            <li>No Reset + Adjustable Snapback Module</li>
  </React.Fragment>

const speclist2 =
  <React.Fragment>
            <li>Sample Spec</li>
            <li>Sample Spec</li>
            <li>Sample Spec</li>
            <li>Sample Spec</li>
  </React.Fragment>

function Premades(){
  return(
    <React.Fragment>
      <h1 className="pageTitle">PREMADES</h1>
      <PremadeController 
        premadeImgURL={premade1}
        premadeSpecList={speclist1}
        premadePrice={130}
        />
      <PremadeController 
        premadeImgURL={premade2}
        premadeSpecList={speclist2}
        premadePrice={100}
        />
    </React.Fragment>
  )
}

export default Premades;  