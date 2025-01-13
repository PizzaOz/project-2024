import React from "react";
import { sendNewMessageBodyActionCreator, updateNewMessageBodyActionCreator } from "../../state/dialogs-reducer";
import Dialog from "./Dialog";



const DialogContainer = (props) => {

    const state = props.store.getState().dialogPage

    const sendMessage = () => {
        props.store.dispatch(sendNewMessageBodyActionCreator())
    }

    const onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (<Dialog state={state} sendNewMessageBody={sendMessage} updateNewMessageBody={onMessageChange}/>)
}

export default DialogContainer;