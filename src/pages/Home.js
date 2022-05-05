import React from 'react';
import Hero from '../components/Hero';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { Fade,Slide } from 'react-slideshow-image';
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

const testimonialArray = ["1472063565095915523", "1448828944652795906", "1402415528673697792", "1420643017522774018", "1427355646794555393", "1430298525250715650", "1430996181438681095", "1441509134789222400", "1442394120656355334"]

function Home(){
  return(
    <React.Fragment>
      <Hero/>
      <div className="pastClients">
        <div class="container">
          <h2 className="contentTitle">Affordable, tournament-grade repairs & custom-built controllers for players such as:</h2>
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
      <div className="CTA">
        <div className="container">
          <div className="CTAContent" >
            <h2 className="CTATitle">Already know what mods or repairs you want for your controller?</h2>
            <a className="CTACommission button" href="https://docs.google.com/forms/d/e/1FAIpQLSetB5_ocLehaWCkuh77VvXX6bjMfFWCPrtmXZMEwcSN1OIskg/viewform">Click here to get started on a commission form.</a>
          </div>
          <div className="CTAContent" >
            <h2 className="CTATitle">Not sure which modifications to get for your controller?</h2>
            <Link to="/ModList" className="CTAModList button">Click here for a list of available mods and their prices.</Link>
            <h4>or</h4>
            <Link to="/Premades" className="CTAPremades button">Click here for stocked premade modded controllers, ready for order and delivery.</Link>
          </div>
          <div className="CTAContent" >
            <h2 className="CTATitle">Questions?</h2>
            <ul>
              <li>Check out the <Link to="/FAQ" className="CTAFAQ">FAQ</Link> page for common modding questions and concerns.</li>
              <li>DM me on <a className="CTATwitter" href="https://twitter.com/in10cityGCC">Twitter</a>, and make sure to follow for updates on new premade controller availability.</li>
              <li>Join the <a className="CTADiscord" href="https://discord.gg/EajRdDrR">10CT  Discord</a> and check the channels to see if your question's already been answered!</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="container">
          <h2 className="contentTitle">Testimonials</h2>
          <div className="tweets">
          <Slide easing="ease">
            {
              testimonialArray.map((tweetId,index)=>(
                <div className="each-slide">
                  <div className="tweetWrapper">
                    <TwitterTweetEmbed
                      onLoad={function noRefCheck(){}}
                      options={{theme: 'dark',align:'center'}}
                      tweetId={tweetId}
                    />
                  </div>
                </div>
              ))
            }
          </Slide>
          </div>
          {/* <div className="tweets">
            <TwitterTweetEmbed
              onLoad={function noRefCheck(){}}
              options={{theme: 'dark',align:'center'}}
              tweetId="1472063565095915523"
            />
          </div> */}
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
    </React.Fragment>
  )
}

export default Home;