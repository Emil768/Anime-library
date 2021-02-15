import React,{useState,useEffect} from 'react';

import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

//redux
import { setAnime } from "../../redux/actions/anime";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import anime from '../../redux/reducers/anime';

function Content() {
  const dispatch = useDispatch();
  const {type} = useSelector(state=>state.anime);
  
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const [videos, setVideos] = useState([]);

  const GetTopAnime = () => {
    axios
      .get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => dispatch(setAnime(res.data.top,"anime")));
  };

  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search,type);
  };

  const FetchAnime = (query,type) => {
    axios
      .get(
        `https://api.jikan.moe/v3/search/${type}?q=${query}&order_by=title&sort=asc`
      )
      .then(res => dispatch(setAnime(res.data.results,type)));
  };

  const testCheck = async query => {
    const temp = await fetch(`https://api.jikan.moe/v3/anime/1 `).then(res =>
      res.json()
    );
    
    setVideos(temp.episodes);
  };

  useEffect(() => {
    GetTopAnime();
    testCheck("Death Note");
  }, []);
    return (
        <div className="App__content">
        <Sidebar topAnime={topAnime} />
        <Main
          search={search}
          setSearch={setSearch}
          HandleSearch={HandleSearch}
        />
      </div>
    )
}

export default Content
