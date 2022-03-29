import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import sliderImg1 from '../img/gcc1.jpg';
import sliderImg2 from '../img/gcc2.jpg';
import sliderImg3 from '../img/gcc3.jpg';
import sliderImg4 from '../img/room1.jpg';
import sliderImg5 from '../img/gcc4.jpg';
import Suf from '../img/Suf.jpg';
import Asashi from '../img/Asashi.jpg';
import Casper from '../img/Casper.jpg';

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
      <div className="hero container">
        <Fade
          duration={2500}
          arrows={false}
          pauseOnHover={false}
          canSwipe={false}
        >
          {sliderImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img className="sliderBackground" src={fadeImage.url} />
                <div className="overlay">
                  <div className="heroText">
                    <h2 className="heroTitle">10CT Controllers</h2>
                    <p className="heroSubtitle"><i>SoCal Controller Modder</i></p>
                  </div>
                  <div className="pastClients container">
                    <p>Providing tournament-winning controllers for players such as:</p>
                    <div className="players row">
                      <div className="player">
                        <img src={Suf} alt="Suf"></img>
                        <p className="playerTag">Suf</p>
                      </div>
                      <div className="player">
                        <img src={Asashi} alt="Asashi"/>
                        <p className="playerTag">Asashi</p>
                      </div>
                      <div className="player">
                        <img src={Casper} alt="Casper"></img>
                        <p className="playerTag">Casper</p>
                      </div>
                      <div className="player">
                        <p>& more!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Fade>
    </div>
    </React.Fragment>
  )
}

export default Hero;