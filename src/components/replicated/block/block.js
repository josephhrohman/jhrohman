import React from 'react';
import { Link } from 'react-router-dom';
import './block.css';

const Block = () => {

  return(
    <>
      <Link to="/projects/:id" className="block-body">
        <img src="../images/jrLogoInv.png" alt="Block Img" className="block-img"/>
        <p className="block-title">Title</p>
        <p className="block-content">Content</p>
      </Link>
    </>
  )
}

export default Block;