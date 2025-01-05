import React from "react";
import s from './Dialog.module.css'
import DialogItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";


const Dialog = (props) => {

  const dialog = props.state.dialog.map((d) => <DialogItems id={d.id} name={d.name} />);
  const message = props.state.message.map((m) => <MessageItems message={m.message} />);
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