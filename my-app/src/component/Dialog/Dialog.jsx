import React from "react";
import s from './Dialog.module.css'
import DialogItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";
import { sendNewMessageBodyActionCreator, updateNewMessageBodyActionCreator } from "../../state/state";


const Dialog = (props) => {

    const state = props.store.getState().dialogPage

    const dialog = state.dialog.map((d) => <DialogItems id={d.id} name={d.name} />);
    const message = state.message.map((m) => <MessageItems message={m.message} />);

    const newMessageBody = state.newMessageBody;

    const sendMessage = () => {
        props.store.dispatch(sendNewMessageBodyActionCreator())
    }

    const onMessageChange = (e) => {
        const text = e.target.value
        props.store.dispatch(updateNewMessageBodyActionCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
                <div>
                    <textarea placeholder='enter your message' onChange={onMessageChange} value={newMessageBody}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog;