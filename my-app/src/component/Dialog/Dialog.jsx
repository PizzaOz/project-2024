import React from "react";
import s from './Dialog.module.css'
import DialogItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";


const Dialog = (props) => {
  const {messageData} = props.messageData;
  const {dialogData} = props.dialogData;

  const dialog = dialogData.map((d) => <DialogItems id={d.id} name={d.name} />);
  const message = messageData.map((m) => <MessageItems message={m.message} />);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>
        </div>
    )
}

export default Dialog;