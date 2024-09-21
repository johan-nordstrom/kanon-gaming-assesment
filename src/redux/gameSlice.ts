import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Game, Category } from "../types";
import gameData from "../../Copy of game-data.json";

interface GamesState {
  categories: Category[];
  games: Game[];
  loading: boolean;
  error: string | null;
}

const initialState: GamesState = {
  categories: [],
  games: [],
  loading: false,
  error: null,
};

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async ({
    category,
    search,
    pageNumber,
    pageSize,
  }: {
    category?: string;
    search?: string;
    pageNumber?: number;
    pageSize?: number;
  }) => {
    console.log('gamedata', gameData);
    const response = await axios.get(
      "https://casino.api.pikakasino.com/v1/pika/en/games/tiles",
      {
        params: { category, search, pageNumber, pageSize },
      }
    );
    if (search) {
      console.log('search', search);
      let searchedGames = gameData.filter((game) => { return game.title.toLowerCase().includes(search.toLowerCase()) } );
      console.log('searchedGames', searchedGames);
      return searchedGames
    }
    return gameData;
  }
);

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false;
        state.games = action.payload;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch games";
      });
  },
});

export default gamesSlice.reducer;
