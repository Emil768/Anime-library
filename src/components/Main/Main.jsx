import React from "react";

import "./Main.scss";

import AnimeCard from "../AnimeCard/AnimeCard";
import { useDispatch, useSelector } from "react-redux";

import { setAnimeInfo } from "../../redux/actions/animeInfo";

function Main({ HandleSearch, setSearch, search }) {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.anime);

  const handlerAnimeInfo = id => {
    dispatch(setAnimeInfo(id));
  };

  return (
    <main className="main">
      <form className="search-box" onSubmit={HandleSearch}>
        <input
          className="search-box__input"
          type="search"
          placeholder="Поиск"
          value={search}
          onChange={e => setSearch(e.target.value)}
          minLength={3}
          required
        />
      </form>
      <ul className="anime-list">
        {items.map(anime => {
          return (
            <AnimeCard
              key={anime.mal_id}
              {...anime}
              handlerInfo={handlerAnimeInfo}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
