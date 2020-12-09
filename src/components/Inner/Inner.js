import React from "react";

import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import InnerCss from "./Inner.module.css";
import { Route } from "react-router-dom";
const Inner = (props) => {
  return (
    <div className={InnerCss.inner}>
      <Navbar />
      <Route
        path="/profile"
        render={() => (
          <Profile
            profilePage={props.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
          />
        )}
      />
      <Route
        path="/dialog"
      />
    </div>
  );
};
export default Inner;
