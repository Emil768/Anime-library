import React, { useEffect, useState } from "react";
import "./scss/style.scss";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then(res => res.json());

    setTopAnime(temp.top.slice(0, 5));
  };

  const HandleSearch = e => {
    e.preventDefault();

    FetchAnime(search);
  };

  const FetchAnime = async query => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then(res => res.json());

    setAnimeList(temp.results);
  };

  useEffect(() => {
    GetTopAnime();
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
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
