import axios from '../api/axios'


export const getCategories = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/categories`)
      dispatch({type: "ADD_CATEGORIES", payload: data.data })
    } catch (error) {
      console.log(error)
    }
  }
}

const ADD_CATEGORIES = "ADD_CATEGORIES"

export const CategoriesReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_CATEGORIES:
      return action.payload
    default:
      return state
  }
}