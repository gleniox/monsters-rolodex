/* eslint-disable react/react-in-jsx-scope */
import { Component } from "react";
import { PropTypes } from "prop-types";

class SearchBox extends Component {
  render() {
    const { onSearchChangeHandler, placeHolder} = this.props;

    return (
      <input
        className="search-box"
        type="search"
        placeholder={placeHolder}
        onChange={onSearchChangeHandler}
      />
    );
  }
}

SearchBox.propTypes = {
  onSearchChangeHandler: PropTypes.func,
  placeHolder: PropTypes.string
};

export default SearchBox;
