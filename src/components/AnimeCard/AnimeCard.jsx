import React from "react";

import "./AnimeCard.scss";

function AnimeCard({ title, image_url, mal_id, handlerInfo }) {

  const handlerAnimeInfo = () => {
    handlerInfo(mal_id);
  };

  return (
    <li className="anime-card" onClick={handlerAnimeInfo}>
      <figure>
        <img className="anime-card__img" src={image_url} alt={title} />
      </figure>
      <h3 className="anime-card__item" title={`${title}`}>{title}</h3>
    </li>
  );
}

export default AnimeCard;
