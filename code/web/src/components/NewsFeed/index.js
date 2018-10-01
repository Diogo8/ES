import React from 'react';
import PropTypes from 'prop-types';

const NewsFeed = ({ noticias, nome }) => (
  <div>
    <p>{noticias.length > 0 ? nome : ''}</p>
    <ul>
      {noticias.map(news => (
        <li id="news" key={news.title}>
          <a href={news.src} id="header">
            {news.title}
          </a>
          <p>{news.desc}</p>
        </li>
      ))}
    </ul>
  </div>
);

NewsFeed.propTypes = {
  noticias: PropTypes.array.isRequired,
  nome: PropTypes.string.isRequired,
};

export default NewsFeed;
