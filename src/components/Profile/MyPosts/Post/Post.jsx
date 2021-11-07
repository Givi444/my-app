import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png" />
      Post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};
export default Post;
