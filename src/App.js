import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Inner from "./components/Inner/Inner";

function App(props) {
    return (
        <>
            <Header/>
            <Inner
                // profilePage={props.state.profilePage}
                // dialogPage={props.state.dialogPage}
                // dispatch={props.dispatch}
                // state={props.state}
            />
        </>
    );
}

export default App;
