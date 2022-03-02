import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Radium, { StyleRoot} from "radium";

import Home from './container/home';
import HostHome from './container/hostHome';
import AskASuperhost from './container/askASuperhost';
import AirCover from './container/aircover';
import BecomeAHost from './container/becomeAHost';
import HelpCentre from './container/helpCentre';

function App() {
  return(
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hostYourHome" element={<HostHome />} />
          <Route path="/askasuperhost" element={<AskASuperhost />} />
          <Route path="/aircover" element={<AirCover />} />
          <Route path="/becomeHost" element={<BecomeAHost />} />
          <Route path="/help" element={<HelpCentre />} />
        </Routes>
      </div>
    </BrowserRouter>
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
