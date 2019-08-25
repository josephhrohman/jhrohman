import React, { useEffect, useState } from 'react';
import Block from '../../replicated/block/block';
import './code.css';
import data from '../../../data/data';


const Code = () => {
  const [allCode, setAllCode ] = useState([]);

  const displayCode = data => data
        .filter(data => data.tag === "code")
        .map(code => <Block data={code} key={code._id} />);

  useEffect(() => {
    getCode();
  }, []);

  const getCode = async () => {
    const response = await data;
    setAllCode(response);
  }

  return(
    <div className="code-body">
      {allCode && displayCode(allCode)}
    </div>
  )
}

export default Code;