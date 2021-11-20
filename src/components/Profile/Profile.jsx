import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts/>
        </div>
    );
};
export default Profile;
