import React, { useEffect, useState } from "react";
import "./scss/style.scss";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content"
import {Route,Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component = {Content}/>
      </Switch>
    </div>
  );
}

export default App;
