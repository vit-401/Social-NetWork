import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    const { message } = s;
  return (
    <>
      <div className={message}>{props.massage}</div>
    </>
  );
};



export default Dialogs;
