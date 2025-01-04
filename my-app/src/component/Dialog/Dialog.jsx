import React from "react";
import s from './Dialog.module.css'

console.log(s.dialogs)

const Dialog = (props) => {
    return (
        <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={`${s.dialog} ${s.active}`}>
                Misha
            </div>
            <div className={s.dialog}>
                Vlada
            </div>
            <div className={s.dialog}>
                Dima
            </div>
            <div className={s.dialog}>
                Sergey
            </div>
            <div className={s.dialog}>
                Vladimer
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.dialog}>Hi</div>
            <div className={s.dialog}>How is it</div>
            <div className={s.dialog}>Yo</div>
        </div>
        </div>
    )
}

export default Dialog