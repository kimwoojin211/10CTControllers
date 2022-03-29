import React from 'react';
import {Link} from 'react-router-dom';
// import Home from '../pages/Home';
// import Premades from '../pages/Premades';
// import ModList from '../pages/ModList';
// import FAQ from '../pages/FAQ';

function Header(){
  return(
    <React.Fragment>
        <nav className="nav">
          <Link className="navHome" to="/">Home</Link>
          <ul className="navList routes">
            <li className="navItem"><Link to="/Premades">Premades</Link></li>
            <li className="navItem"><Link to="/ModList">Mod List</Link></li>
            <li className="navItem"><Link to="/FAQ">FAQ</Link></li>
            <li className="navItem commission"><Link to="/">Commission!</Link></li>
          </ul>
          <ul className="navList contacts">
            <li className="navItem discord">Discord</li>
            <li className="navItem twitter">Twitter</li>
          </ul>
        </nav>
    </React.Fragment>
  )
}

export default Header;