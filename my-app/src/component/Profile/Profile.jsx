import React from "react";
import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = () => {
    return(
    <div>
      <ProfileInfo/>
      < MyPost />
    </div>
    )
}

export default Profile