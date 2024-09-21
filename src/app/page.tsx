"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchGames } from "../redux/gameSlice";
import CategoryMenu from "../components/CategoryMenu";
import GamesList from "../components/GamesList";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGames({}));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Game Lobby</h1>
      <SearchBar />
      <div className={styles.content}>
        <GamesList />
      </div>
    </div>
  );
}
