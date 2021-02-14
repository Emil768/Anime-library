import React, { useEffect, useState } from "react";
import "./scss/style.scss";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

import axios from "axios";

//redux

import { setAnime } from "./redux/actions/anime";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const [videos, setVideos] = useState([]);

  const GetTopAnime = () => {
    axios
      .get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => dispatch(setAnime(res.data.top.slice(0, 12))));
  };

  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search);
  };

  const FetchAnime = query => {
    axios
      .get(
        `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`
      )
      .then(res => dispatch(setAnime(res.data.results)));
  };

  const testCheck = async query => {
    const temp = await fetch(`https://api.jikan.moe/v3/anime/1 `).then(res =>
      res.json()
    );
    // console.log(temp);
    setVideos(temp.episodes);
  };

  useEffect(() => {
    GetTopAnime();
    testCheck("Death Note");
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="App__content">
        <Sidebar topAnime={topAnime} />
        <Main
          search={search}
          setSearch={setSearch}
          HandleSearch={HandleSearch}
        />
      </div>
    </div>
  );
}

export default App;
