import React from "react";
import s from './User.module.css'
import axios from 'axios'

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map((u) => <div key={u.id}>
                        <div>
                            <img src={u.photos.small || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYuanYTxxSHP8tIgVAyBFZ3rUGGVJJaAipIA&s'} className={s.img} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                        </div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                    )
                }
            </div>
        )
    }
}


// let Users = (props) => {

//     if (props.users.length === 0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//             props.setUsers(response.data.items)
//         })
//     }

//     return (
//         <div>
//             {
//                 props.users.map((u) => <div key={u.id}>
//                     <div>
//                         <img src={u.photos.small || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYuanYTxxSHP8tIgVAyBFZ3rUGGVJJaAipIA&s'} className={s.img} />
//                     </div>
//                     <div>
//                         {u.followed
//                             ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
//                             : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
//                     </div>
//                     <div>{u.name}</div>
//                     <div>{u.status}</div>
//                     <div>{'u.location.country'}</div>
//                     <div>{'u.location.city'}</div>
//                 </div>
//                 )
//             }
//         </div>
//     )
// }

export default Users