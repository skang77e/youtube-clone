import React from "react";
import HomeButton from "./HomeButton";
import SearchBar from "./SearchBar";
import styles from "../css/header.module.css";

const Header = ({ onAfterSearch, onSearch }) => {
  return (
    <header className={styles.header}>
      <HomeButton />
      <SearchBar onSearch={onSearch} onAfterSearch={onAfterSearch} />
    </header>
  );
};
export default Header;
