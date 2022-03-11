import React from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';

export default function SearchBox({ placeholder, onSearchChange }) {
  return (
    <input
      className="SearchBox"
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
}

SearchBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};
