import axios from "axios"

const API_KEY ="MAAn1lI8zD15XcWrI14fsoMzGc0jhCkt"



export const getTranding = (limit = 5, offset = 0) => {
  return async dispatch => {
    try {
      const res = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&${limit}&offset=${offset}rating=g`)
      dispatch({type: "ADD_GIPHY", payload: res.data })
    } catch (error) {
      console.log(error)
    }
  }
}



