import scss from "../../scss/comment/comments.module.scss";
import commentsArray from "../../json/comments.json";
import Comment from "./Comment";

const Comments = () => {
  return (
    <section className={scss.comments}>
      <div className={scss.comments__container}>
        <ul className={scss.comments__list}>
          {commentsArray.map((comment) => (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Comments;
