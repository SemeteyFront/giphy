import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Random from "./pages/Random";
import Tranding from "./pages/Tranding";



function App() {
  return (
    <div className="App">
      <Router>
        <header className="header">
        <Link className="header__tranding" to={'/'}>Tranding</Link>
        <Link className="header__random" to={'/random'}>Random</Link>
        </header>
        <Routes>
          <Route path={'/'} element={ <Tranding /> } />
          <Route path={'/random'} element={ <Random /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
