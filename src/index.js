import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import thunk from "redux-thunk";
import {BrowserRouter as Router} from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />,
      </Router>
    </Provider>,
  document.getElementById('root')
);
