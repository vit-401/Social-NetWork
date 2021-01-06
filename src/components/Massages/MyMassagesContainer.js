import React from "react";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from "../../Redux/dialogs-reduser";
import {connect} from "react-redux";
import Massages from "./Massages";
import {withAuthRedirect} from "../HOC/withAuthRedirect";


function mapStateToProps(state) {
    return {
        messages: state.dialogPage.messages,
        dialogs: state.dialogPage.dialogs,
        newMessageBody: state.dialogPage.newMessageBody,

    }
}
function mapStateToPropsForRedirect(state) {
    return {
        isAuth: state.auth.isAuth
    }
}


function mapDispatchToProps(dispatch) {
    return {
        sendMassage() {
            let action = sendMessageCreator()
            dispatch(action)
        },
        onMessageChange(text) {
            dispatch(updateNewMessageBodyCreator(text))
        }
    }
}

let AuthRedirectComponent =  withAuthRedirect(Massages)
AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

const MyMassagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default MyMassagesContainer;
