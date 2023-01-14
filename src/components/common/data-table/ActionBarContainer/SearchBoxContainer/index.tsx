import React from 'react';
import './SearchBoxContainer.module.scss'

const SearchBoxContainer = () => {
  return (
    <div className="searchBox" style={{
      borderBottom: '1px solid #d9dfe2',
      flex: '1',
      padding: '0 20px',
      margin: '0 20px',
    }}>
      <input style={{background: 'none', width: '100%'}} placeholder="search" type="text"/>
    </div>
  );
};

export default SearchBoxContainer;
