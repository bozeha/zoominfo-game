import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobalStyles from './globalStyles';
import { allReducers } from "./reducers";
import { Provider } from "react-redux";
import thank from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thank))
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  
	  <Provider store={store}>
      <GlobalStyles/>
		<App />
	  </Provider>
  
);


