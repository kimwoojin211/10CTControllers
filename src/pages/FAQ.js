import React, {useState} from 'react';
import Potentiometers from '../img/FAQ&ModList/potentiometers.png';

function FAQ(){
  const [selectedQuestion,setSelectedQuestion] = useState(0);
  const handleFAQClick = (ev,index) =>{
    const questionIndex = parseInt(ev.currentTarget.id[1]);
    console.log(`selectedQuestion: ${selectedQuestion}`);
    console.log(`questionIndex: ${questionIndex}`);
    if(selectedQuestion === 0 || selectedQuestion !== questionIndex){ 
      setSelectedQuestion(index);
    }
    else{
      setSelectedQuestion(0);
    }
    // console.log(`event: ${JSON.stringify(ev)}`)
  }

  return(
    <React.Fragment>
      <h1 className="pageTitle">FAQ</h1>
      {/* <h3 className="pageSubtitle">Click on a question to reveal an answer!</h3> */}
      <div className="pageBody FAQBody container">
        <div className="FAQList">
          <div className="FAQListItemContainer" key={1}>
            <div className="FAQQuestionWrapper" onClick={(ev) => handleFAQClick(ev,1)} id='q1'>
              <h2 className="FAQQuestion">About me.</h2>
            </div>
            <div className="FAQAnswerWrapper" style={{display: (selectedQuestion===1) ? 'block':'none'}}>
              <ul><li>I am a controller modder based locally in SoCal. I started modding in October 2020 by providing controllers for Asashi (current ranked #13 in Socal's PR) and have since provided controllers to more players of the SoCal region, including PR'ed players such as Suf, Casper, Venelox, Franz, and Squid.</li>
              <li>I pride myself on providing an affordable, speedy service, and my goal is to get more tournament-level controllers into more people's hands. At the moment, I try to make just enough money to get by, while working just enough so that I can still focus on university.</li>
              <li>Other than wanting to provide more affordable controllers, the biggest thing that I want for the community is <b>better knowledge about their controllers</b>. Therefore, I encourage anybody and everybody to ask me about controller related topics regarding Super Smash Bros. Melee.</li></ul>
              {/* <ul><li><p className="FAQAnswer">I am a controller modder based in SoCal that started in October of 2020 and started providing controllers to current #17th SoCal PRed player Asashi. Since then I’ve provided controllers to a lot more of the SoCal PR such as Suf, Casper, Venelox, Franz, and Squid. I pride myself on controller modding on trying to provide an affordable and speedy service and trying to get more tournament level controllers in more peoples hands. I try to make just enough money to get by and work enough that I can still focus on university. Other than wanting to provide more affordable controllers, the biggest thing that I want to provide to the community is better knowledge about their controllers and therefore I encourage anybody and everybody to ask me about controller related topics regarding Super Smash Bros. Melee.</p></li></ul> */}
            </div>
          </div>
          <div className="FAQListItemContainer" key={2}>
            <div className="FAQQuestionWrapper" onClick={(ev) => handleFAQClick(ev,2)} id='q2'>
              <h2 className="FAQQuestion">How will the controllers be shipped?</h2>
            </div>
            <div className="FAQAnswerWrapper" style={{display: (selectedQuestion===2) ? 'block':'none'}}>
              <ul>
                <li>Domestic shipping is done through USPS or UPS and takes anywhere from 2-5 business days depending on location.</li>
                <li>International shipping will typically cost ~$20 and typically takes ~1-3 weeks for delivery. </li>
                <li>Please contact me directly for more details.</li>
              </ul>
            </div>
          </div>
          <div className="FAQListItemContainer" key={3}>
            <div className="FAQQuestionWrapper" onClick={(ev) => handleFAQClick(ev,3)} id='q3'>
              <h2 className="FAQQuestion">What is a PhobGCC, and how is it different from a Goomwave?</h2>
            </div>
            <div className="FAQAnswerWrapper" style={{display: (selectedQuestion===3) ? 'block':'none'}}>
              <ul>
                <li>The PhobGCC product is similar to the Goomwave’s project in that they both tackle the issue of PODE on the Gamecube Controller, in regards to how PODE has affected both positively and negatively in regular official Gamecube Controller motherboards. The Goomwave’s approach to PODE was to emulate good PODE using brand new potentiometers. The PhobGCC’s approach to PODE is to eliminate the P in PODE entirely, potentiometers. Instead, magnets are glued onto the stickbox and their polarity is read through hall effect sensors, essentially making a no-contact read of stickbox values. The contact made from potentiometer to stickbox is a big part of the reason PODE exists.</li>

                <li>There are QoL features on PhobGCCs that are very similar to the Goomwave such as X/Y to Z remap, Notch Recalibration, Trigger Modes, Rumble Adjustment, and most importantly, adjusting the feel of the controller. </li>
              </ul>
            </div>
          </div>
          <div className="FAQListItemContainer" key={4}>
            <div className="FAQQuestionWrapper" onClick={(ev) => handleFAQClick(ev,4)} id='q4'>
              <h2 className="FAQQuestion">What are potentiometers, and what is PODE?</h2>
            </div>
            <div className="FAQAnswerWrapper" style={{display: (selectedQuestion===4) ? 'block':'none'}}>
              <img src={Potentiometers} className="FAQimg img--med" alt="Potentiometer" />
              <ul>
                <li>Potentiometers are these black readers that read the potential inputs that can be performed on a controller’s stickbox. Due to <b>PODE</b> (<b>P</b>otentiometer <b>O</b>ddity <b>D</b>egradation <b>E</b>ffect), controllers can both suffer and benefit from degraded signals from these potentiometers for easier performance of advanced tech.</li>
                <li> PODE can affect attributes of a controller that effect:
                  <ul>
                    <li><b>Dashes</b>. (Dashback out of Crouch and Dash Dancing)</li>
                    <li><b>Down-Forward Ledgedash</b> (Inputting Down Forward to ledgedrop + preangle wavedash)</li>
                    <li><b>Empty Pivots</b> (Flicking the stick one way and back the other to cancel the initial dashback and go to the 'Stand' state in 1 frame)</li>
                    <li><b>Snapback</b> (flicked inputs causing unintended turnarounds in many situations)</li>
                  </ul>
                </li>
                <li>Depending on the two potentiometers that attach to each stickbox and how much PODE has developed on either the X-axis potentiometer or the Y-axis potentiometer, it makes performing these advanced techniques that are related to PODE both harder and easier depending on the level of PODE that is on your controller.</li>
              </ul>
            </div>
          </div>
          <div className="FAQListItemContainer" key={5}>
            <div className="FAQQuestionWrapper"  onClick={(ev) => handleFAQClick(ev,5)} id='q5'>
              <h2 className="FAQQuestion">What PODE is typically good to find in controllers?</h2>
            </div>
            <div className="FAQAnswerWrapper" style={{display: (selectedQuestion===5) ? 'block':'none'}}>
              <ul><li>The PODE that one would want differs from player to player, but I believe the best general PODE for most people is <b>NO</b> PODE, which has high snapback but also high pivots. </li>
              <li>The snapback that occurs on 0 PODE controllers are simply removed with the installation of capacitors on the potentiometers to prevent snapback, but retain pivots.</li>
              <li>0 PODE also typically makes dashback out of crouch feel really good in comparison to controllers that have PODE.</li></ul>
            </div>
          </div> 
          <div className="FAQListItemContainer" key={6}>
            <div className="FAQQuestionWrapper" onClick={(ev) => handleFAQClick(ev,6)} id='q6'>
              <h2 className="FAQQuestion">Why does my controller’s dashes feel weird / unresponsive??</h2>
            </div>
            <div className="FAQAnswerWrapper" style={{display: (selectedQuestion===6) ? 'block':'none'}}>
              <ul><li>The likely scenario is that your controller has developed some amount of PODE, which, combined with capacitance from snapback capacitors, can make a controller feel unresponsive.</li>
              <li>Essentially what happens is:
                <ul>
                  <li>Controller has full amount of snapback</li>
                  <li>Controller has a capacitor installed</li>
                  <li>Controller has developed PODE</li>
                  <li>Capacitor is reducing an already reduced signal due to the capacitor</li>
                </ul>
              </li>
              <li>How to solve it? You can either adjust your snapback module to accommodate the now reduced signal (be sure to use multiple switches if necessary, and as little capacitance as needed) or insert a smaller capacitance capacitor. You can buy a set of ceramic capacitors of  varying capacitance on Amazon for roughly ten dollars or less.</li>
              </ul>
            </div>
          </div>
          <div className="FAQListItemContainer" key={7}>
            <div className="FAQQuestionWrapper" onClick={(ev) => handleFAQClick(ev,7)} id='q7'>
              <h2 className="FAQQuestion">My controller is drifting when I plug it in!</h2>
            </div>
            <div className="FAQAnswerWrapper" style={{display: (selectedQuestion===7) ? 'block':'none'}}>
                <ul>
                  <li>You likely have had basic snapback capacitors installed into your controller. Perform a soft reset by holding <b>X</b>+<b>Y</b>+<b>Start</b> for 2 seconds, and press any button on your controller to reconnect it. </li>
                </ul>
                  <p><b>Note:</b> This only needs to be done on console, or, for Smash Ultimate, on third party adapters.</p>
            </div>
          </div>
          
        {/* {
          testFAQ.map((FAQitem,index) => 
            <div className="FAQListItemContainer" key={index}>
              <div className="FAQQuestionWrapper" onClick={(ev) => handleFAQClick(ev,index)} id={'q'+index}>
                <h2 className="FAQQuestion">{FAQitem.question}</h2>
              </div>
              <div className="FAQAnswerWrapper" style={{display: (index===selectedQuestion) ? 'block':'none'}}>
                <p className="FAQAnswer">{FAQitem.answer}</p>
              </div>
            </div>
          )
        } */}
        

        </div>
      </div>
    </React.Fragment>
  )
}

export default FAQ;