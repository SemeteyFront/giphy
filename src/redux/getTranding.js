import axios from "../api/axios"


const ADD_GIPHY = "ADD_GIPHY"
const TOGGLE_LOADING = "TOGGLE_LOADING"

export const getTranding = ({ limit = 10, offset = 0 } = {}) => {
  return async dispatch => {
    try {
      dispatch({type: TOGGLE_LOADING, payload: true })
      const { data } = await axios.get(`/trending`, {
        params: {
          limit,
          offset,
          rating: "g"
        }
      })
      dispatch({type: ADD_GIPHY, payload: data.data })
    } catch (error) {
      console.log(error)
      dispatch({type: TOGGLE_LOADING, payload: false })
    }
  }
}


const defaultState = {
  loading: false,
  data: []
}

export const TrandingReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_GIPHY:
      return {
        loading: false,
        data: [...state.data, ...action.payload]
      }
    case TOGGLE_LOADING: return {
      ...state,
      loading: action.payload
    }
    default:
      return state
  }
}