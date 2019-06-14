import React from 'react';
import './article.css';
import data from '../../../data/data'

const Article = () => {
  
  console.log(data);
  console.log(data[idea]);
  console.log(data.process);
  console.log(data.result);

  return(
    <div className="article-body">
      <div className="article-panel-1">
        <p className="intro-text">{data.title}</p>
        <p className="intro-text">{data.data}</p>
        {/* <img src={data.result.img} alt={data.result.content} className="article-img-block"/> */}
      </div>

      <div className="article-panel-2">
        {/* <img src={data.idea.img} alt={data.idea.content} className="article-img-block"/> */}
        <p className="content-1">{data.idea.content}</p>
      </div>

      <div className="article-panel-3">
        <p className="content-2">{}</p>
        {/* <img src={data.process.img} alt={data.process.content} className="article-img-block"/> */}
      </div>
      
      <div className="article-panel-4">
        <p className="content-3">{data.result.content}</p>
        {/* <img src={data.result.img} alt={data.result.content} className="article-img-block"/> */}
      </div>

      <div className="article-panel-4">
        <p className="content-3">{data.growth}</p>
      </div>
    </div>
  )
}

export default Article;