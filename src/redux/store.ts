import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../redux/gameSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      games: gamesReducer,
    },
  });
};

export type store = ReturnType<typeof makeStore>;

export const store = makeStore();
