import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Inner from "./components/Inner/Inner";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <>
            <HeaderContainer/>
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
