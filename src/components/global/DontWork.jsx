import React from "react";
import scss from "./DontWork.module.scss";

class DontWork extends React.Component {
  state = {
    isOpen: false,
    isClosing: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isOpen: true }), 10);
  }

  handleClose = () => {
    this.setState({ isClosing: true, isOpen: false });
    setTimeout(() => this.props.onClose(), 300);
  };

  render() {
    const { isOpen, isClosing } = this.state;

    return (
      <div
        className={`${scss.backdrop} ${isOpen ? scss.open : ""} ${
          isClosing ? scss.closing : ""
        }`}
        onClick={this.handleClose}
      >
        <div
          className={`${scss.dontwork} ${isOpen ? scss.open : ""} ${
            isClosing ? scss.closing : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <svg
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
            className={scss.dontwork__close }
            onClick={this.handleClose}
          >
            <path d="M1.28557 25C0.95625 25 0.626931 24.8747 0.376724 24.6227C-0.125574 24.1204 -0.125574 23.306 0.376724 22.8038L22.8043 0.376714C23.3066 -0.125571 24.121 -0.125571 24.6233 0.376714C25.1256 0.878999 25.1256 1.69333 24.6233 2.19593L2.19598 24.6227C1.94389 24.8732 1.61457 25 1.28557 25Z" />
            <path d="M23.7147 25C23.3854 25 23.0564 24.8747 22.8059 24.6227L0.376724 2.19593C-0.125574 1.69333 -0.125574 0.878999 0.376724 0.376714C0.879022 -0.125571 1.69337 -0.125571 2.19598 0.376714L24.6233 22.8038C25.1256 23.306 25.1256 24.1204 24.6233 24.6227C24.3712 24.8732 24.0422 25 23.7147 25Z" />
          </svg>
<img src="./global-image/dontwork.svg" alt="d=Dont Work" className={scss.dontwork__svg} /> 
<p className={scss.dontwork__text}>Sorry, this feature of the site is not working yet. Try again later. Thank you for your understanding</p>
          
        </div>
      </div>
    );
  }
}

export default DontWork;
