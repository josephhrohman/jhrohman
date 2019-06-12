import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return(
    <div className="footer-body">
      <div className="footer-left">
        <p className="footer-copy">&copy; Joseph Rohman 2019</p>
      </div>
      <div className="footer-center">
        <Link to="/projects" className="footer-link">Projects</Link>
        <Link to="/design" className="footer-link">Design</Link>
        <Link to="/about" className="footer-link">About</Link>
        <Link to="/contact" className="footer-link">Contact</Link>
      </div>
      <div className="footer-right">
        <a href="https://github.com/josephhrohman"><img src="./imgs/githubLogo.png" alt="Github Icon" className="footer-icon"/></a>
        <a href="https://www.linkedin.com/in/jhrohman/"><img src="./imgs/linkedinLogo.png" alt="LinkedIn Icon" className="footer-icon"/></a>
      </div>
    </div>
  )
}

export default Footer;