import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCard } from "../api";

export const postCardThunk = createAsyncThunk("post", (param, thunkAPI) => {
    const posts = addCard();
  return posts;
});