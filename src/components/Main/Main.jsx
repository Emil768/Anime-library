import React, { useState } from "react";

import "./Main.scss";

import AnimeCard from "../AnimeCard/AnimeCard";
import LoaderBlock from "../LoaderBlock/LoaderBlock";
import emptyGif from "../../img/anime-empty.gif";
import { IoSettingsOutline } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";

import {
  setModalActive,
  setModalFilterActive,
} from "../../redux/actions/modal";

import { setAnime, setLoaded } from "../../redux/actions/anime";
import axios from "axios";
import Modal from "../Modal/Modal";

import MainTopPopup from "../MainTopPopup/MainTopPopup";

function Main() {
  const dispatch = useDispatch();
  const { items, type } = useSelector(state => state.anime);
  const [cardInfo, setCardInfo] = useState("");
  const [search, setSearch] = useState("");

  const { isLoaded } = useSelector(state => state.anime);

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

  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search, type);
  };

  const FetchAnime = (query, type) => {
    dispatch(setLoaded(false));
    axios
      .get(
        `https://api.jikan.moe/v3/search/${type}?q=${query}&order_by=title&sort=asc`
      )
      .then(res => dispatch(setAnime(res.data.results, type)));
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
          maxLength={26}
          required
        />
      </form>
      <div className="main__panel">
        <h3 className="main__panel-title">Найдено результатов: {`(${items.length})`}</h3>
        <button className="main__panel-filter" onClick={handlerFilterInfo}>
          <span>Фильтр</span>
          <IoSettingsOutline size={20} />
        </button>
      </div>

      <MainTopPopup />

      <ul
        className={items.length ? "anime-list" : "anime-list anime-list--empty"}
      >
        {items.length ? (
          isLoaded ? 
           
             (
             items.map(anime => {
              return (
                <AnimeCard
                  key={anime.mal_id}
                  {...anime}
                  handlerInfo={handlerAnimeInfo}
                />
              );
            })
          )
          :
          (
            Array(items.length)
              .fill(0)
              .map((_, index) => <LoaderBlock key={index} />)
          )
        ) : (
          <li className="anime-empty">
            <h2 className="anime-empty__title">
              По названию "{search}" ничего не найдено😟
            </h2>
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
