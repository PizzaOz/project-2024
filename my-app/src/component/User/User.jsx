import React from "react";
import s from './User.module.css'
import { NavLink } from "react-router-dom";




let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p},</span>
                })}
            </div>
            {
                props.users.map((u) => <div key={u.id}>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYuanYTxxSHP8tIgVAyBFZ3rUGGVJJaAipIA&s'} className={s.img} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                               props.unfollowThunkCreator(u.id)
                                // props.toggleFollowingProgress(true, u.id)
                                // userAPI.deleteUsers(u.id)
                                //     .then(data => {
                                //         if (data.resultCode === 0) {
                                //             props.unfollow(u.id);
                                //         }
                                //         props.toggleFollowingProgress(false, u.id)
                                //     })
                            }}>Unfollow</button>
                            :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.followThunkCreator(u.id)
                                // props.toggleFollowingProgress(true, u.id)
                                // userAPI.postUsers(u.id)
                                //     .then(data => {
                                //         if (data.resultCode === 0) {
                                //             props.follow(u.id);
                                //         }
                                //         props.toggleFollowingProgress(false, u.id)
                                //     })
                            }}>Follow</button>}

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

export default Users

// let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
//         let pages = [];
//         for (let i=1; i <= pagesCount; i++) {
//             pages.push(i)
//         }
//         return (
//             <div>
//                 <div>
//                     {pages.map(p => {
//                         return <span className={this.props.currentPage === p && s.selectedPage}
//                         onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
//                     })}
//                 </div>
//                 {
//                     this.props.users.map((u) => <div key={u.id}>
//                         <div>
//                             <img src={u.photos.small || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYuanYTxxSHP8tIgVAyBFZ3rUGGVJJaAipIA&s'} className={s.img} />
//                         </div>
//                         <div>
//                             {u.followed
//                                 ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
//                                 : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
//                         </div>
//                         <div>{u.name}</div>
//                         <div>{u.status}</div>
//                         <div>{'u.location.country'}</div>
//                         <div>{'u.location.city'}</div>
//                     </div>
//                     )
//                 }
//             </div>
//         )