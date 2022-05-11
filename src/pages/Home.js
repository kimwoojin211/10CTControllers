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

const playerArray = [{"Squid":Squid}, {"Suf":Suf}, {"Asashi":Asashi}, {"Casper":Casper}, {"Venelox":Venelox}, {"Franz":Franz}]
const testimonialArray = ["1472063565095915523", "1448828944652795906", "1402415528673697792", "1420643017522774018", "1427355646794555393", "1430298525250715650", "1430996181438681095", "1441509134789222400", "1442394120656355334"]

function Home(){
  console.log(playerArray);
  return(
    <React.Fragment>
      <Hero/>
      <div className="pastClientsContainer">
        <div className="container col">
          <h2 className="contentTitle">Providing affordable, tournament-grade controllers & repairs for players such as:</h2>
          <div className="pastClients col">
            <div className="playerList row">
              {
                playerArray.map((player,index)=>(
                  <div className="player">
                    <img className="playerPic img--med" src={Object.values(player)[0]} alt={Object.keys(player)[0]}/>
                    <h5 className="playerTag">{Object.keys(player)[0]}</h5>
                  </div>
                ))
              }
            </div>
            <h5 className="andMore">& many more!</h5>
          </div>
        </div>
      </div>
      <div className="CTA col">
          <div className="CTAContent container col">
            <h3 className="CTATitle">Already know what mods or repairs you want for your controller?</h3>
            <a className="CTACommission button" href="https://docs.google.com/forms/d/e/1FAIpQLSetB5_ocLehaWCkuh77VvXX6bjMfFWCPrtmXZMEwcSN1OIskg/viewform">Click here to get started on a commission form.</a>
          </div>
          <div className="CTAContent container col" >
            <h3 className="CTATitle">Not sure which mods to get for your controller?</h3>
            <div className="CTAOptions col">
              <Link to="/ModList" className="CTAModList button">Click here for a full list of mods and their prices.</Link>
              <Link to="/Premades" className="CTAPremades button">Click here for a list of premade modded controllers, available for order.  </Link>
            </div>
          </div>
          <div className="CTAContent container col">
            <h3 className="CTATitle">Questions?</h3>
            <ul>
              <li>Check out the <Link to="/FAQ" className="CTAFAQ">FAQ</Link> page for common modding questions.</li>
              <li>Join the <a className="CTADiscord" href="https://discord.gg/EajRdDrR">10CT  Discord</a> and check the channels to see if your question's already been answered!</li>
              <li>DM me on <a className="CTATwitter" href="https://twitter.com/in10cityGCC">Twitter</a>, and make sure to follow for updates on new premade controller availability.</li>
            </ul>
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
    </React.Fragment>
  )
}

export default Home;