import React from 'react';
import './article.css';

const Article = () => {
  return(
    <div className="article-body">
      <div className="article-panel-1">
        <p className="intro-text">This is the title I care some much about.</p>
        <img src="#" alt="img1" className="article-img-block"/>
      </div>
      <div className="article-panel-2">
        <img src="#" alt="img2" className="article-img-block"/>
        <p className="content-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae voluptatum itaque eos provident 
          labore, sint enim non numquam porro harum eius exercitationem officia dignissimos iusto nulla soluta fuga dolorum.
        </p>
      </div>
      <div className="article-panel-3">
        <p className="content-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae voluptatum itaque eos provident 
          labore, sint enim non numquam porro harum eius exercitationem officia dignissimos iusto nulla soluta fuga dolorum.
        </p>
        <img src="#" alt="img3" className="article-img-block"/>
      </div>
      <div className="article-panel-4">
      </div>
    </div>
  )
}

export default Article;