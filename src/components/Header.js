import React from 'react';
import {Link} from 'react-router-dom';
import mainLogo from '../img/logos/10CTlogo.png';
import twitterLogo from '../img/logos/twitterLogo.png';
import discordLogo from '../img/logos/discordLogo.png';

function Header(){
  return(
    <React.Fragment>
        <nav className="nav row">
          <Link className="navHome" to="/"><img src={mainLogo} alt="10CT logo"/></Link>
          <ul className="navList row routes">
            <li className="navItem"><Link to="/Premades">Premades</Link></li>
            <li className="navItem"><Link to="/ModList">Mods</Link></li>
            <li className="navItem"><Link to="/FAQ">FAQ</Link></li>
            {/* <li className="navItem commission"><a href="https://docs.google.com/forms/d/e/1FAIpQLSetB5_ocLehaWCkuh77VvXX6bjMfFWCPrtmXZMEwcSN1OIskg/viewform">Commission</a></li> */}
          </ul>
          <div className="navLinks">
            <ul className="navList navContacts">
              <li className="navItem navDiscord"><a href="https://discord.gg/EajRdDrR"><img src={discordLogo} className="img--small" alt="10CT discord server"/></a></li>
              <li className="navItem navTwitter"><a href="https://twitter.com/in10cityGCC"><img src={twitterLogo} className="img--small" alt="10CT twitter"/></a></li>
            </ul>
            <a className="navCommission" href="https://docs.google.com/forms/d/e/1FAIpQLSetB5_ocLehaWCkuh77VvXX6bjMfFWCPrtmXZMEwcSN1OIskg/viewform">Commission</a>
          </div>
        </nav>
    </React.Fragment>
  )
}

export default Header;