import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Tranding from "./pages/Tranding";



function App() {
  return (
    <div className="App">
      <Router>
        <header className="header">
        <Link className="header__tranding" to={'/'}>Tranding</Link>
        </header>
        <Routes>
          <Route path={'/'} element={ <Tranding /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;