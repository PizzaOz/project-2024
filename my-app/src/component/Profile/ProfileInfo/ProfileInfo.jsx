import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <div>HI</div>
  }

  return (
    <div className={s.item}>
      <div>
        <img src="https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg" alt=""></img>
      </div>
      <div>
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large}/>
        </div>
        <div>Status: {props.profile.aboutMe}</div>
        <div> Contacts:
        <div>{props.profile.contacts.facebook}</div>
        <div>{props.profile.contacts.website}</div>
        <div>{props.profile.contacts.vk}</div>
        <div>{props.profile.contacts.twitter}</div>
        <div>{props.profile.contacts.instagram}</div>
        </div>
        <div>{props.profile.lookingForAJob ? <div>Ищу работу</div> : <div>Не ищу работу</div>} </div>
        <div>{props.profile.lookingForAJobDescription}</div>
        <div>
          <div>{props.profile.fullName}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo