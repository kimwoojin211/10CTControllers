import React from 'react';
import Hero from '../components/Hero';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import {Link} from 'react-router-dom';
import premade1 from '../img/premades/premade1.jpg';
import premade2 from '../img/premades/premade2.jpg';
import premade3 from '../img/premades/premade3.jpg';
// import premade4 from '../img/premades/premade4.jpg';

function Home(){
  return(
    <React.Fragment>
      <Hero/>
      {/* <div style={{width:'100%'}}>
        <div className="container">
          <div className="CTA">
          </div>
        </div>
      </div> */}
      <div className="homeContentContainer">
        <div className="container homeContent">
          <h3 className="contentTitle">Interested in your very own modded controller?</h3>
          <div className="homeCTA" >
            <div className="homePremades">
              <p>Check out the premade controllers currently available:</p>
              <div className="homePremadeGallery">
                <img className="homePremadeImg img--med" src={premade1} alt="" />
                <img className="homePremadeImg img--med" src={premade2} alt="" />
                <img className="homePremadeImg img--med" src={premade3} alt="" />
                {/* <img className="premadeImage" src={premade4} alt="" /> */}
              </div>
              <Link to="/Premades"><p>Click here for more details</p></Link>
            </div>
            <div className="homeRedirects">
              <Link to="/ModList"><p className="modListRedirect">Click here for a list of<br/>modifications and their prices.</p></Link>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSetB5_ocLehaWCkuh77VvXX6bjMfFWCPrtmXZMEwcSN1OIskg/viewform"><p className="commissionRedirect">Ready to order? <br/>Commission a controller here.</p></a>
            </div>
          </div>
        </div>
{/* 
        <div style={{width:500,border:'2px solid black'}}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="in10cityGCC"
            theme="dark"
            noFooter="true"
            transparent="true"
            options={{height:400}}
          />
        </div> */}

      </div>
    </React.Fragment>
  )
}

export default Home;