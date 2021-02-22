import React, { useState, useEffect } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

import "./Content.scss";

//redux
import { setAnime, setLoaded } from "../../redux/actions/anime";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

function Content() {
  const dispatch = useDispatch();

  const GetTopAnime = () => {
    dispatch(setLoaded(false));
    axios
      .get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => dispatch(setAnime(res.data.top, "anime")));
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <div className="App__content">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Content;
