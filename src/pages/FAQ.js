import React, {useState} from 'react';
import Potentiometer from '../img/FAQ&ModList/potentiometers.png';


const testFAQv2 = [{question:`About me.`, answer:`<ul><li>I am a controller modder based locally in SoCal. I started modding in October 2020 by providing controllers for Asashi, current SoCal PR#17, and have since provided controllers to more players of the SoCal region, including PR'ed players such as Suf, Casper, Venelox, Franz, and Squid.</li>
              <li>I pride myself on providing an affordable, speedy service, and my goal is to get more tournament-level controllers into more people's hands. At the moment, I try to make just enough money to get by, while working just enough so that I can still focus on university.</li>
              <li>Other than wanting to provide more affordable controllers, the biggest thing that I want for the community is <b>better knowledge about their controllers</b>. Therefore, I encourage anybody and everybody to ask me about controller related topics regarding Super Smash Bros. Melee.</li></ul>`}]
const testFAQ = [{question:`About me.`,answer:`I am a controller modder based in SoCal that started in October of 2020 and started providing controllers to current #17th SoCal PRed player Asashi. Since then I’ve provided controllers to a lot more of the SoCal PR such as Suf, Casper, Venelox, Franz, and Squid. I pride myself on controller modding on trying to provide an affordable and speedy service and trying to get more tournament level controllers in more peoples hands. I try to make just enough money to get by and work enough that I can still focus on university. Other than wanting to provide more affordable controllers, the biggest thing that I want to provide to the community is better knowledge about their controllers and therefore I encourage anybody and everybody to ask me about controller related topics regarding Super Smash Bros. Melee.`},
{question:`What are potentiometers and why are they important?`,answer:`Potentiometers are these black readers that read the potential inputs that can be performed on a controller’s stickboxes. Due to PODE (Potentiometer Oddity Degradation Effect), controllers can both suffer and benefit from degraded signals from these potentiometers for easier performing of advanced tech in Melee. PODE can affect attributes of a controller that effect:
Dashes. (Dashback out of Crouch and Dash Dancing)
Down-Forward Ledgedash (Inputting Down Forward to ledgedrop + preangle wavedash)
Empty Pivots (Flicking the stick one way and back the other to cancel the initial dashback and go to stand in 1 frame)
Snapback (flicked inputs causing unintended turnarounds in many situations)
Depending on the two potentiometers that attach to each stickbox, depending on how much PODE has developed on either the X-axis potentiometer or the Y-axis potentiometer, it makes performing these advanced techniques that are related to PODE both harder and easier depending on the level of PODE that is on your controller.`},
{question:`What PODE is typically good to find in controllers?`,answer:`The PODE that one would want differs from player to player, but I believe the best general PODE for most people is NO PODE, which has high snapback but also high pivots. The snapback that occurs on 0 PODE controllers are simply removed with the install of capacitors on the potentiometers to prevent snapback but retain pivots. 0 PODE also typically makes dashback out of crouch feel really good in comparison to controllers that have PODE.`},
{question:`Why does my controller’s dashes feel weird / unresponsive??`,answer:`The likely scenario is that your controller has developed PODE, whether small or big, combined with capacitance from snapback capacitors, can make a controller feel unresponsive. Essentially what happens is:
 > controller has full amount of snapback 
> installed a capacitor
> controller has developed PODE
> capacitor is reducing an already reduced signal due to the capacitor:
How to solve it? You can adjust your snapback module to accommodate the now reduced signal (be sure to use multiple switches if necessary, and as little capacitance as needed) or insert a smaller capacitance capacitor. You can buy a set of ceramic capacitors of varying capacitance on Amazon for roughly ten dollars or less. 
`},
{question:`Why do controllers cost this much??`,answer:`The biggest complaint on the scene of controller modding in general is the pricing that modders provide, especially regarding the top echelon of reputable controller modders. I’d like to state that generally speaking a full controller build will likely take 3 to 4 hours of my time and there’s also the upfront costs that I have committed to such as buying controllers that are either in high quality, or installing parts that make controllers high quality. Generally speaking I spend anywhere from $40 on the low end, and up to $100 on the higher end alone on finding a controller worthy enough to be tournament grade. (Finding a T3 controller with a notchable shell, sourcing brand new potentiometers, making sure sticks are in usable condition, cleaning controllers, outsourcing snapback modules, etc). `},
{question:`What kind of controller do I recommend?`,answer:`As a Falco player, I suggest a controller with as little PODE as possible but X-axis PODE is not the end of the world and can be beneficial towards down-forward ledgedashes. The list of mods that I like on a controller oriented for spacies in general would be:
For Fox/Falco players:
minimal PODE
Snapback Module
Firefox notches
Cut Trigger Springs
Lubed Trigger Springs
Bald Buttons
Marth and Captain Falcon Players
Nearly zero PODE for Pivots and Dashback OOC
Wavedash Notches
Springless in One Trigger +/- Cut Trigger Springs 
Sheik Players (basically the same as Marth and Falcon
Nearly zero PODE for Pivots and Dashback OOC
Snapback Module
Wavedash Notches
Springless in One Trigger +/- Cut Trigger Springs 
Puff 
Wavedash Notches + Sing Notches
Generally Speaking:
Wavedash Notches are good for every character
Snapback modules are good for B reverse characters (fox falco sheik)
Cut Springs are better for your fingers to L cancel and other tech involving triggers.
`},
{question:`My controller is drifting when I plug it in!
`,answer:`You likely have had basic snapback capacitors installed into your controller. Perform a soft reset by holding X+Y+Start for 2 seconds and press any button on your controller to reconnect it. This only needs to be done on console, or on Smash Ultimate, third party adapters. 
`},
{question:`Controllers based on budget?`,answer:`For a build closer to $100, you can get:
$50~60...T3 Controller
$10……..Basic Snapback Capacitors
$25……..Wavedash Notches without UCF shield drop
$5………Shipping 
For a build close to $175, you can get:
$50~60...T3 Controller
$10……..Basic Snapback Capacitors
$80……..Firefox Notches
$5………Shipping 
For 200+, fully decked out:
$50-80…T3 Controller
$25……..Snapback Module
$80……..Firefox Notches
$35……..Paracord
`},
]


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
              <h2 className="FAQQuestion">What are potentiometers, and what is PODE?</h2>
            </div>
            <div className="FAQAnswerWrapper" style={{display: (selectedQuestion===3) ? 'block':'none'}}>
              <img src={Potentiometer} className="FAQimg img--med" alt="Potentiometer" />
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
          <div className="FAQListItemContainer" key={4}>
            <div className="FAQQuestionWrapper"  onClick={(ev) => handleFAQClick(ev,4)} id='q4'>
              <h2 className="FAQQuestion">What PODE is typically good to find in controllers?</h2>
            </div>
            <div className="FAQAnswerWrapper" style={{display: (selectedQuestion===4) ? 'block':'none'}}>
              <ul><li>The PODE that one would want differs from player to player, but I believe the best general PODE for most people is <b>NO</b> PODE, which has high snapback but also high pivots. </li>
              <li>The snapback that occurs on 0 PODE controllers are simply removed with the installation of capacitors on the potentiometers to prevent snapback, but retain pivots.</li>
              <li>0 PODE also typically makes dashback out of crouch feel really good in comparison to controllers that have PODE.</li></ul>
            </div>
          </div> 
          <div className="FAQListItemContainer" key={5}>
            <div className="FAQQuestionWrapper" onClick={(ev) => handleFAQClick(ev,5)} id='q5'>
              <h2 className="FAQQuestion">Why does my controller’s dashes feel weird / unresponsive??</h2>
            </div>
            <div className="FAQAnswerWrapper" style={{display: (selectedQuestion===5) ? 'block':'none'}}>
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
          <div className="FAQListItemContainer" key={6}>
            <div className="FAQQuestionWrapper" onClick={(ev) => handleFAQClick(ev,6)} id='q6'>
              <h2 className="FAQQuestion">My controller is drifting when I plug it in!</h2>
            </div>
            <div className="FAQAnswerWrapper" style={{display: (selectedQuestion===6) ? 'block':'none'}}>
                <ul>
                  <li>You likely have had basic snapback capacitors installed into your controller. Perform a soft reset by holding <b>X</b>+<b>Y</b>+<b>Start</b> for 2 seconds, and press any button on your controller to reconnect it. </li>
                </ul>
                  <p><b>Note:</b> This only needs to be done on console, or, for Smash Ultimate, on third party adapters.</p>
            </div>
          </div>
          <div className="FAQListItemContainer" key={7}>
            <div className="FAQQuestionWrapper" onClick={(ev) => handleFAQClick(ev,7)} id='q7'>
              <h2 className="FAQQuestion">Why do controllers cost this much????</h2>
            </div>
            <div className="FAQAnswerWrapper" style={{display: (selectedQuestion===7) ? 'block':'none'}}>

                <ul>
                  <li>On average, a full controller build will likely take around 3 to 4 cumulative hours of labor.</li>
                  <li>Controllers need to be of an acceptable quality before I can begin the modification process. For controllers that are already in good condition or can be brought up to quality standards through extra installation of parts, I generally spend anywhere from <b>$40-$100</b> per controller.</li>
                  <li>Other upfront costs, including but not limited to:
                    <ul>
                      <li>Determining whether a controller's shell is notchable</li>
                      <li>Sourcing brand new potentiometers</li>
                      <li>Making sure analog sticks are in usable condition</li>
                      <li>Cleaning controllers</li>
                      <li>Outsourcing snapback modules</li>
                    </ul>
                  </li>
                </ul>            
                {/* <li>The biggest complaint in controller modding scene in general is the pricing that modders request, especially regarding the top echelon of reputable controller modders. I’d like to state that, generally speaking, a full controller build will likely take 3 to 4 hours of my time, and there’s also the upfront costs that I have committed to, such as buying controllers that are either in high quality, or installing parts that make controllers high quality. Generally speaking I spend anywhere from $40 on the low end, and up to $100 on the higher end alone on finding a controller worthy enough to be tournament grade. (Finding a T3 controller with a notchable shell, sourcing brand new potentiometers, making sure sticks are in usable condition, cleaning controllers, outsourcing snapback modules, etc). </li> */}

            </div>
          </div>
          <div className="FAQListItemContainer" key={8}>
            <div className="FAQQuestionWrapper" onClick={(ev) => handleFAQClick(ev,8)} id='q8'>
              <h2 className="FAQQuestion">What kind of controller do you recommend?</h2>
            </div>
            <div className="FAQAnswerWrapper" style={{display: (selectedQuestion===8) ? 'block':'none'}}>
              <ul>
                <li>In general:</li>
                  <ul>
                    <li>Wavedash Notches for every character</li>
                    <li>Snapback modules for B-reverse chars (i.e. Fox, Falco, Sheik)</li>
                    <li>Cut Springs to help prevent finger injury</li>
                  </ul>
                <li>Fox/Falco players:</li>
                <ul>
                  <li>Minimal PODE</li>
                  <li>Snapback Module</li>
                  <li>Firefox notches</li>
                  <li>Cut Trigger Springs</li>
                  <li>Lubed Trigger Springs</li>
                  <li>Bald Buttons</li>
                </ul>
                <li>Marth and Captain Falcon Players:</li>
                <ul>
                  <li>Nearly zero PODE (for Pivots and Dashback OOC)</li>
                  <li>Wavedash Notches</li>
                  <li>One Springless Trigger +/- Cut Trigger Springs</li>
                </ul> 
                <li>Sheik Players:</li>
                <ul>
                  <li>Nearly zero PODE (for Pivots and Dashback OOC)</li>
                  <li>Snapback Module</li>
                  <li>Wavedash Notches</li>
                  <li>One Springless Trigger +/- Cut Trigger Springs</li>
                </ul> 
                <li>Puff</li>
                <ul>
                  <li>Wavedash Notches</li>
                  <li>Sing Notches</li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="FAQListItemContainer" key={9}>
            <div className="FAQQuestionWrapper" onClick={(ev) => handleFAQClick(ev,9)} id='q9'>
              <h2 className="FAQQuestion">I'm on a budget. What controller should I get?</h2>
            </div>
            <div className="FAQAnswerWrapper" style={{display: (selectedQuestion===9) ? 'block':'none'}}>
              <ul>
                <li>For a build closer to $100:</li>
              </ul>
                <div className="FAQCard">
                  <div className="FAQCardRow row">
                    <div class="FAQCardPrice">$50~60</div><div class="FAQCardMod">T3 Controller</div>
                  </div>
                  <div className="FAQCardRow row">
                    <div class="FAQCardPrice">$10</div><div class="FAQCardMod">Basic Snapback Capacitors</div>
                  </div>
                  <div className="FAQCardRow row">
                    <div class="FAQCardPrice">$25</div><div class="FAQCardMod">Wavedash Notches w/o UCF shield drop</div>
                  </div>
                  <div className="FAQCardRow row">
                    <div class="FAQCardPrice">$5</div><div class="FAQCardMod">Shipping</div>
                  </div>
                </div> 
                <ul>
                  <li>For a build close to $175:</li>
                </ul>
                <div className="FAQCard">
                  <div className="FAQCardRow row">
                    <div class="FAQCardPrice">$50~60</div><div class="FAQCardMod">T3 Controller</div>
                  </div>
                  <div className="FAQCardRow row">
                    <div class="FAQCardPrice">$10</div> <div class="FAQCardMod">Basic Snapback Capacitors</div>
                  </div>
                  <div className="FAQCardRow row">
                    <div class="FAQCardPrice">$80</div><div class="FAQCardMod">Firefox Notches</div>
                  </div>
                  <div className="FAQCardRow row">
                    <div class="FAQCardPrice">$5</div><div class="FAQCardMod">Shipping</div>
                  </div>
                </div>
                <ul>
                  <li>For $200+, fully decked out:</li>
                </ul>
                <div className="FAQCard">
                  <div className="FAQCardRow row">
                    <div class="FAQCardPrice">$50-80</div><div class="FAQCardMod">T3 Controller</div>
                  </div>
                  <div className="FAQCardRow row">
                    <div class="FAQCardPrice">$25</div><div class="FAQCardMod"> Snapback Module</div>
                  </div>
                  <div className="FAQCardRow row">
                    <div class="FAQCardPrice">$80</div><div class="FAQCardMod">Firefox Notches</div>
                  </div>
                  <div className="FAQCardRow row">
                    <div class="FAQCardPrice">$35</div><div class="FAQCardMod">Paracord</div>
                  </div>
                </div>
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