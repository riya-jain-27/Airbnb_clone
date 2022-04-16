import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import AppReducer from "./redux/reducer";

import Home from './container/home';
import HostHome from './container/hostHome';
import AskASuperhost from './container/askASuperhost';
import AirCover from './container/aircover';
import BecomeAHost from './container/becomeAHost';
import HelpCentre from './container/helpCentre';
import LogIn from './container/auth/loginScreen'
import SignUp from './container/auth/signUp'
import ForgotPassword from './container/auth/forgotPassword'
import ImFlexible from './container/imFlexible'

const store = createStore(AppReducer, applyMiddleware(thunk));

function App() {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/hostYourHome" element={<HostHome />} />
            <Route path="/askasuperhost" element={<AskASuperhost />} />
            <Route path="/aircover" element={<AirCover />} />
            <Route path="/becomeHost" element={<BecomeAHost />} />
            <Route path="/help" element={<HelpCentre />} />
            <Route path="/" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/im-flexible" element={<ImFlexible />} />
          </Routes>
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
