import scss from "./Games.module.scss";
import Game from "./Game";
import Buttons from "./Buttons";

const Games = () => {
  return (
    <div className={scss.games}>
      <div className={scss.games__container}>
        <Buttons />
        <ul className={scss.games__list}>
          <li className={scss.games__item}>
            <Game />
          </li>
          <li className={scss.games__item}>
            <Game />
          </li>
          <li className={scss.games__item}>
            <Game />
          </li>
          <li className={scss.games__item}>
            <Game />
          </li>
          <li className={scss.games__item}>
            <Game />
          </li>
          <li className={scss.games__item}>
            <Game />
          </li>
          <li className={scss.games__item}>
            <Game />
          </li>
          <li className={scss.games__item}>
            <Game />
          </li>
          <li className={scss.games__item}>
            <Game />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Games;
