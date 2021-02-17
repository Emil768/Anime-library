import React, { useState } from "react";

import "./Main.scss";

import AnimeCard from "../AnimeCard/AnimeCard";
import emptyGif from "../../img/anime-empty.gif"
import { useDispatch, useSelector } from "react-redux";

import {setModalActive} from "../../redux/actions/modal"
import axios from "axios";
import Modal from "../Modal/Modal";

function Main({ HandleSearch, setSearch, search }) {
  const dispatch = useDispatch();
  const { items,type } = useSelector(state => state.anime);
  const [cardInfo,setCardInfo] = useState("")
  

  const handlerAnimeInfo = id => {
    getInfoAnime(id)
    dispatch(setModalActive())
  };

  const getInfoAnime = (id) =>{
    axios.get(`https://api.jikan.moe/v3/${type}/${id}`).then(res =>
     setCardInfo(res.data)
    );
  }

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
        {
          items.length? 
          items.map(anime => {
            // console.log(anime)
            return (
              <AnimeCard
                key={anime.mal_id}
                {...anime}
                handlerInfo={handlerAnimeInfo}
                
              />
            );
          })
          :
          <li>
            <h3>Аниме по такому названию не найдены😟</h3>
            <figure>
              <img src={emptyGif} alt=""/>
            </figure>
          </li>
        }
      </ul>
      <Modal data = {cardInfo}/>
    </main>
  );
}

export default Main;
