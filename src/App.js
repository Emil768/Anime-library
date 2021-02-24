import React from "react";
import "./scss/style.scss";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content"

function App() {
  return (
    <div className="App">
      <Header />
     <Content/>
    </div>
  );
}

export default App;
