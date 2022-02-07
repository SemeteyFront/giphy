import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { RandomReducer } from "./getRandom";
import { TrandingReducer } from "./getTranding";

const rootReducer = combineReducers({
  tranding: TrandingReducer,
  random: RandomReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))