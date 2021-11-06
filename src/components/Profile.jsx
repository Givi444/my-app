import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
        <div>
          <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/FotoJet9238ksajgd928346jsgd.jpg" />
        </div>
        <div>
          avatar + description
        </div>
        <div>
          My posts
          <div>
            New posts
          </div>
          <div className={s.posts}>
            <div className={s.item}>
              Post 1
            </div>
            <div className={s.item}>
              Post 2
            </div>
          </div>
        </div>
      </div>
  );
};
export default Profile;