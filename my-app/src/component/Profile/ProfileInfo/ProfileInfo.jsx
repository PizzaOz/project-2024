import React from "react";
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <div>HI</div>
  }

  return (
    <div className={s.item}>
      <div>
        <img src="https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg" alt=""></img>
      </div>
      <div>
        <div className={s.descriptionBlock}>
          <img src={profile.photos.large}/>
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <div> Contacts:
        <div>{profile.contacts.facebook}</div>
        <div>{profile.contacts.website}</div>
        <div>{profile.contacts.vk}</div>
        <div>{profile.contacts.twitter}</div>
        <div>{profile.contacts.instagram}</div>
        </div>
        <div>{profile.lookingForAJob ? <div>Ищу работу</div> : <div>Не ищу работу</div>} </div>
        <div>{profile.lookingForAJobDescription}</div>
        <div>
          <div>{profile.fullName}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo