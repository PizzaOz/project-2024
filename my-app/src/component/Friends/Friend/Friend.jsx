import s from './Friend.module.css'

const Friend = (props) => {
    return(
        <div className={s.content}>
            <div>
                <img src={props.img}/>
                <div className={s.item}>
                    {props.friend}
                </div>
            </div>
        </div>
    )
}

export default Friend