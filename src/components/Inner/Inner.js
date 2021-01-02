import React from "react";

import Navbar from "../Navbar/Navbar";
import ProfileContainer2 from "../Profile/ProfileContainer";
import InnerCss from "./Inner.module.css";
import {Route} from "react-router-dom";
import MyMassagesContainer from "../Massages/MyMassagesContainer";
import MyUsersContainer from "../Users/MyUsersContainer";
import HeaderContainer from "../Header/HeaderContainer";

const Inner = () => {
    return (
        <div className={InnerCss.inner}>
            <Navbar/>
            <Route
                path="/login"

            />
            <Route
                path="/profile/:userId?"
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
