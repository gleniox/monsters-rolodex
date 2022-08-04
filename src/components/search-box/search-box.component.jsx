/* eslint-disable react/react-in-jsx-scope */
import { Component } from "react";
import { PropTypes } from "prop-types";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { onSearchChangeHandler, placeHolder, className } = this.props;

    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeHolder}
        onChange={onSearchChangeHandler}
      />
    );
  }
}

SearchBox.propTypes = {
  onSearchChangeHandler: PropTypes.func,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
};

export default SearchBox;
