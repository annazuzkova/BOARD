import scss from "./Verified.module.scss";
import checkIcon from "../../image/comments/LightGray.svg";

const Verified = ({ verified }) => {
  const checkVerified = () => {
    if (verified) {
      return (
        <div className={scss.comment__verified}>
          <img src={checkIcon} alt="check" className={scss.comment__check} />
          <span className={scss.comment__status}>Verified</span>
        </div>
      );
    } else {
      return <span className={scss.comment__status}>Unverified</span>;
    }
  };

  return checkVerified();
};

export default Verified;
