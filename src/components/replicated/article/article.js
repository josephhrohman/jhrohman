import React from 'react';
import './article.css';

const Article = ({data}) => {

  console.log(data);


  return(
    <div className="article-body">
      <div className="article-panel-1">
        <p className="intro-text">{data.title}</p>
        <p className="intro-text">{data.data}</p>
        <img src={data.resultI} alt={data.resultC} className="article-img-block"/>
      </div>

      <div className="article-panel-2">
        <img src={data.ideaI} alt={data.ideaC} className="article-img-block"/>
        <p className="content-1">{data.ideaC}</p>
      </div>

      <div className="article-panel-3">
        <p className="content-2">{}</p>
        <img src={data.processI} alt={data.processC} className="article-img-block"/>
      </div>
      
      <div className="article-panel-4">
        <p className="content-3">{data.resultC}</p>
        <img src={data.resultI} alt={data.resultC} className="article-img-block"/>
      </div>

      <div className="article-panel-4">
        <p className="content-3">{data.growth}</p>
      </div>
    </div>
  )
}

export default Article;