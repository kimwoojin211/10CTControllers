import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import sliderImg1 from '../img/gcc1.jpg';
import sliderImg2 from '../img/gcc2.jpg';
import sliderImg3 from '../img/gcc3.jpg';
import sliderImg4 from '../img/room1.jpg';
import sliderImg5 from '../img/gcc4.jpg';

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
                    <p className="heroSubtitle"><i>Socal Controller Modder</i></p>
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