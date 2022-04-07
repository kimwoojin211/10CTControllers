import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/10CTlogo.png';

function Header(){
  return(
    <React.Fragment>
        <nav className="nav">
          <Link className="navHome" to="/"><img className="img--small" src={logo} alt="10CT logo"/></Link>
          <ul className="navList routes">
            <li className="navItem"><Link to="/Premades">Premades</Link></li>
            <li className="navItem"><Link to="/ModList">Mod List</Link></li>
            <li className="navItem"><Link to="/FAQ">FAQ</Link></li>
            <li className="navItem commission"><a href="https://docs.google.com/forms/d/e/1FAIpQLSetB5_ocLehaWCkuh77VvXX6bjMfFWCPrtmXZMEwcSN1OIskg/viewform">Commission!</a></li>
          </ul>
          <ul className="navList contacts">
            <li className="navItem navDiscord"><a href="https://discord.gg/EajRdDrR">Discord</a></li>
            <li className="navItem navTwitter"><a href="https://twitter.com/in10cityGCC">Twitter</a></li>
          </ul>
        </nav>
    </React.Fragment>
  )
}

export default Header;