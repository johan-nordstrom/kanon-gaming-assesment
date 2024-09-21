import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchGames } from "../redux/gameSlice";
import styles from "../styles/SearchBar.module.scss";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchGames({ search }));
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchBar}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search games..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
