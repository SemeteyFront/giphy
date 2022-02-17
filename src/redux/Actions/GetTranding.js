import { GET_TRANDING } from "../types"
import axios from '../../api/axios'

export const GetTranding = (counter) => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/trending`, {
          params: {
          limit: counter,
          offset: counter,
          rating: "g"
          }
      })
    dispatch({type: GET_TRANDING, payload: data.data })
    } catch (error) {
    console.log(error)
    }
  }
}