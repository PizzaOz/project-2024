import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, followingInProgress, unfollowThunkCreator, followThunkCreator }) => {
    return (
        <div>
            <Paginator currentPage={currentPage}
                onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
            <div>
                {
                    users.map((u) => <User user={u}
                        followingInProgress={followingInProgress}
                        key={u.id}
                        unfollowThunkCreator={unfollowThunkCreator}
                        followThunkCreator={followThunkCreator}
                    />)
                }
            </div>
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