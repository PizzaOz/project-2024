import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostContainer from "./MyPost/MyPostContainer.jsx";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      < MyPostContainer store={props.store} dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;