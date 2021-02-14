import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import anime from "./reducers/anime";
import animeInfo from "./reducers/animeInfo";

let rootReducer = combineReducers({
  anime,
  animeInfo,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
