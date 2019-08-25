import React from 'react';
import { withRouter } from 'react-router-dom';
import './article.css';
import data from '../../../data/data';

const Article = (props) => {
  
  const useData = (parseInt(props.match.params.id)) - 1;

  return(
    <div className="article-body">
      <div className="article-header">
        <img src={data[useData].hero} alt={data[useData].hero} className="article-img-block"/>
        <p className="intro-text">{data[useData].title}</p>
        <p className="intro-text">{data[useData].date}</p>
      </div>

      <div className="article-panel">
        <img src={data[useData].idea.img} alt={data[useData].idea.content} className="article-img-block"/>
        <p className="content-1">{data[useData].idea.content}</p>
      </div>

      <div className="article-panel">
        <p className="content-2">{}</p>
        <img src={data[useData].process.img} alt={data[useData].process.content} className="article-img-block"/>
      </div>
      
      <div className="article-panel">
        <p className="content-3">{data[useData].result.content}</p>
        <img src={data[useData].result.img} alt={data[useData].result.content} className="article-img-block"/>
      </div>

      <div className="article-panel">
        <p className="content-3">{data[useData].growth}</p>
      </div>
    </div>
  )
}

export default withRouter(Article);