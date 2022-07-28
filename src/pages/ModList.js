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
import Potentiometers from "../img/FAQ&ModList/potentiometers.jpg";
import SnapbackCapacitor from "../img/FAQ&ModList/snapbackcap.jpg";
import SnapbackModule from "../img/FAQ&ModList/snapback.png";
import HardZ from "../img/FAQ&ModList/hardZ.jpg";
import SoftZ from "../img/FAQ&ModList/softZ.jpg";
import Paracord from "../img/FAQ&ModList/paracord.jpg";
import CutSprings from "../img/FAQ&ModList/cutsprings.jpg";
import TriggerLube from "../img/FAQ&ModList/3M.png";
import Springless from "../img/FAQ&ModList/springless.jpg";
import AnnealedSpring from "../img/FAQ&ModList/annealedspring.jpg";
import NoRumble from "../img/FAQ&ModList/norumble.jpg";

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
  {feature:"Shield Drop Notches (non-UCF)", price:"$15", image: ShielddropNotches, description: "Helps execute shield drops more consistently. Location of notches indicated by the red circles.",oem: true}, 
  {feature:"Wavedash Notches", price:"$40", image: WavedashNotches, description: "Allows for maximum wavedashes and a couple of firefox angles. Location of notches indicated by the red circles."},
  {feature:"Shield Drop + Wavedash Hybrid Notches (non-UCF)", price:"$45", image: HybridNotches, description: "Combination of Shield drop & Wavedash notches. Refer to each mod's description for their respective details. Location of notches indicated by the red circles.", oem: true}, 
  {feature:"Southless Firefox Angles", image: SouthlessNotches, price:"$90", description: "Allow for max firefox angles near the north, west, and east cardinals, as well as max wavedash and shield drops. Location of notches indicated by the red circles."}, 
  {feature:"Full Firefox Gate / Hybrid Gate", image: FullNotches, price:"$100", description: "Notches near every cardinal direction. Allow for max firefox angles, max and min wavedash angles, and shield drops. Location of notches indicated by the red circles."}, 
];

const miscArray = [
  { feature: "Stickbox Replacement", price: "$5", image: Stickbox, description:"Replaces the stickbox, the part that provides control for either the analog stick or the C-stick, with a new T3 stickbox.",oem: true },
  { feature: "Potentiometer Replacement", price: "$20", image: Potentiometers, description: "Replaces the potentiometer with new Noble potentiometers, the same brand as originally manufactured. Refer to the PODE section in the FAQ for more info on potentiometers.", oem: true },
  { feature: "Snapback Capacitors", price: "$5/axis", image: SnapbackCapacitor, description:"Removes Snapback. 1 capacitor handles one of the X/Y axis, 2 capacitors are required for both.", oem: true },
  { feature: "Adjustable No-Reset Snapback Module", price: "$25", image: SnapbackModule, description: "Upgraded versions of the basic snapback capacitors.", oem: true },
  { feature: "Hard Tactile Z button", price: "$8", image: HardZ, description: "Replaces the Z button with a third-party button that audibly clicks and requires slightly more force to press."},
  { feature: "Soft Tactile Z button", price: "$10", image: SoftZ, description: "Replaces the Z button a clicky button from a Wii Classic Controller. The amount of force needed to press down is roughly the same."},
  { feature: "Paracord Cable", price: "$35", image: Paracord, description:"Removal of the original cable rubber and replaced with a 550 paracord which tangles less and is easier to untangle. Multiple colors available."},
  { feature: "Cut Springs", price: "$3", image: CutSprings, description: "Springs inside L/R buttons are cut, reducing the tension and force required to push down." },
  { feature: "Lubed Triggers", price: "$5", image: TriggerLube, description:"3M Lube applied to the tube of the trigger and the trigger spring for less resistance."},
  { feature: "Annealed Springs", price: "$5", image: AnnealedSpring, description: "L/R/Z springs are fire treated to make the springs rattle less and a little softer to press." },
  { feature: "Remove L/R/Z Spring", price: "Free", image: Springless, description: "Removing L/R springs removes all tension needed to press down and completely disables the analog input for the L/R button. Removing the Z spring removes the angled press of the button, making the Z input more evenly activated wherever the button is pushed." },
  { feature: "Remove Rumble Pack", price: "Free", image: NoRumble, description: "Removes the rumble motor pack within the gamecube controller, making the controller noticeably lighter." },
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
      {/* <img src={backgroundImg} className="bg" alt="falco laser background"/> */}
      <div className="pageBody modListBody container">
        <h1 className="pageTitle">MOD LIST</h1>
        {/* <p className="pageNote"><i>Domestic shipping done through USPS or UPS. International shipping is typically ~$20 and takes ~1-3 weeks. Please contact me for more details.</i></p> */}
        <p className="pageNote"><i>Hover over (or press on mobile) an item on the modlist to view an image and/or a description of the listed mod.</i></p>
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