import React from "react";
import { sendNewMessageBodyActionCreator, updateNewMessageBodyActionCreator } from "../../state/dialogs-reducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRederect";
import { compose } from "redux";



// const DialogContainer = (props) => {

//     const state = props.store.getState().dialogPage

//     const sendMessage = () => {
//         props.store.dispatch(sendNewMessageBodyActionCreator())
//     }

//     const onMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyActionCreator(body))
//     }

//     return (<Dialog state={state} sendNewMessageBody={sendMessage} updateNewMessageBody={onMessageChange}/>)
// }

let mapStateToProps = (state) => {
    return {
        state: state.dialogPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessageBody: (newMessageBody) => {
            dispatch(sendNewMessageBodyActionCreator(newMessageBody))
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        }
    }
}

export default compose(
connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialog)
