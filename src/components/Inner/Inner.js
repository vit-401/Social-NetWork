import React from "react";

import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Massages from "../Massages/Massages";
import InnerCss from "./Inner.module.css";
import {Route} from "react-router-dom";

const Inner = (props) => {
    return (
        <div className={InnerCss.inner}>
            <Navbar/>
            <Route
                path="/profile"
                render={() => (
                    <Profile
                        profilePage={props.profilePage}
                        dispatch={props.dispatch}
                    />
                )}
            />
            <Route
                path="/dialog"
                render={() => (
                    <Massages
                        dialogPage={props.state.dialogPage}
                        messages={props.state.messages}
                    />
                )}
            />
        </div>
    );
};
export default Inner;
