import React from "react";

import "./Sidebar.scss";

import { setAnime } from "../../redux/actions/anime";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

function Sidebar({ topAnime }) {
  const dispatch = useDispatch();
  const { type } = useSelector(state => state.anime);
  const sidebarList = [
    {
      name: "Aниме",
      type: "anime",
    },
    {
      name: "Манга",
      type: "manga",
    },
  ];

  const handlerSwitchType = type => {
    axios
      .get(`https://api.jikan.moe/v3/top/${type}/1/bypopularity`)
      .then(res => dispatch(setAnime(res.data.top, type)));
  };

  return (
    <aside className="sidebar">
      <ul className="sidebar__list ">
        {sidebarList.map((item, index) => {
          return (
            <li
              className={
                type === item.type
                  ? "sidebar__item sidebar__item--active"
                  : "sidebar__item"
              }
              key={index}
              onClick={() => handlerSwitchType(item.type)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
