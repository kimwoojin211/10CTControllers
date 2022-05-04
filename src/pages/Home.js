import React from 'react';
import Hero from '../components/Hero';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import {Link} from 'react-router-dom';
import premade1 from '../img/premades/premade1.jpg';
import premade2 from '../img/premades/premade2.jpg';
import premade3 from '../img/premades/premade3.jpg';
import Suf from '../img/players/Suf.jpg';
import Asashi from '../img/players/Asashi.jpg';
import Casper from '../img/players/Casper.jpg';
import Squid from '../img/players/Squid.jpg';
import Venelox from '../img/players/Venelox.jpg';
import Franz from '../img/players/Franz.jpg';

function Home(){
  return(
    <React.Fragment>
      <Hero/>
      <div className="pastClients">
        <div class="container">
          <h3 className="contentTitle">Affordable, tournament-grade repairs & custom-built controllers for players such as:</h3>
          <div className="players row">
            <div className="featuredPlayers row">
              <div className="player">
                <img className="playerPic img--med" src={Squid} alt="Squid"></img>
                <p className="playerTag">Squid</p>
              </div>
              <div className="player">
                <img className="playerPic img--med" src={Suf} alt="Suf"></img>
                <p className="playerTag">Suf</p>
              </div>
              <div className="player">
                <img className="playerPic img--med" src={Asashi} alt="Asashi"/>
                <p className="playerTag">Asashi</p>
              </div>
              <div className="player">
                <img className="playerPic img--med" src={Casper} alt="Casper"></img>
                <p className="playerTag">Casper</p>
              </div>
          
              <div className="player">
                <img className="playerPic img--med" src={Venelox} alt="Venelox"></img>
                <p className="playerTag">Venelox</p>
              </div>
              <div className="player">
                <img className="playerPic img--med" src={Franz} alt="Franz"></img>
                <p className="playerTag">Franz</p>
              </div>
            </div>
          </div>
          <h5 className="andMore">& many more!</h5>
        </div>
      </div>
      <div className="homeCTAContainer">
        <div className="container">
          <h3 className="CTATitle">Interested in your very own modded controller?</h3>
          <div className="CTAContent" >
            <div className="homePremades">
              <p>Don't want to wait? Check out some premade modded controllers  ready for order and delivery.</p>
              <div className="homePremadeGallery">
                <img className="homePremadeImg img--med" src={premade1} alt="" />
                <img className="homePremadeImg img--med" src={premade2} alt="" />
                <img className="homePremadeImg img--med" src={premade3} alt="" />
                {/* <img className="premadeImage" src={premade4} alt="" /> */}
              </div>
              <Link to="/Premades"><p>Click here for more details</p></Link>
            </div>
            <div className="homeRedirects">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSetB5_ocLehaWCkuh77VvXX6bjMfFWCPrtmXZMEwcSN1OIskg/viewform"><p className="commissionRedirect button">Commission a repair or <br/> custom-built controller here.</p></a>
              <Link to="/ModList"><p className="modListRedirect button">Click here for a list of<br/>modifications and pricing.</p></Link>
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