import React from 'react';
import { Link } from 'react-router-dom';
import './block.css';

const Block = ({data}) => {
  
  return(
    <>
      <div className="block-body">
        <div class="block-left">
          <img src={data.resultI} alt={data.title} className="block-img"/>
        </div>
        <div class="block-right">
          <p className="block-title">{data.title}</p>
          <p className="block-content">{data.date}</p>
          <Link to={`/${data.tag}/${data._id}`} className="read-more">Read More</Link>
        </div>
      </div>
    </>
  )
}

export default Block;
