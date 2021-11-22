import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png" alt="avatar" />
      { props.message }
      <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  );
};
export default Post;
