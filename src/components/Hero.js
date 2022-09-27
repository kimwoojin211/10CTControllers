import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import sliderImg1 from '../img/background/gcc1.jpg';
import sliderImg2 from '../img/background/gcc2.jpg';
import sliderImg3 from '../img/background/gcc3.jpg';
import sliderImg4 from '../img/background/paracords.jpg';
import sliderImg5 from '../img/background/desk1.jpg';

const sliderImages= [
  { imgURL: sliderImg1 },
  { imgURL: sliderImg2 },
  { imgURL: sliderImg3 },
  { imgURL: sliderImg4 },
  { imgURL: sliderImg5 },
];

function Hero(){
  return(
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
                  <img className="sliderBackground" src={fadeImage.imgURL} />
                  <div className="overlay"/>
                </div>
              </div>
            ))
          }
        </Fade>
        <div className="heroText container">
          <h1 className="heroTitle">10CT Controllers</h1>
          <p className="heroSubtitle"><i>SoCal Gamecube Controller Modder</i></p>
        </div>
    </div>
  )
}

export default Hero;