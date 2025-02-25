import React from "react";
import s from './Users.module.css'
import { NavLink } from "react-router-dom";





const User = ({user, followingInProgress, unfollowThunkCreator,followThunkCreator}) => {
    return (
                <div>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYuanYTxxSHP8tIgVAyBFZ3rUGGVJJaAipIA&s'} className={s.img} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ?
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollowThunkCreator(user.id)
                            }}>Unfollow</button>
                            :
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                followThunkCreator(user.id)
                            }}>Follow</button>}
                    </div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </div>
    )

}

export default User

