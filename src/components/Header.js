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
          <div className="navLinks col">
            <div className="navRoutes row">
              <ul className="navRoutesList row">
                <li className="navItem"><Link to="/Premades">Premades</Link></li>
                <li className="navItem"><Link to="/ModList">Mods</Link></li>
                <li className="navItem"><Link to="/FAQ">FAQ</Link></li>
              </ul>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSetB5_ocLehaWCkuh77VvXX6bjMfFWCPrtmXZMEwcSN1OIskg/viewform"  className="navCommission button">Commission</a>
            </div>
            <div className="navContacts row">
              <a className="navDiscord" href="https://discord.gg/EajRdDrR"><img src={discordLogo} className="img--small" alt="10CT discord server"/></a>
              <a className="navTwitter" href="https://twitter.com/in10cityGCC"><img src={twitterLogo} className="img--small" alt="10CT twitter"/></a>
            </div>
          </div>
        </nav>
    </React.Fragment>
  )
}

export default Header;