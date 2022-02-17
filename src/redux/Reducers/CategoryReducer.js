import {GET_CATEGORY, SUB_CATEGORY, NULL_CATEGORY} from "../types";

const defaultState = {
    categories: [],
    subcategories: [],
    name: ""
}

export const CategoryReducer = (state = defaultState, action) => {
    switch (action.type){
        case GET_CATEGORY:
            return { ...state,categories: action.data }
        case SUB_CATEGORY:
            return { ...state, subcategories: action.data, name: action.name }
        case NULL_CATEGORY:
            return { ...state, subcategories: [] }
        default:
            return state;
    }
}