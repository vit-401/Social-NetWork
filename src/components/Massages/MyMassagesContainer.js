import React from "react";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from "../../Redux/dialogs-reduser";
import {connect} from "react-redux";
import Massages from "./Massages";


function mapStateToProps(state) {
    return {
        messages: state.dialogPage.messages,
        dialogs: state.dialogPage.dialogs,
        newMessageBody: state.dialogPage.newMessageBody,

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

const MyMassagesContainer = connect(mapStateToProps, mapDispatchToProps)(Massages)

export default MyMassagesContainer;
