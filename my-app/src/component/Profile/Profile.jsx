import React from "react";
import s from './Profile.module.css'
import Post from "../Post/Post";

const Profile = () => {
    return(
    <div className={s.content}>
      <div>
        <img src="https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg" alt=""></img>
      </div>
      <div>ava</div>
      <div>My post</div>
      <div>New post</div>
      <div>
      < Post name="Миша" age="30"/>
      < Post post="что то пишу" like='15'/>
      </div>
    </div>
    )
}

export default Profile