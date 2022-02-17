import { GET_CATEGORY } from "../types"
import axios from '../../api/axios'

export const GetCategories = () => {
  return async dispatch => {
      try {
        const { data } = await axios.get(`/categories`, {
          params: {
          rating: "g"
          }
        })
          dispatch({
              type: GET_CATEGORY,
              data: data.data,
          })
      } catch (error) {
          alert(error)
      }
  }
}