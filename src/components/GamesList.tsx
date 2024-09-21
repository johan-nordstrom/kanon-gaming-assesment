import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import styles from "../styles/GamesList.module.scss";

export default function GamesList() {
  const games = useSelector((state: RootState) => state.games.games);

  return (
    <div className={styles.gamesList}>
      {games.map((game) => (
        <div key={game.id} className={styles.gameCard}>
          <img src={game.thumb ? game.thumb.url : ""} alt={game.thumb ? game.thumb.title : ""} />
          <h3>{game.title}</h3>
          <p>{game.providerName}</p>
        </div>
      ))}
    </div>
  );
}
