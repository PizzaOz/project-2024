import { connect } from "react-redux"
import Friends from "./Friends";

// const Friends = (props) => {
//     const friendItem = props.state.friends.map((f) => <Friend friend={f.friend} img={f.img}/>)
//     return(
//         <div>
//             <h3>Friends</h3>
//             <div className={s.item}>
//             {friendItem}
//             </div>
//         </div>
//     )
// }

const mapStateToProps = (state) => {
    return {
        state: state.friendsPage
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer