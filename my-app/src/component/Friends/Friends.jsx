import Friend from "./Friend/Friend"
import s from "./Friends.module.css"

const Friends = (props) => {
    const friendItem = props.state.friends.map((f) => <Friend friend={f.friend} img={f.img}/>)
    return(
        <div>
            <h3>Friends</h3>
            <div className={s.item}>
            {friendItem}
            </div>
        </div>
    )
}

export default Friends