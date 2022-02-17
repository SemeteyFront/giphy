import axios from '../../api/axios'
import { GET_RANDOM } from "../types";


export const GetRandom = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get(`/random`, {
            params: {
              rating: "g"
            }
            })
            localStorage.setItem("data", JSON.stringify(data.data.images.downsized));
            const datas = localStorage.getItem("data");
            const parse = JSON.parse(datas);
            dispatch({
                type: GET_RANDOM,
                payload: parse,
            })

        } catch (error) {
            console.log( + error)
        }
    }
}