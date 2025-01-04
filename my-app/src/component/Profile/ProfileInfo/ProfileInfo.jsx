import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

  return (
    <div className={s.item}>
      <div>
        <img src="https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg" alt=""></img>
      </div>
      <div>
        <div className={s.descriptionBlock}>
          ava
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo