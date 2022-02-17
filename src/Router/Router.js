import React from 'react';
import {Route, Routes} from "react-router-dom";
import Trending from "../pages/Tranding";
import Random from "../pages/Random";
import {useSelector} from "react-redux";
import SubCategory from "../components/SubCategory";
import Categories from "../components/Categories";
import GifCategories from "../components/GifCategories";
import './router.scss'

const Router = () => {
    const categoryState = useSelector(state => state.CategoryReducer.categories);
    const showSubCategory =  categoryState.map(item => 
      <Route exact 
        key={item.name_encoded} 
        path={`/${item.name_encoded}`} 
        element= {<SubCategory 
          name={item.name_encoded}
        />}
      />)
    const showGifCategory = categoryState.map(item => 
      item.subcategories.map(item =>
        <Route 
          path={`${item.name_encoded}`} 
          element={<GifCategories 
          name={item.name_encoded} 
        />} 
      />))
    return (
        <div className="router">
            <Categories mapCategory={categoryState}/>
                <Routes>
                    <Route path="/" element={<Trending />} />
                    <Route path="/random" element={<Random />} />
                    {showSubCategory}
                    {showGifCategory}
                </Routes>
        </div>
    );
};

export default Router;