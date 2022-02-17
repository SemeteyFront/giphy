import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GetSubcategories} from "../../redux/Actions/GetSubcategories";
import InfiniteScroll from "react-infinite-scroll-component";
let counter = 20;
const GifCategories = ({name}) => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(GetSubcategories(name, counter))
    }, [])

    const subcategory = useSelector(state => state.CategoryReducer.subcategories);
    const mapGif = subcategory.map((item, index) => <p key={index} className="px-2"><img src={item.images.fixed_height.url} className='img-thumbnail'/> </p>);
    const fetchMoreEnd = () => {
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
        <div>
            <h1 className="pt text-white text-center">{name}</h1>
            <div className="d-flex justify-content-between">
                <div>
                    <InfiniteScroll
                        dataLength={mapGif.length}
                        next={fetchMoreEnd}
                        hasMore={true}
                        loader={<h4 className="text-white text-center">Загрузка</h4>}
                    >
                    <div className="trending d-flex flex-wrap">
                        {mapGif}
                    </div>
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    );
};

export default GifCategories;