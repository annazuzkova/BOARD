import scss from "../../scss/comment/comment.module.scss";
import Stars from "./Stars";

const Comment = ({ comment }) => {
  return (
    <article className={scss.comment}>
      <Stars stars={comment.stars} />
      <p className={scss.comment__text}>{comment.comment}</p>
      <div className={scss.comment__user}>
        <div className={scss.comment__avatar}>
          <img
            src={comment.avatar}
            alt="user photo"
            className={scss.comment__img}
          />
        </div>
        <div className={scss.comment__userinfo}>
          <span className={scss.comment__name}>{comment.author}</span>
          <span className={scss.comment__workplace}>{comment.workplace}</span>
        </div>
      </div>
    </article>
  );
};

export default Comment;
