import React, { useState } from "react";
import {Link} from 'react-router-dom';
import mainLogo from '../img/logos/10CTlogo.png';
import twitterLogo from '../img/logos/twitterLogo.png';
import discordLogo from '../img/logos/discordLogo.png';

function Header(props){
  const {onCommissionClicked} = props; 
  const [activeId, setActiveId] = useState(0);

  return (
    <nav className="navbar row">
      <Link className="navHome" to="/" onClick={() => setActiveId(0)}>
        <img src={mainLogo} alt="10CT logo" />
      </Link>
      <div className="navRoutes row">
        <ul className="navRoutesList row">
          <li className="navListItem"><Link to="/ModList">Mod List</Link></li>
          <li className="navListItem"><Link to="/FAQ">FAQ</Link></li>
          <a className="navListItem" href="https://in10city.bigcartel.com/" target="_blank" rel="noopener noreferrer">Shop</a>
        </ul>
      </div>

      <div className="navLinks col">
        <p className="navCommission button" onClick={ () => onCommissionClicked(true)}>Commission</p>
        <div className="navContacts row">
          <a className="navDiscord" href="https://discord.gg/cmqV4JXEHe" target="_blank" rel="noopener noreferrer">
            <img
              src={discordLogo}
              className="img--small"
              alt="10CT discord server"
            />
          </a>
          <a className="navTwitter" href="https://twitter.com/in10cityGCC" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} className="img--small" alt="10CT twitter" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;