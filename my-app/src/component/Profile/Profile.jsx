import React from "react";
import MyPost from "./MyPost/MyPost.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      < MyPost state={props.state} dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;