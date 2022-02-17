import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GetRandom} from "../../redux/Actions/GetRandom";


const Random = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetRandom())
    }, [])
    const randomState = useSelector(state => state.RandomReducer)
    return (
        <div className="pt ">
            <h2 className="text-white text-center">Random </h2>
        <div className="d-flex">
            <p className="randomGiphy">
                {randomState.url ?
                    <img src={randomState.url} className='img-thumbnail'/> : <h1 className="text-white text-center">Загрузка</h1>
                }
            </p>
        </div>
        </div>
    );
};

export default Random;