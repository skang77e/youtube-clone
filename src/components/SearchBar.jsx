import React from "react";
import styles from "../css/searchbar.module.css";

const SearchBar = ({ onAfterSearch, onSearch }) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const keyword = inputRef.current.value;
    keyword && onSearch(keyword);
    onAfterSearch();
  };

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.text_input}
        type='search'
        placeholder='Search...'
        ref={inputRef}
      />
      <button type='button' className={styles.search}>
        <i className='fas fa-search'></i>
      </button>
    </form>
  );
};

export default SearchBar;
