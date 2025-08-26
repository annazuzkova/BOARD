import scss from "./Game.module.scss";
import React from "react";
import Title from "./Title";

class Game extends React.Component {
  showMoreInfo = (event) => {
    const slug = event.target.id;
    if (!slug) return; // захист від undefined
    this.props.onClick(slug);
  };

  render() {
    const { game } = this.props;

    return (
      <article className={scss.game}>
        <div className={scss.game__photo}>
          <img
            src={game.background_image || "/placeholder.jpg"}
            alt={game.name || "Game image"}
            className={scss.game__img}
          />
        </div>

       <Title>{game.name}</Title>
        <h3 className={scss.game__title}>{game.name}</h3>

        <div className={scss.game__user}>
          <div className={scss.game__avatar}></div>
          <div className={scss.game__userinfo}>
            <span className={scss.game__name}>Cameron Williamson</span>
            <span className={scss.game__workplace}>Gillette</span>
          </div>
        </div>

        {game.slug && (
          <button
            className={scss.game__button}
            id={game.slug}
            onClick={this.showMoreInfo}
          >
            Live Demo
          </button>
        )}
      </article>
    );
  }
}

export default Game;
