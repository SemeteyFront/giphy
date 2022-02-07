import axios from "axios"

const API_KEY = "MAAn1lI8zD15XcWrI14fsoMzGc0jhCkt"

export const getRandom = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`)
      dispatch({type: "ADD_RANDOM", payload: response.data })
    } catch (error) {
      console.log(error)
    }
  }
}