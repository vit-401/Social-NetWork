import React from "react";

import Navbar from "../Navbar/Navbar";
import ProfileContainer from "../Profile/ProfileContainer";
import Massages from "../Massages/Massages";
import InnerCss from "./Inner.module.css";
import {Route} from "react-router-dom";
import MyMassagesContainer from "../Massages/MyMassagesContainer";
import MyUsersContainer from "../Users/MyUsersContainer";

const Inner = () => {
    return (
        <div className={InnerCss.inner}>
            <Navbar/>
            <Route
                path="/profile"
                render={() => (
                    <ProfileContainer
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
