import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCategories } from "../../redux/categories";
import "./categories.css";

function Categories({ onClose }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <div className="overlay"></div>
      <div className="categories">
        <div className="categories__header">
          <h2>Categories</h2>
          <button className="categories__btn" onClick={onClose}>close</button>
          
        </div>
        <ul>
        {categories.map(({ name }) => (
          <li key={name}>
            <NavLink to={`/categories/${name}`}>{name}</NavLink>
          </li>
        ))} 
        </ul>
        
      </div>
    </div>
  );
}

export default Categories;
