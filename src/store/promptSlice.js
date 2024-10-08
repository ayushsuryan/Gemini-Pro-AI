import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import run from "../config/config";

export const sendPrompt = createAsyncThunk(
  "prompt/sendPrompt",
  async (prompt) => {
    const response = await run(prompt);
    return response;
  }
);

export const promptSlice = createSlice({
  name: "prompt",
  initialState: {
    response: "",
    loading: false,
    error: null,
    recentPrompts: [],
  },
  reducers: {
    recentPrompts: (state, action) => {
      state.recentPrompts.push(action.payload);
    },
    newChat: (state, action) => {
      state.response = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendPrompt.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendPrompt.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      })
      .addCase(sendPrompt.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default promptSlice.reducer;
export const { recentPrompts, newChat } = promptSlice.actions;
