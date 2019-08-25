import React, { useEffect, useState } from 'react';
import Block from '../../replicated/block/block';
import './design.css';
import data from '../../../data/data';

const Design = () => {
  const [allDesigns, setAllDesigns ] = useState([]);

  const displayDesigns = data => data
        .filter(data => data.tag === "design")
        .map(design => <Block data={design} key={design._id} />);

  useEffect(() => {
    getDesigns();
  }, []);

  const getDesigns = async () => {
    const response = await data;
    setAllDesigns(response);
  }

  return(
    <div className="designs-body">
      {allDesigns && displayDesigns(allDesigns)}
    </div>
  )
}

export default Design;