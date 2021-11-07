import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/FotoJet9238ksajgd928346jsgd.jpg" />
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
