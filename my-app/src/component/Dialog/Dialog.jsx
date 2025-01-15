import React from "react";
import s from './Dialog.module.css'
import DialogItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";



const Dialog = (props) => {

    const dialog = props.state.dialog.map((d) => <DialogItems key={d.id} id={d.id} name={d.name} />);
    const message = props.state.message.map((m) => <MessageItems  key={m.id} message={m.message} />);

    const newMessageBody = props.state.newMessageBody;

    const sendMessage = () => {
        props.sendNewMessageBody()
    }

    const onMessageChange = (e) => {
        const body = e.target.value
        props.updateNewMessageBody(body)
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