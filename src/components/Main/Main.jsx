import React from "react";

import "./Main.scss";

import AnimeCard from "../AnimeCard/AnimeCard";

function Main({ HandleSearch, setSearch, search, animeList }) {
  console.log(animeList);
  return (
    <main className="main">
      <form className="search-box" onSubmit={HandleSearch}>
        <input
          className="search-box__input"
          type="search"
          placeholder="Поиск"
          value={search}
          onChange={e => setSearch(e.target.value)}
          required
        />
      </form>
      <ul className="anime-list">
        {animeList.map(anime => {
          return <AnimeCard key={anime.mal_id} {...anime} />;
        })}
      </ul>
    </main>
  );
}

export default Main;
