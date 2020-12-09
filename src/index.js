import state, { subscribe } from "./Redux/State";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewPostText } from "./Redux/State";
import { BrowserRouter } from "react-router-dom";

let render = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

subscribe(render);
render(state);
