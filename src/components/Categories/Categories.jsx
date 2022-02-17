import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import { GetSubcategories} from "../../redux/Actions/GetSubcategories";
import { CategoryNull } from '../../redux/Actions/GetCategoryNull';
import { GetCategories } from '../../redux/Actions/GetCategories';
import {Link} from "react-router-dom";
import './categories.scss'


const Categories = ({mapCategory}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetCategories())
    }, []);
    function btnCategory(name){
        dispatch(CategoryNull())
        dispatch(GetSubcategories(name))
    }
    const category = mapCategory.map(item => <p 
        key={item.name_encoded}>
        <Link onClick={() => btnCategory(item.name_encoded)} to={`/${item.name_encoded}`}>{item.name_encoded}</Link></p>);
    return (
        <div className='categories'>
            <h3 className="categories__title">Categories</h3>
            <div className="categories__name">
            {category.length ? category : <h3>Загрузка...</h3>}
            </div>
        </div>
    );
};

export default Categories;