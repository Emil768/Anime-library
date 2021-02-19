import React, { useState } from "react";

import "./Main.scss";

import AnimeCard from "../AnimeCard/AnimeCard";
import emptyGif from "../../img/anime-empty.gif";
import { IoSettingsOutline } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";

import {
  setModalActive,
  setModalFilterActive,
} from "../../redux/actions/modal";
import axios from "axios";
import Modal from "../Modal/Modal";

function Main({ HandleSearch, setSearch, search }) {
  const dispatch = useDispatch();
  const { items, type } = useSelector(state => state.anime);
  const [cardInfo, setCardInfo] = useState("");

  const handlerAnimeInfo = id => {
    getInfoAnime(id);
    dispatch(setModalActive(true, "info"));
  };

  const handlerFilterInfo = () => {
    dispatch(setModalFilterActive(true, "filter"));
  };

  const getInfoAnime = id => {
    axios
      .get(`https://api.jikan.moe/v3/${type}/${id}`)
      .then(res => setCardInfo(res.data));
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
      <div className="main__panel">
        <h3>Найдено результатов: {`(${items.length})`}</h3>
        <button className="main__panel-filter" onClick={handlerFilterInfo}>
          <span>Фильтр аниме</span>
          <IoSettingsOutline size={20} />
        </button>
      </div>
      <ul className="anime-list">
        {items.length ? (
          items.map(anime => {
            return (
              <AnimeCard
                key={anime.mal_id}
                {...anime}
                handlerInfo={handlerAnimeInfo}
              />
            );
          })
        ) : (
          <li>
            <h3>Аниме по такому названию не найдены😟</h3>
            <figure>
              <img src={emptyGif} alt="" />
            </figure>
          </li>
        )}
      </ul>
      <Modal data={cardInfo} />
    </main>
  );
}

export default Main;
