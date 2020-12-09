import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Inner from "./components/Inner/Inner";

function App(props) {
  return (
    <>
      <Header />
      <Inner
        profilePage={props.state.profilePage}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        state={props.state}
      />
    </>
  );
}

export default App;
