import React from "react";

import "./AnimeCard.scss";

function AnimeCard({ url, title, image_url }) {
  return (
    <li className="anime-card">
      <a href={url} target="_blank" rel="noreferrer">
        <figure>
          <img className="anime-card__img" src={image_url} alt={title} />
        </figure>
        <h3 className="anime-card__item">{title}</h3>
      </a>
    </li>
  );
}

export default AnimeCard;
