import React from "react";
import s from './Dialog.module.css'
import { NavLink } from "react-router-dom";

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

const Dialog = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems id='1' name='Misha'/>
                <DialogItems id='2' name='Vlada'/>
                <DialogItems id='3' name='Dima'/>
                <DialogItems id='4' name='Sergey'/>
                <DialogItems id='5' name='Vladimer'/>
            </div>
            <div className={s.messages}>
                <MessageItems message='Hi'/>
                <MessageItems message='How is it ? '/>
                <MessageItems message='Yo'/>
            </div>
        </div>
    )
}

export default Dialog