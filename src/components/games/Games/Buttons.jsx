import scss from "./Buttons.module.scss";

const Buttons = () => {
  return (
    <div className={scss.buttons}>
      <button className={scss.buttons__button}>Mewest games</button>
      <button className={scss.buttons__button}>Latest games</button>
      <button className={scss.buttons__button}>Fight games</button>
      <button className={scss.buttons__button}>Sport games</button>
    </div>
  );
};

export default Buttons;
