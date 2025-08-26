import scss from "./Modal.module.scss";
import React from "react";
import Stars from "./Stars";
import BuyForm from "../global/BuyForm";

class Modal extends React.Component {
  state = {
    isDesktop: window.innerWidth >= 1200,
    isClosing: false,
    isOpen: false, // для ефекту появи
  };

  handleResize = () => {
    this.setState({ isDesktop: window.innerWidth >= 1200 });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    setTimeout(() => this.setState({ isOpen: true }), 10); // плавне відкриття
    console.log(this.props.game);
    
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleClose = () => {
    this.setState({ isClosing: true, isOpen: false });
    setTimeout(() => this.props.onClose(), 300);
  };

  render() {
    const { game, onButtonClick } = this.props;
    const modalGame = game[0];
    const { isDesktop, isClosing, isOpen } = this.state;

    const cleanText = modalGame.description.replace(/<br\s*\/?>/gi, "</p><p>");
    const finalHtml = `<p>${cleanText}</p>`; // тут правильно

    return (
      <div
        className={`${scss.backdrop} ${isOpen ? scss.open : ""} ${
          isClosing ? scss.closing : ""
        }`}
        onClick={this.handleClose} //закриваємо при кліку на фон
      >
      <div
        className={`${scss.modal} ${isOpen ? scss.open : ""} ${
          isClosing ? scss.closing : ""
        }`}
        onClick={(e) => e.stopPropagation()} // клік всередині не закриває модалку
      >
        <svg
          viewBox="0 0 25 25"
          xmlns="http://www.w3.org/2000/svg"
          className={scss.modal__close}
          onClick={this.handleClose}
        >
          <path d="M1.28557 25C0.95625 25 0.626931 24.8747 0.376724 24.6227C-0.125574 24.1204 -0.125574 23.306 0.376724 22.8038L22.8043 0.376714C23.3066 -0.125571 24.121 -0.125571 24.6233 0.376714C25.1256 0.878999 25.1256 1.69333 24.6233 2.19593L2.19598 24.6227C1.94389 24.8732 1.61457 25 1.28557 25Z" />
          <path d="M23.7147 25C23.3854 25 23.0564 24.8747 22.8059 24.6227L0.376724 2.19593C-0.125574 1.69333 -0.125574 0.878999 0.376724 0.376714C0.879022 -0.125571 1.69337 -0.125571 2.19598 0.376714L24.6233 22.8038C25.1256 23.306 25.1256 24.1204 24.6233 24.6227C24.3712 24.8732 24.0422 25 23.7147 25Z" />
        </svg>

        <div className={scss.modal__about}>
          <div className={scss.modal__photo}>
            <img
              src={modalGame.background_image}
              alt="background_image"
              className={scss.modal__img}
            />
          </div>
          {!isDesktop && (
            <h3 className={scss.modal__title}>{modalGame.name}</h3>
          )}
          <Stars stars={Math.round(modalGame.rating)} />
          <ul className={scss.modal__list}>
            <li className={scss.modal__li}>
              <p className={scss.modal__descript}>Date: <span className={scss.modal__des} >{modalGame.released}</span> </p>
            </li>
            <li className={scss.modal__li}>
              <p className={scss.modal__descript}>Genre: {modalGame.genres.map((genre=> <span className={scss.modal__des} >{genre.name}</span> ))}</p>
            </li>
            <li className={scss.modal__li}>
              <p className={scss.modal__descript}>Platform: {modalGame.platforms.slice(0, 2).map((platform, index) => (<span className={scss.modal__des} key={index}>{platform.platform.name}</span>))} </p>
            </li>
          </ul>
        </div>

        <div className={scss.modal__info}>
          {isDesktop && (
            <h3 className={scss.modal__title}>{modalGame.name}</h3>
          )}
          <h4 className={scss.modal__mark}>Description:</h4>
          <div
            className={scss.modal__description}
            dangerouslySetInnerHTML={{ __html: finalHtml }}
          ></div>
          <div className={scss.modal__buttons}>
                  <BuyForm className={scss.modal__button}/>
            <button
              className={scss.modal__button}
              onClick={onButtonClick} // тут виправлено
            >
              Preview
            </button>
          </div>
        </div>
      </div>
       </div>
    );
  }
}

export default Modal;
