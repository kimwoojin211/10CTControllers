import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import sliderImg1 from '../img/homeBackground/gcc1.jpg';
import sliderImg2 from '../img/homeBackground/gcc2.jpg';
import sliderImg3 from '../img/homeBackground/gcc3.jpg';
import sliderImg4 from '../img/homeBackground/desk1.jpg';
import sliderImg5 from '../img/homeBackground/gcc4.jpg';
import Suf from '../img/players/Suf.jpg';
import Asashi from '../img/players/Asashi.jpg';
import Casper from '../img/players/Casper.jpg';
import Squid from '../img/players/Squid.jpg';
import Venelox from '../img/players/Venelox.jpg';
import Franz from '../img/players/Franz.jpg';

const sliderImages= [
  { url: sliderImg1 },
  { url: sliderImg2 },
  { url: sliderImg3 },
  { url: sliderImg4 },
  { url: sliderImg5 },
];

function Hero(){
  return(
    <React.Fragment>
      <div className="hero">
        <Fade
          duration={4000}
          arrows={false}
          pauseOnHover={false}
          canSwipe={false}
        >
          {
          sliderImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img className="sliderBackground" src={fadeImage.url} />
                <div className="heroContent overlay">
                  {/* <div className="heroText container">
                    <h2 className="heroTitle">10CT Controllers</h2>
                    <p className="heroSubtitle"><i>SoCal Controller Modder</i></p>
                  </div> */}
                  {/* <div className="pastClients container">
                    <p>Affordable, tournament-grade repairs & custom-built controllers for players like:</p>
                    <div className="players row">
                      <div className="featuredPlayers row">
                        <div className="player">
                          <img className="playerPic img--small" src={Squid} alt="Squid"></img>
                          <p className="playerTag">Squid</p>
                        </div>
                        <div className="player">
                          <img className="playerPic img--small" src={Suf} alt="Suf"></img>
                          <p className="playerTag">Suf</p>
                        </div>
                        <div className="player">
                          <img className="playerPic img--small" src={Asashi} alt="Asashi"/>
                          <p className="playerTag">Asashi</p>
                        </div>
                        <div className="player">
                          <img className="playerPic img--small" src={Casper} alt="Casper"></img>
                          <p className="playerTag">Casper</p>
                        </div>
                        
                        <div className="player">
                          <img className="playerPic img--small" src={Venelox} alt="Venelox"></img>
                          <p className="playerTag">Venelox</p>
                        </div>
                        <div className="player">
                          <img className="playerPic img--small" src={Franz} alt="Franz"></img>
                          <p className="playerTag">Franz</p>
                        </div>  
                      </div>
                      <div className="andMore">
                        <h4>& more!</h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          ))
          }
        </Fade>
        <div className="heroText container">
          <h2 className="heroTitle">10CT Controllers</h2>
          <p className="heroSubtitle"><i>SoCal Controller Modder</i></p>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Hero;