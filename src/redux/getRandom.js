const defaultState = {
  post: []
}

const ADD_RANDOM = "ADD_RANDOM"

export const RandomReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_RANDOM:
      return {...state, post: action.payload}
    default:
      return state
  }
}