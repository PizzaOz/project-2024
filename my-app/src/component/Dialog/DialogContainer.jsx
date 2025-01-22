import React from "react";
import { sendNewMessageBodyActionCreator, updateNewMessageBodyActionCreator } from "../../state/dialogs-reducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";



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
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessageBody: () => {
            dispatch(sendNewMessageBodyActionCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        }
    }
}

const SuperDialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default SuperDialogContainer;