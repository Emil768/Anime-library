import React from "react";

import "./Sidebar.scss";

import { setAnime } from "../../redux/actions/anime";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

function Sidebar() {
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

  console.log("rerender sidebar");

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
      <div className="sidebar__footer">
        <a
          href="https://t.me/Emilka22878"
          className="sidebar__footer-link telegram-link "
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="28" height="28" viewBox="0 0 28 28">
            <path d="M19,24l-14,0c-2.761,0 -5,-2.239 -5,-5l0,-14c0,-2.761 2.239,-5 5,-5l14,0c2.762,0 5,2.239 5,5l0,14c0,2.761 -2.238,5 -5,5Zm-2.744,-5.148c0.215,0.153 0.491,0.191 0.738,0.097c0.246,-0.093 0.428,-0.304 0.483,-0.56c0.579,-2.722 1.985,-9.614 2.512,-12.09c0.039,-0.187 -0.027,-0.381 -0.173,-0.506c-0.147,-0.124 -0.351,-0.16 -0.532,-0.093c-2.795,1.034 -11.404,4.264 -14.923,5.567c-0.223,0.082 -0.368,0.297 -0.361,0.533c0.008,0.235 0.167,0.44 0.395,0.509c1.578,0.471 3.65,1.128 3.65,1.128c0,0 0.967,2.924 1.472,4.41c0.063,0.187 0.21,0.334 0.402,0.384c0.193,0.05 0.397,-0.002 0.541,-0.138c0.811,-0.765 2.064,-1.948 2.064,-1.948c0,0 2.381,1.746 3.732,2.707Zm-7.34,-5.784l1.119,3.692l0.249,-2.338c0,0 4.324,-3.9 6.79,-6.124c0.072,-0.065 0.082,-0.174 0.022,-0.251c-0.06,-0.077 -0.169,-0.095 -0.251,-0.043c-2.857,1.825 -7.929,5.064 -7.929,5.064Z" />
          </svg>
        </a>
        <a
          href="https://github.com/EmilMurahas228"
          className="sidebar__footer-link github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg "
            width="28"
            height="28"
            viewBox="0 0 28 28"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
