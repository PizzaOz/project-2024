import React from "react";
import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
    return(
    <div>
      <ProfileInfo/>
      < MyPost messageDataPost={props.messageDataPost}/>
    </div>
    )
}

export default Profile