import scss from "./SearchInput.module.scss";
 import React from "react";

class SearchInput extends React.Component {
  handleChange = (event) => {
    const value = event.target.value;
    this.props.onInputChange(value);  // повідомляємо батьку про зміну тексту

    const params = {
      key: "7c2d03cce0de42a89375a84a52b7ad08",
      search: value,
      page_size: 12,
      page: 1,
    };
    this.props.onSearch(params);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search games..."
        value={this.props.value}  // контролюється з батька
        onChange={this.handleChange}
        className={scss.games__input}
      />
    );
  }
}

export default SearchInput