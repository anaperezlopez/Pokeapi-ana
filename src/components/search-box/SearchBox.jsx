import React from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';

export default function SearchBox({
  placeholder,
  onSearchChange,
  clearList,
  searchValue,
}) {
  return (
    <div className="SearchBox">
      <input
        className="SearchBox__field"
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
        value={searchValue}
      />
      <button className="SearchBox__clearButton" type="button" onClick={clearList}>Limpiar</button>
    </div>
  );
}

SearchBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  clearList: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};
