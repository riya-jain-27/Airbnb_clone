import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { Provider, useSelector } from "react-redux";
import AppReducer from "./redux/reducer";
import ScrollToTop from "./component/ScrollToTop";

import Paths from "./component/routing"

const store = createStore(AppReducer, applyMiddleware(thunk));

function App() {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <div>
          <Paths />            
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
