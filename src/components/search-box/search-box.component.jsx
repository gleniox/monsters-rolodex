/* eslint-disable react/react-in-jsx-scope */
import { PropTypes } from "prop-types";
import "./search-box.styles.css";

const SearchBox = (props) => {
  const { onSearchChangeHandler, placeHolder, className } = props;

  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeHolder}
      onChange={onSearchChangeHandler}
    />
  );
}

SearchBox.propTypes = {
  onSearchChangeHandler: PropTypes.func,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
};

export default SearchBox;
