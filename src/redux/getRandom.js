import axios from "../api/axios"

const ADD_RANDOM = "ADD_RANDOM"

export const getRandom = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/random`, {
        params: {
          rating: "g"
        }
      })
      dispatch({type: "ADD_RANDOM", payload: data.data })
    } catch (error) {
      console.log(error)
    }
  }
}


export const RandomReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_RANDOM:
      return action.payload
    default:
      return state
  }
}