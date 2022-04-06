import React from 'react';
import Hero from '../components/Hero';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import premade1 from '../img/premades/premade1.jpg';
// import premade2 from '../img/premades/premade2.jpg';
// import premade3 from '../img/premades/premade3.jpg';
// import premade4 from '../img/premades/premade4.jpg';

function Home(){
  return(
    <React.Fragment>
      <Hero/>
      <div style={{width:'100%'}}>
        <div className="container">
          <div className="CTA">

          </div>
        </div>
      </div>

      <div className="homeContentContainer">
        <div className="container homeContent">
          <h1 style={{color:'white', marginTop:'1em'}}>Interested in your very own modded controller?</h1>
          <div className="homeCTA row" >
            <div className="homePremades">
              <h2>Check out current premades in stock</h2>
              <div className="premadeImages">
                <img className="premadeImage img--med" src={premade1} alt="" />
                {/* <img className="premadeImage" src={premade2} alt="" />
                <img className="premadeImage" src={premade3} alt="" />
                <img className="premadeImage" src={premade4} alt="" /> */}
              </div>
              <h3>View more</h3>
            </div>
            <div className="homeRedirects">
              <h3>Click here for a list of<br/>modifications and their prices.</h3>
              <h3>Ready to order? <br/>Commission a controller here</h3>
            </div>
          </div>
        </div>

        <div style={{width:500,border:'2px solid black'}}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="in10cityGCC"
            theme="dark"
            noFooter="true"
            transparent="true"
            options={{height:400}}
          />
        </div>

      </div>
    </React.Fragment>
  )
}

export default Home;