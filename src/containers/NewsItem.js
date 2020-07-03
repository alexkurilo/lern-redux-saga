import React from 'react';

const NewsItem = ({article}) => (
    <div className="article_container">
        {article.title && <h1>{article.title}</h1>}
        {article.urlToImage && <img className="article_img" src={article.urlToImage} alt="" />}
        {article.description && <h4>{article.description}</h4>}
        {article.url && <a href={article.url} target="_blank" rel="noopener noreferrer">READ MORE</a>}
    </div>
);

export default NewsItem;