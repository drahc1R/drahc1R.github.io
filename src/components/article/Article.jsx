import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, description, link }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <a href={link}>
        <img src={imgUrl} alt="blog_image" />
      </a>
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
        <p>{description}</p>
      </div>
      {/* <p><a href="#home">Github.</a></p> */}
    </div>
  </div>
);

export default Article;
