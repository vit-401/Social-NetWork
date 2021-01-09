import React from "react";
import MassagesCss from "./Massages.module.css";
import Dialogs from "../Dialogs/Dialogs";
import {NavLink, Route} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../validate/validate";
import {Textarea} from "../common/FormsControls/FormsControls";

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
const maxLength50 = maxLengthCreator(50)
const MassageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required,maxLength50]} name={"newMassage"} />
            <button type={'submit'}>Отправить</button>
        </form>
    )
}

const MassageReduxForm = reduxForm({form: 'massage'})(MassageForm)


const Massages = (props) => {

    let messageContent = props.messages.map((item) => {
        return (
            <Route
                path={"/dialog/" + item.id}
                render={() => <Dialogs key={item.id} massage={item.message}/>}
            />
        );
    })

        function sendMassage(value) {
            props.sendMassage(value.newMassage)
        }

    if (props.isAuth == false) return <Redirect to={"/login"}/>


    return (
        <div className={MassagesCss.wrapper}>
            <ul className={MassagesCss.massages}>
                {props.dialogs.map((item) => {
                    return <DialogItem key={item.id} name={item.name} id={item.id}/>;
                })}
            </ul>
            <div className={MassagesCss.dialog}>
                {messageContent}
                <MassageReduxForm onSubmit={sendMassage}/>
            </div>
        </div>
    )
}
export default Massages;
