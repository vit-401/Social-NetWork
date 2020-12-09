import React from "react";
import MassagesCss from "./Massages.module.css";
import Dialogs from "../Dialogs/Dialogs";
import { NavLink, Route } from "react-router-dom";
// import Textarea from "../Textarea/Textarea";

const DialogItem = (props) => {
  const { name, id } = props;
  let path = "/dialog/" + id;
  return (
    <>
      <li>
        <NavLink to={path} activeClassName={MassagesCss.active}>
          {name}
        </NavLink>
      </li>
    </>
  );
};

const Massages = (props) => {
  // let valueMassage = React.createRef();

  // function sendMassage(){
  //   let text = valueMassage.current.value
  //   console.log(text);
  // }
  return (
    <>
      <div className={MassagesCss.wrapper}>
        <ul className={MassagesCss.massages}>
          {props.dialogsData.map((item) => {
            return <DialogItem name={item.name} id={item.id} />;
          })}
        </ul>
        <div className={MassagesCss.dialog}>
          {props.messageData.map((item) => {
            return (
              <Route
                path={"/dialog/" + item.id}
                render={() => <Dialogs massage={item.message} />}
              />
            );
          })}
          {/* <Textarea
            textTextarea="Send a Massages...."
            newPostElement={valueMassage}
            addPost={sendMassage}
            textBtn="Send"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Massages;
