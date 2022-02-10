import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import CategoriesPages from "./components/CategoriesPages";
import Header from "./components/Header/Header";
import Random from "./pages/Random";
import Tranding from "./pages/Tranding";

function App() {
  const [isOpened, setIsOpened] = useState(false);



  return (
    <div className="App">
      <Router>
        <Header onOpen={() => setIsOpened(true)} />
        {isOpened && <Categories onClose={() => setIsOpened(false)} />}
        <Routes>
          <Route path="/categories/:name" element={ <CategoriesPages />} />
          <Route path={"/"} element={<Tranding />} />
          <Route path={"/random"} element={<Random />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
