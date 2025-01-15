import React from "react";
import s from './User.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGaF6VVs7zCpWosloDYCHoZMIzuaoRbFc2rQ&s',
                followed: true,
                fullname: 'Misha',
                status: 'Hi iiiisss',
                location: {
                    city: 'Moskva', country: 'Russia'
                }
            },
            {
                id: 2,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaddpkCZYFU5GRDowSY7ziP0e4Y7IwhKQ37Q&s',
                followed: true,
                fullname: 'Dima',
                status: 'Hi 1212',
                location: {
                    city: 'MGN', country: 'Russia'
                }
            },
            {
                id: 3,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYuanYTxxSHP8tIgVAyBFZ3rUGGVJJaAipIA&s',
                followed: true,
                fullname: 'Vlada',
                status: 'Hi 331ss',
                location: {
                    city: 'Moskva', country: 'Russia'
                }
            },
        ])
    }

    return (
        <div>
            {
                props.users.map((u) => <div key={u.id}>
                    <div>
                        <img src={u.img} className={s.img} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                    <div>{u.fullname}</div>
                    <div>{u.status}</div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
                )
            }
        </div>
    )
}

export default Users