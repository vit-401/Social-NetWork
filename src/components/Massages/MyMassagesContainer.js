import React from "react";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from "../../Redux/dialogs-reduser";
import {connect} from "react-redux";
import Massages from "./Massages";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";


function mapStateToProps(state) {
    return {
        messages: state.dialogPage.messages,
        dialogs: state.dialogPage.dialogs,
        newMessageBody: state.dialogPage.newMessageBody,

    }
}


function mapDispatchToProps(dispatch) {
    return {
        sendMassage(newMassage) {
            let action = sendMessageCreator(newMassage)
            dispatch(action)
        },
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Massages)
// let AuthRedirectComponent =  withAuthRedirect(Massages)
//
// const MyMassagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


// export default MyMassagesContainer;
