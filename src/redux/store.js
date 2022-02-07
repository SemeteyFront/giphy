import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { TrandingReducer } from "./getTranding";

const rootReducer = combineReducers({
  tranding: TrandingReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))