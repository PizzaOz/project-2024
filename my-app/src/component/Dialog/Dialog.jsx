import React from "react";
import s from './Dialog.module.css'
import { NavLink } from "react-router-dom";


const dialogData = [
    { id: '1', name: 'Misha' },
    { id: '2', name: 'Vlada' },
    { id: '3', name: 'Dima' },
    { id: '4', name: 'Sergey' },
    { id: '5', name: 'Vladimer' },
]

const messageData = [
    { id: '1', message: 'Hi' },
    { id: '2', message: 'How is it ? ' },
    { id: '3', message: 'Yo' },
    { id: '4', message: 'Boo' },
    { id: '5', message: 'Privet' },
]


const DialogItems = (props) => {
    const id = `/dialog/${props.id}`;
    return (
        <div className={s.dialog}>
            <NavLink to={id}>{props.name}</NavLink>
        </div>
    )
}

const MessageItems = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const dialog = dialogData.map(d => <DialogItems id={d.id} name={d.name} />);
const message = messageData.map(m => <MessageItems message={m.message} />)



const Dialog = (props) => {
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

export default Dialog