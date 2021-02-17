import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import anime from "./reducers/anime";

import modal from "./reducers/modal"

let rootReducer = combineReducers({
  anime,
  modal
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
