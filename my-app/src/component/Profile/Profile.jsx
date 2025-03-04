import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostContainer from "./MyPost/MyPostContainer.jsx";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      < MyPostContainer />
    </div>
  )
}

export default Profile;