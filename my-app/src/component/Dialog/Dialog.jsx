import React from "react";
import s from './Dialog.module.css'
import DialogItems from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";
import { Field, reduxForm } from "redux-form";
import { TextArea } from "../common/FormsControls/FormsControl";
import { maxLengthCreator, required } from "../../utils/validators/validators";




const Dialog = (props) => {

    const dialog = props.state.dialog.map((d) => <DialogItems key={d.id} id={d.id} name={d.name} />);
    const message = props.state.message.map((m) => <MessageItems key={m.id} message={m.message} />);
    const newMessageBody = props.state.newMessageBody;

    const addNewMessage = (values) => {
        props.sendNewMessageBody(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                <div>{message}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field component={TextArea} validate={[required, maxLength50]} name='newMessageBody' placeholder='Enter your message'/>
            </div>
            <div><button >Send Message</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialog;