import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GetSubcategories} from "../../redux/Actions/GetSubcategories";
import Categories from "../Categories";
import InfiniteScroll from "react-infinite-scroll-component";
let counter = 20;

const SubCategory = ({name}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetSubcategories(name, counter))
    }, [])
    const categoryState = useSelector(state => state.CategoryReducer.categories);
    const resSearch = categoryState.find(item =>  item.name_encoded === name);
    const insideState = useSelector(state => state.CategoryReducer.subcategories);
    const mapInside = insideState.map((item, index) => <p key={index} className="px-2"><img src={item.images.fixed_height.url} className='img-thumbnail'/> </p>);
    const fetchMoreInside = () => {
        if (counter > 199){
            alert("GIFs are over")
        } else {
            setTimeout(() => {
                counter += 5
                dispatch(GetSubcategories(name,counter));
            }, 1500)
        }
    }
    return (
        <div className="d-flex">
            <Categories mapCategory={resSearch.subcategories} />
        <div className="pt">
            <h1  className="text-white text-center">{name}</h1>
                <div className="pt">
                    <div className="d-flex justify-content-between">
                        
                        <InfiniteScroll
                            dataLength={insideState.length}
                            next={fetchMoreInside}
                            hasMore={true}
                            loader={<h4 className="text-white text-center">Загрузка</h4>}
                        >
                            <div className="trending d-flex flex-wrap">
                                {mapInside}
                            </div>
                        </InfiniteScroll>
                    </div>
                </div>

        </div>
        </div>
    );
};

export default SubCategory;