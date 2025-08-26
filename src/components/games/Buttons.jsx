import React from "react";
import scss from "./Buttons.module.scss";

class Buttons extends React.Component {
  categoryChoose = (event) => {
    const { value } = event.target;

    switch (value) {
      case "popular": {
        const params = {
          key: "7c2d03cce0de42a89375a84a52b7ad08",
          ordering: "-added",
          page_size: 12,
          page: 1,
        };
        this.props.onClick(params);
        console.log("popular selected");
        break;
      }

      case "newest": {
        const currentYear = new Date().getFullYear();
        const startDate = `${currentYear}-01-01`;
        const today = new Date().toISOString().split("T")[0];
        const params = {
          key: "7c2d03cce0de42a89375a84a52b7ad08",
          dates: `${startDate},${today}`,
          page_size: 12,
          page: 1,
        };
        this.props.onClick(params);
        console.log("newest selected");
        break;
      }

      case "lates": {
        const startDate = "1970-01-01";
        const today = new Date().toISOString().split("T")[0];
        const params = {
          key: "7c2d03cce0de42a89375a84a52b7ad08",
          dates: `${startDate},${today}`,
          ordering: "released",
          page_size: 12,
          page: 1,
        };
        this.props.onClick(params);
        console.log("lates selected");
        break;
      }

      default:
        break;
    }
  };

  render() {
    return (
      <div className={scss.buttons}>
        <input
          type="radio"
          name="games"
          id="popular"
          value="popular"
          onClick={this.categoryChoose}
          defaultChecked
        />
        <label className={scss.buttons__button} htmlFor="popular">
   <span>   Best games</span>    
        </label>

        <input
          type="radio"
          name="games"
          id="sport"
          value="sport"
          onClick={this.categoryChoose}
        />
        <label className={scss.buttons__button} htmlFor="sport">
   <span> Sport game</span>      
        </label>

        <input
          type="radio"
          name="games"
          id="newest"
          value="newest"
          onClick={this.categoryChoose}
        />
        <label className={scss.buttons__button} htmlFor="newest">
   <span>    Newest games</span>   
        </label>

        <input
          type="radio"
          name="games"
          id="lates"
          value="lates"
          onClick={this.categoryChoose}
        />
        <label className={scss.buttons__button} htmlFor="lates">
   <span>    Latest games</span>   
        </label>
      </div>
    );
  }
}

export default Buttons;
