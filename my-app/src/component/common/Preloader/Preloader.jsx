import React from "react";
import KotLoding from '../../../assete/img/KotLoding.gif'
import s from './Preloader.module.css'
const Preloader = (props) => {
    return (
        <div>
            {props.isFetching ? <img src={KotLoding} className={s.item} /> : null}
        </div>
    )
}

export default Preloader