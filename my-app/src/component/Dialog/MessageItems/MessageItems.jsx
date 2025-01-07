import React from "react";
import s from './../Dialog.module.css'



const MessageItems = (props) => {

const textInit = React.createRef()

const messagePost = () => {
    const text = textInit.current.value
    alert(text)
}
    return (
        <div >
            <div>
                <textarea ref={textInit}></textarea>
            </div>
            <div>
                <button onClick={messagePost}>Add post</button>
            </div>
            <div className={s.dialog}>{props.message}</div>
        </div>
    )
}


export default MessageItems;