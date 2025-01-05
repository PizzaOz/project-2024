import React from "react";
import s from './../Dialog.module.css'



const MessageItems = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}


export default MessageItems;