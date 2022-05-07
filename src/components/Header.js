import React, { useState } from "react";
import {Link} from 'react-router-dom';
import mainLogo from '../img/logos/10CTlogo.png';
import twitterLogo from '../img/logos/twitterLogo.png';
import discordLogo from '../img/logos/discordLogo.png';

function Header(){
  const [activeId, setActiveId] = useState(1);
  console.log(`active id: ${activeId}`)
  const navArray = [
    { id: 1, text: "Premades" },
    { id: 2, text: "ModList" },
    { id: 3, text: "FAQ" }
  ];

  function separateWords(){
  }

  return(
    <nav className="nav row">
      <Link className="navHome" to="/" onClick={() => setActiveId(0)}>
        <img src={mainLogo} alt="10CT logo"/>
      </Link>
      <div className="navRoutes row">
        <ul className="navRoutesList row">
          {
            navArray.map((val,index)=>(
              <li className={activeId===(index+1)? "navListItem navActive" : "navListItem"} onClick={() => setActiveId(val.id)}><Link to={`/${val.text}`}>{val.text.replace(/([A-Z]+)/g, ' $1').trim()}</Link></li>
            ))
          }
          {/* <li className="navListItem"><Link to="/Premades">Premades</Link></li>
          <li className="navListItem"><Link to="/ModList">Mod List</Link></li>
          <li className="navListItem"><Link to="/FAQ">FAQ</Link></li> */}
        </ul>
      </div>
        
      <div className="navLinks col">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSetB5_ocLehaWCkuh77VvXX6bjMfFWCPrtmXZMEwcSN1OIskg/viewform"  className="navCommission button">Commission</a>
        <div className="navContacts row">
          <a className="navDiscord" href="https://discord.gg/EajRdDrR"><img src={discordLogo} className="img--small" alt="10CT discord server"/></a>
          <a className="navTwitter" href="https://twitter.com/in10cityGCC"><img src={twitterLogo} className="img--small" alt="10CT twitter"/></a>
        </div>
      </div>
    </nav>
  )
}

export default Header;