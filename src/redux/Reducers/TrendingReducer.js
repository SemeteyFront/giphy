import { GET_TRANDING } from "../types";

const initialState = {
    trending: [],
}

export const TrendingReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_TRANDING:
            return { ...state, trending: action.payload }
        default:
            return state;
    }
}