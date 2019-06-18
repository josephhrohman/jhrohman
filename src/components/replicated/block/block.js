import React from 'react';
import { Link } from 'react-router-dom';
import './block.css';

const Block = ({data}) => {
  
  return(
    <>
      <Link to={`/${data.tag}/${data._id}`} className="block-body">
        <img src={data.resultI} alt={data.title} className="block-img"/>
        <p className="block-title">{data.title}</p>
        <p className="block-content">{data.date}</p>
      </Link>
    </>
  )
}

export default Block;
