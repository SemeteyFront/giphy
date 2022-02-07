const defaultState = {
  posts: []
}

const ADD_GIPHY = "ADD_GIPHY"

export const TrandingReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_GIPHY:
      return {...state, posts: action.payload}
    default:
      return state
  }
}