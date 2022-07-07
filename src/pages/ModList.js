import React from 'react';
import backgroundImg from '../img/background/falcolaser.jpg';
import ModListTable from '../components/ModListTable';

//  {feature:"", price:""},

const colorArray = [
  { feature: "Black", price: "$60" },
  { feature: "Indigo", price: "$60" },
  { feature: "Indigo / Clear", price: "$60" },
  { feature: "Platinum", price: "$60" },
  { feature: "Spice Orange", price: "$65" },
  { feature: "Smash Ultimate Black", price: "$65" },
  { feature: "Emerald Blue", price: "$85" },
  { feature: "JP White", price: "$85" },
  { feature: "Smash 4 White", price: "$85" },
  { feature: "Smash 4 Black", price: "$85" },
];

const notchArray= [
  {feature:"Shield Drop Notches (non-UCF)", price:"$15", oem: true}, 
  {feature:"Wavedash Notches", price:"$40"},
  {feature:"Shield Drop + Wavedash Hybrid Notches (non-UCF)", price:"$45", oem: true}, 
  {feature:"North + West + East Firefox Angles (max firefox for 3 cardinals, max wavedash, shield drop)", price:"$90"}, 
  {feature:"Full Firefox Gate / Hybrid Gate (max firefox, max wd, min wavedash, shield drop)", price:"$100"}, 
];

const miscArray = [
  { feature: "Stickbox Replacement", price: "$5", oem: true },
  { feature: "Potentiometer Replacement", price: "$20", oem: true },
  { feature: "Snapback Capacitors", price: "$5/axis", oem: true },
  { feature: "Adjustable No-Reset Snapback Module", price: "$25", oem: true },
  { feature: "Hard Tactile Z button", price: "$8" },
  { feature: "Soft Tactile Z button", price: "$10" },
  { feature: "Paracord Cable", price: "$35" },
  { feature: "Cut Springs", price: "$3" },
  { feature: "Lubed Triggers", price: "$5" },
  { feature: "Annealed Springs", price: "$5" },
  { feature: "Remove L/R/Z Spring", price: "Free" },
  { feature: "Remove Rumble Pack", price: "Free" },
];

// const modListArray = [
//   {feature:"T3 Stickbox Replacement", price:"$5"},
//   {feature:"T1 / T2 Stickbox Replacement", price:"$10"},
//   {feature:"Potentiometer Replacement (Slightly Used, but no PODE)", price:"$10"},
//   {feature:"Potentiometer Replacement (Factory New)", price:"$20"},
//   {feature:"Snapback Modules (No Reset, Adjustable, both axis)", price:"$25"},
//   {feature:"Snapback Capacitors (per axis, X Y Start on Plugin)", price:"$5"},
//   {feature:"Tactile Z", price:"$7.50"},
//   {feature:"Tactile Z (Soft, 100g similar to OEM Z)", price:"$10"},
//   {feature:"Trigger Plugs (Request Half or Full Plugs)", price:"$10"},
//   {feature:"Parry Triggers / Digital to Analog Trigger Press (per trigger)", price:"$15"},
//   {feature:"Paracord Cable (Copper Shielding intact for short cables, removed for long cables)", price:"$35"},
// ];

// const notchArray= [
//   {feature:"Shield Drop Notches (non-UCF)", price:"$15"}, 
//   {feature:"Wavedash Notches", price:"$25"},
//   {feature:"Shield Drop + Wavedash Hybrid Notches (non-UCF)", price:"$45"}, 
//   {feature:"North + West + East Firefox Angles (max firefox for 3 cardinals, max wavedash, shield drop)", price:"$70"}, 
//   {feature:"Full Firefox Gate / Hybrid Gate (max firefox, max wd, min wavedash, shield drop)", price:"$80"}, 
// ];

// const tensionModArray =[
//   {feature:"Lubed Triggers",price:"*"},
//   {feature:"Trigger Springs Cut or Removed",price:"*"},
//   {feature:"Z Button Spring Removed",price:"*"},
//   {feature:"Trigger Pad Perforation",price:"*"},
//   {feature:"Face Button Pad Perforation",price:"*"},
//   ];

function ModList(){
  return(
    <React.Fragment>
      <img src={backgroundImg} className="bg" alt="falco laser background"/>
      <h1 className="pageTitle">MOD LIST</h1>
      <div className="pageBody modListBody container">
        <p className="pageNote"><i>Domestic shipping done through USPS or UPS. International shipping is typically ~$20 and takes ~1-3 weeks. Please contact me for more details.</i></p>
        <ModListTable
          tableTitle= "Base Controller Colors"
          modListArray={colorArray}/>
        
        <ModListTable
          tableTitle= "Notches"
          modListArray={notchArray}/>
        
        <ModListTable
          tableTitle= "Miscellaneous Mods"
          modListArray={miscArray}/>

        {/* <p className="pageNote"><i>* 1 tension mod free of charge w/ a commission,<br/>
        2 tension mods is $2.50 total,<br/>
        3+ tension mods is $5.00 total.</i></p> */}
      </div>
    </React.Fragment>
  )
}

export default ModList;