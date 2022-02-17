import {GET_RANDOM} from "../types";

export const RandomReducer = (state = {}, action) => {
    switch (action.type){
        case GET_RANDOM:
            return  action.payload 
        default:
            return state;
    }
}