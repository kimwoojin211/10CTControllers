import React from 'react';
import backgroundImg from '../img/background/falcolaser.jpg';
import ModListTable from '../components/ModListTable';

const modListArray = [
  {feature:"T3 Stickbox Replacement", price:"$5"},
  {feature:"T1 / T2 Stickbox Replacement", price:"$10"},
  {feature:"Potentiometer Replacement (Slightly Used, but no PODE)", price:"$10"},
  {feature:"Potentiometer Replacement (Factory New)", price:"$20"},
  {feature:"Snapback Modules (No Reset, Adjustable, both axis)", price:"$25"},
  {feature:"Snapback Capacitors (per axis, X Y Start on Plugin)", price:"$5"},
  {feature:"Tactile Z", price:"$7.50"},
  {feature:"Tactile Z (Soft, 100g similar to OEM Z)", price:"$10"},
  {feature:"Trigger Plugs (Request Half or Full Plugs)", price:"$10"},
  {feature:"Parry Triggers / Digital to Analog Trigger Press (per trigger)", price:"$15"},
  {feature:"Paracord Cable (Copper Shielding intact for short cables, removed for long cables)", price:"$35"},
  
];

const notchArray= [
  {feature:"Shield Drop Notches", price:"$15"}, 
  {feature:"Wavedash Notches", price:"$25"},
  {feature:"Shield Drop + Wavedash Hybrid Notches", price:"$45"}, 
  {feature:"North + West + East Firefox Angles (max firefox for 3 cardinals, max wavedash, shield drop)", price:"$70"}, 
  {feature:"Full Firefox Gate / Hybrid Gate (max firefox, max wd, min wavedash, shield drop)", price:"$80"}, 
];

const tensionModArray =[
  {feature:"Lubed Triggers",price:"*"},
  {feature:"Trigger Springs Cut or Removed",price:"*"},
  {feature:"Z Button Spring Removed",price:"*"},
  {feature:"Trigger Pad Perforation",price:"*"},
  {feature:"Face Button Pad Perforation",price:"*"},
  ];

function ModList(){
  return(
    <React.Fragment>
      <img src={backgroundImg} className="bg" alt="falco laser background"/>
      <h1 className="pageTitle">MOD LIST</h1>
      <div className="pageBody modListBody container">
        <p className="pageNote"><i>Shipping can be done through USPS or UPS. Please contact me for international shipping.</i></p>
        <ModListTable
          tableTitle= "General"
          modListArray={modListArray}/>
        
        <ModListTable
          tableTitle= "Notches"
          modListArray={notchArray}/>
        
        <ModListTable
          tableTitle= "Tension Mods"
          modListArray={tensionModArray}/>

        <p className="pageNote"><i>* 1 tension mod free of charge w/ a commission,<br/>
        2 tension mods is $2.50 total,<br/>
        3+ tension mods is $5.00 total.</i></p>
      </div>
    </React.Fragment>
  )
}

export default ModList;