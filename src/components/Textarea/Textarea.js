import React from "react";
import TextareaCss from "./Textarea.module.css";

const Textarea = (props) => {
  return (
    <>
      <textarea
        className={TextareaCss.content__textarea}
        required
        placeholder={props.placeholder}
        ref={props.getRef}
        value={props.value}
        onChange={props.onChange}
      />
      <button
        className={TextareaCss.content__btn}
        type="submit"
        onClick={props.onClick}
      >
        {props.textBtn}
      </button>
    </>
  );
};

export default Textarea;
