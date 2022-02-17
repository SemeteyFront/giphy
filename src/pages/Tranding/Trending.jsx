import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { GetTranding} from "../../redux/Actions/GetTranding";
import InfiniteScroll from "react-infinite-scroll-component";
let counter = 20;

const Trending = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetTranding(counter));
    }, [])

    const trendingState = useSelector(state => state.TrendingReducer.trending);
    const mapTrending = trendingState.map(item => 
      <img key={item.images.fixed_height.url} src={item.images.fixed_height.url} 
        className='gif__img img-thumbnail'/> );
    const fetchMoreTrending = () => {
        if (counter > 199){
            alert("GIFs are over")
        } else {
            setTimeout(() => {
                counter += 5
                dispatch(GetTranding(counter));
            }, 1500)
        }
    }

    const resetBtn = () => {
        window.location.reload();
    }

    return (
        <div>
            <h2 className="gif-title">Trending</h2>
            <div>

                { counter > 190 ?<div>
                        <h1>No more picture</h1>
                        <button onClick={resetBtn}> Refresh </button>
                </div> :
                    <InfiniteScroll
                        dataLength={mapTrending.length}
                        next={fetchMoreTrending}
                        hasMore={true}
                        loader={<h4>Загрузка</h4>}
                    >
                        <div className="gif">
                            {mapTrending}
                        </div>
                    </InfiniteScroll>
                }
            </div>
        </div>
    );
};

export default Trending;