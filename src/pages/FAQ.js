import React, {useState} from 'react';

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
{question:`Controllers based on Budget?`,answer:`For a build closer to $100, you can get:
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
  const [selectedQuestion,setSelectedQuestion] = useState(null);

  const handleQuestionClick = (ev,index) =>{
    const questionIndex = ev.currentTarget.id[1];
    if(selectedQuestion === null || selectedQuestion !== questionIndex){ 
      setSelectedQuestion(index);
    }
    else{
      setSelectedQuestion(null);
    }
    console.log(`selectedQuestion: ${selectedQuestion}`);
    // console.log(`event: ${JSON.stringify(ev)}`)
  }

  return(
    <React.Fragment>
      <h1 className="pageTitle">FAQ</h1>
      {/* <h3 className="pageSubtitle">Click on a question to reveal an answer!</h3> */}
      <div className="FAQList container">
        {
          testFAQ.map((FAQitem,index) => 
            <div className="FAQListItemContainer" key={index}>
              <div className="FAQQuestionWrapper" onClick={(ev) => handleQuestionClick(ev,index)} id={'q'+index}>
                <h2 className="FAQQuestion">{FAQitem.question}</h2>
              </div>
              <div className="FAQAnswerWrapper" style={{display: (index===selectedQuestion) ? 'block':'none'}}>
                <p className="FAQAnswer">{FAQitem.answer}</p>
              </div>
            </div>
          )
        }
        {/* <div className="FAQListItemContainer">
          <div className="FAQQuestionWrapper">
            <h2 className="FAQQuestion">About me.</h2>
          </div>
          <div className="FAQAnswerWrapper">
            <p className="FAQAnswer">I am a controller modder based in SoCal that started in October of 2020 and started providing controllers to current #17th SoCal PRed player Asashi. Since then I’ve provided controllers to a lot more of the SoCal PR such as Suf, Casper, Venelox, Franz, and Squid. I pride myself on controller modding on trying to provide an affordable and speedy service and trying to get more tournament level controllers in more peoples hands. I try to make just enough money to get by and work enough that I can still focus on university. Other than wanting to provide more affordable controllers, the biggest thing that I want to provide to the community is better knowledge about their controllers and therefore I encourage anybody and everybody to ask me about controller related topics regarding Super Smash Bros. Melee.</p>
          </div>
        </div> */}

      </div>
    </React.Fragment>
  )
}

export default FAQ;