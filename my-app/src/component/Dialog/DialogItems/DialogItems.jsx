import React from "react";
import s from './../Dialog.module.css'
import { NavLink } from "react-router-dom";

const DialogItems = (props) => {
    const id = `/dialog/${props.id}`;
    return (
        <div className={s.dialog}>
            <NavLink to={id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItems;