import React from "react";
import s from './../Dialog.module.css'



const MessageItems = (props) => {

    return (
        <div >
            <div className={s.dialog}>{props.message}</div>
        </div>
    )
}


export default MessageItems;