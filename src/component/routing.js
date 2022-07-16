import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from '../container/home';
import HostHome from '../container/hostHome';
import AskASuperhost from '../container/askASuperhost';
import AirCover from '../container/aircover';
import BecomeAHost from '../container/becomeAHost';
import HelpCentre from '../container/helpCentre';
import LogIn from '../container/auth/loginScreen'
import SignUp from '../container/auth/signUp'
import ForgotPassword from '../container/auth/forgotPassword'
import ImFlexible from '../container/imFlexible';

const Routing = () => {
    const {isUserLoggedIn} = useSelector((store)=> store);

    return(
        <>
            {isUserLoggedIn ? (
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/hostYourHome" element={<HostHome />} />
                    <Route path="/askasuperhost" element={<AskASuperhost />} />
                    <Route path="/aircover" element={<AirCover />} />
                    <Route path="/becomeHost" element={<BecomeAHost />} />
                    <Route path="/help" element={<HelpCentre />} />
                    <Route path="/im-flexible" element={<ImFlexible />} />
                    <Route path="*" element={<Navigate replace to="/home" />} />              
                </Routes>
            ) : (
                <Routes>    
                    <Route path="/" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/forgotPassword" element={<ForgotPassword />} />
                    <Route path="*" element={<Navigate replace to="/" />} />              
                </Routes>
            )}
        </>
    )
}

export default Routing;