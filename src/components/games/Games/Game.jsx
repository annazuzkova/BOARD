import scss from "./Game.module.scss";

const Game = () => {
  return (
    <article className={scss.game}>
      <div className={scss.game__photo}></div>
      <h3 className={scss.game__title}>core philosophies</h3>
      <div className={scss.game__user}>
        <div className={scss.game__avatar}></div>
        <div className={scss.game__userinfo}>
          <span className={scss.game__name}>Cameron Williamson</span>
          <span className={scss.game__workplace}>Gillette</span>
        </div>
      </div>
      <button className={scss.game__button}>Live Demo</button>
    </article>
  );
};

export default Game;
