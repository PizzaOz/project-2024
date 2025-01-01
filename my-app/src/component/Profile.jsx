import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return(
    <div className={s.content}>
      <div>
        <img src="https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg" alt=""></img>
      </div>
      <div>ava</div>
      <div>My post
        <div>New post</div>
      </div>
      <div>
       <div className={s.item}>post1</div>
       <div className={s.item}>post2</div>
      </div>
    </div>
    )
}

export default Profile