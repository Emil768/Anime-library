import React from "react";

import "./Sidebar.scss";

function Sidebar({ topAnime }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Топ аниме</h2>
      <ul className="sidebar__list ">
        {topAnime.map(anime => {
          return (
            <li className="sidebar__item" key={anime.mal_id}>
              <a href={anime.url} target="_blank" rel="noreferrer">
                {anime.title}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
