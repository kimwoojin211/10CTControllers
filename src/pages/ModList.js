import React from 'react';
import ModListTable from '../components/ModListTable';
import backgroundImg from '../img/background/falcolaser.jpg';
import Black from '../img/conchColors/black.jpg';
import Indigo from '../img/conchColors/indigo.jpg';
import IndigoClear from '../img/conchColors/indigoClear.png';
import Platinum from '../img/conchColors/platinum.jpg';
import Orange from '../img/conchColors/orange.jpg';
import UltBlack from '../img/conchColors/ultBlack.jpg';
import Emerald from '../img/conchColors/emerald.jpg';
import White from '../img/conchColors/white.jpg';
import White4 from '../img/conchColors/white4.jpg';
import Black4 from '../img/conchColors/black4.jpg';
import ShielddropNotches from '../img/FAQ&ModList/shielddropnotches.png';
import HybridNotches from "../img/FAQ&ModList/hybridnotches.png";
import WavedashNotches from "../img/FAQ&ModList/wavedashnotches.png";
import SouthlessNotches from "../img/FAQ&ModList/southlessnotches.png";
import FullNotches from "../img/FAQ&ModList/fullnotches.png";
import Stickbox from "../img/FAQ&ModList/stickbox.jpg";
import Potentiometers from "../img/FAQ&ModList/potentiometers.png";
import SnapbackCapacitor from "../img/FAQ&ModList/snapbackcap.jpg";
import SnapbackModule from "../img/FAQ&ModList/snapback.png";
import HardZ from "../img/FAQ&ModList/hardZ.jpg";
import SoftZ from "../img/FAQ&ModList/softZ.jpg";
import Paracord from "../img/FAQ&ModList/paracord.jpg";
import CutSprings from "../img/FAQ&ModList/cutsprings.jpg";
import TriggerLube from "../img/FAQ&ModList/3M.png";
import Springless from "../img/FAQ&ModList/springless.jpg";

//  {feature:"", price:""},

const colorArray = [
  { feature: "Black", price: "$60", image: Black },
  { feature: "Indigo", price: "$60", image: Indigo  },
  { feature: "Indigo / Clear", price: "$60", image: IndigoClear  },
  { feature: "Platinum", price: "$60", image: Platinum },
  { feature: "Spice Orange", price: "$65", image: Orange },
  { feature: "Smash Ultimate Black", price: "$65", image: UltBlack },
  { feature: "Emerald Blue", price: "$85", image: Emerald },
  { feature: "JP White", price: "$85", image: White },
  { feature: "Smash 4 White", price: "$85", image: White4 },
  { feature: "Smash 4 Black", price: "$85", image: Black4 },
];

const notchArray= [
  {feature:"Shield Drop Notches (non-UCF)", price:"$15", image: ShielddropNotches, description: "Helps execute shield drops more consistently. ",oem: true}, 
  {feature:"Wavedash Notches", price:"$40", image: WavedashNotches, description: " Allows for maximum wavedashes and a couple of firefox angles."},
  {feature:"Shield Drop + Wavedash Hybrid Notches (non-UCF)", price:"$45", image: HybridNotches, description: "Combination of Shield drop & Wavedash notches.", oem: true}, 
  {feature:"Southless Firefox Angles", image: SouthlessNotches, price:"$90", description: "Allow for max firefox angles near the north, west, and east cardinals, as well as max wavedash and shield drops."}, 
  {feature:"Full Firefox Gate / Hybrid Gate", image: FullNotches, price:"$100", description: "Notches near every cardinal direction. Allow for max firefox angles, max and min wavedash angles, and shield drops."}, 
];

const miscArray = [
  { feature: "Stickbox Replacement", price: "$5", image: Stickbox, description:"Replace the box attached to the controller motherboard that controls the analog stick and C-stick.",oem: true },
  { feature: "Potentiometer Replacement", price: "$20", image: Potentiometers, description: "Same potentiometers as original manufacture. Refer to the PODE section in the FAQ for more info.", oem: true },
  { feature: "Snapback Capacitors", price: "$5/axis", image: SnapbackCapacitor, description:"Removes Snapback. A capacitor can handle one axis, two is required for both.", oem: true },
  { feature: "Adjustable No-Reset Snapback Module", price: "$25", image: SnapbackModule, description: "Upgraded versions of basic snapback capacitors.", oem: true },
  { feature: "Hard Tactile Z button", price: "$8", image: HardZ, Description: "Replaces the Z button with a third-party button that audibly clicks and requires slightly more force to press."},
  { feature: "Soft Tactile Z button", price: "$10", image: SoftZ, description: "Replaces the Z button a clicky button from a Wii Classic Controller. Amount of force needed to press is roughly the same."},
  { feature: "Paracord Cable", price: "$35", image: Paracord, description:"Removal of the original cable rubber and replaced with a 550 paracord which tangles less and is easier to untangle. Color of your choice."},
  { feature: "Cut Springs", price: "$3", image: CutSprings, description: "Springs inside L/R buttons are cut, reducing the tension and force required to push down." },
  { feature: "Lubed Triggers", price: "$5", image: TriggerLube, description:"3M Lube applied to the tube of the trigger and the trigger spring for less resistance."},
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
          tableId="color"
          modListArray={colorArray}/>
        
        <ModListTable
          tableTitle= "Notches"
          tableId="notch"
          modListArray={notchArray}/>
        
        <ModListTable
          tableTitle= "Miscellaneous Mods"
          tableId="misc"
          modListArray={miscArray}/>

        {/* <p className="pageNote"><i>* 1 tension mod free of charge w/ a commission,<br/>
        2 tension mods is $2.50 total,<br/>
        3+ tension mods is $5.00 total.</i></p> */}
      </div>
    </React.Fragment>
  )
}

export default ModList;