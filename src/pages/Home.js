import React from 'react';
import Hero from '../components/Hero';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Home(){
  return(
    <React.Fragment>
      <Hero/>
      <div style={{width:'100%'}}>
        <div className="container">
          <div className="pastClients">

          </div>
          <div className="CTA">

          </div>
        </div>
      </div>

      <div style={{display:'flex',width:'90%',justifyContent: 'space-between',margin:'0 auto'}}>
        <div style={{height:400, width:1000,border:'1px solid red'}}>
          <h2 style={{color:'white'}}>Browse </h2>
        </div>

        <div style={{width:500}}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="in10cityGCC"
            theme="dark"
            noFooter="true"
            noBorders="true"
            options={{height:400}}
          />
        </div>

      </div>
    </React.Fragment>
  )
}

export default Home;