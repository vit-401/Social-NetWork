import React from "react";

import Navbar from "../Navbar/Navbar";
// import ProfileContainer2 from "../Profile/ProfileContainer";
import Massages from "../Massages/Massages";
import InnerCss from "./Inner.module.css";
import {Route} from "react-router-dom";
import MyMassagesContainer from "../Massages/MyMassagesContainer";
import MyUsersContainer from "../Users/MyUsersContainer";
import ProfileContainer2 from "../Profile/ProfileContainer";

const Inner = () => {
    return (
        <div className={InnerCss.inner}>
            <Navbar/>
            <Route
                path="/profile"
                render={() => (
                    <ProfileContainer2
                    />
                )}
            />
            <Route
                path="/dialog"
                render={() => (
                    <MyMassagesContainer
                    />
                )}
            />
            <Route
                path="/users"
                render={() => (
                    <MyUsersContainer/>
                )}
            />
        </div>
    );
};
export default Inner;
