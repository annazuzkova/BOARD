import scss from "../../scss/comment/comment.module.scss";

const Stars = (stars) => {
  const starsRender = () => {
    const starsArray = [];

    for (let i = 1; i <= 5; i += 1) {
      if (i <= stars) {
        starsArray.push(
          <svg className={scss.comment__star} key={i}>
            <use href="../../image/icons/symbol-defs.svg#comments-star"></use>
          </svg>
        );
      } else {
        starsArray.push(
          <svg className={scss["comment__star--not-chouse"]} key={i}>
            <use href="../../image/icons/symbol-defs.svg#comments-star"></use>
          </svg>
        );
      }
    }

    return starsArray;
  };

  return <div className={scss.comment__stars}>{starsRender()}</div>;
};

export default Stars;
