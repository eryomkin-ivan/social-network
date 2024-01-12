import React from "react";
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPost />
    </div>
  );
};

export default Profile;