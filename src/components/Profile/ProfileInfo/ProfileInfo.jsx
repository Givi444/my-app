import React from 'react';
import s from "./ProfileInfo.module.css";
import MyPosts from "../MyPosts/MyPosts";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/FotoJet9238ksajgd928346jsgd.jpg" />
      </div>
      <div className={s.descriptionBlock}>
          avatar + description
      </div>
    </div>
  );
};
export default ProfileInfo;
