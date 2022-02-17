import axios from '../../api/axios'
import { SUB_CATEGORY } from "../types";



export const GetSubcategories = (name, counter) => {
  return async dispatch => {
      try {
        const { data } = await axios.get(`/search`, {
          params: {
          q: name,
          limit: counter,
          offset: counter,
          rating: "g",
          lang: "en"
          }
        })
          dispatch({
              type: SUB_CATEGORY,
              data: data.data,
              name: name
          })
      } catch (error) {
          alert(error)
      }
  }
}
