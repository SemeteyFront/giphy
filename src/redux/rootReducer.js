import {combineReducers} from "redux";
import {TrendingReducer} from "./Reducers/TrendingReducer";
import {CategoryReducer} from "./Reducers/CategoryReducer";
import {RandomReducer} from "./Reducers/RandomReducer";

export const rootReducer = combineReducers({
    TrendingReducer,
    CategoryReducer,
    RandomReducer
})