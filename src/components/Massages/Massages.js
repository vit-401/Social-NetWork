import React from "react";
import MassagesCss from "./Massages.module.css";
import Dialogs from "../Dialogs/Dialogs";
import {NavLink, Route} from "react-router-dom";
import Textarea from "../Textarea/Textarea";

const DialogItem = (props) => {
    const {name, id} = props;
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
    debugger
    let messageContent = props.messages.map((item) => {
        return (
            <Route
                path={"/dialog/" + item.id}
                render={() => <Dialogs key ={item.id} massage={item.message}/>}
            />
        );
    })
    // debugger
    const valueMassage = React.createRef();


    function sendMassage() {
        props.sendMassage()
    }

    function onMessageChange() {
        let text = valueMassage.current.value;
        props.onMessageChange(text)
    }

    return (
        <>
            <div className={MassagesCss.wrapper}>
                <ul className={MassagesCss.massages}>
                    {props.dialogs.map((item) => {
                        return <DialogItem key={item.id} name={item.name} id={item.id}/>;
                    })}
                </ul>
                <div className={MassagesCss.dialog}>
                    {messageContent}
                    <Textarea
                        getRef={valueMassage}
                        onChange={onMessageChange}
                        value={props.newMessageBody}
                        placeholder='type new text'
                        textBtn='send'
                        onClick={sendMassage}
                    />
                </div>
            </div>
        </>
    )
        ;
};

export default Massages;
