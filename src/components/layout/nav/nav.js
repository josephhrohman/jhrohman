import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '/Users/master/websites/jhrohman/src/images/jrLogoInv.png';
import './nav.css';

const Nav = () => {
  return(
    <div className="nav-body">
      <div className="nav-left">
        <Link to="/" className="nav-link"><img src={Logo} alt="JR Logo" className="nav-logo"/></Link>
      </div>
      <div className="nav-right">
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/design" className="nav-link">Design</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </div>
  )
}

export default Nav;