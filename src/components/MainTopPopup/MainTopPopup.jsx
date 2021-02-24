import React, { useState, useRef, useEffect } from "react";

import "./MainTopPopup.scss";

import { useDispatch, useSelector } from "react-redux";
import { setAnime, setLoaded } from "../../redux/actions/anime";

import axios from "axios";

import { animeList, mangaList } from "../../db/topList.json";

function MainTopPopup() {
  const dispatch = useDispatch();
  const { type } = useSelector(state => state.anime);

  const [activeList, setActiveList] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const topPopup = useRef();

  const handlerToggleList = () => {
    setActiveList(!activeList);
  };

  const handlerTopType = (subtype, index) => {
    dispatch(setLoaded(false));
    axios
      .get(`https://api.jikan.moe/v3/top/${type}/1/${subtype}`)
      .then(res => dispatch(setAnime(res.data.top, type)));
    setActiveItem(index);
  };

  const handlerOutsideClick = e => {
    const path = e.path;
    if (!path.includes(topPopup.current)) {
      setActiveList(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handlerOutsideClick);
    return () => {
      document.body.removeEventListener("click", handlerOutsideClick);
    };
  }, []);

  return (
    <div className="main__top" ref={topPopup}>
      <h3 className="main__top-title">Топ</h3>
      <div
        className={
          activeList ? "main__top-btn main__top-btn--active" : "main__top-btn"
        }
        onClick={handlerToggleList}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
        </svg>
      </div>
      {activeList ? (
        <div className="main__top-popup">
          <ul className="main__top-list">
            {type === "anime"
              ? animeList.map((item, index) => {
                  return (
                    <li
                      className={
                        activeItem === index
                          ? "main__top-item main__top-item--active"
                          : "main__top-item"
                      }
                      key={index}
                      onClick={() => handlerTopType(item.type, index)}
                    >
                      {item.name}
                    </li>
                  );
                })
              : mangaList.map((item, index) => {
                  return (
                    <li
                      className={
                        activeItem === index
                          ? "main__top-item main__top-item--active"
                          : "main__top-item"
                      }
                      key={index}
                      onClick={() => handlerTopType(item.type, index)}
                    >
                      {item.name}
                    </li>
                  );
                })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default MainTopPopup;
