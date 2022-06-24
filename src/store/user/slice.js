import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  space: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
      state.space = action.payload.space;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
      state.space = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      state.space = action.payload.space;
    },
    deleteStory: (state, action) => {
      const newStoriesArray = state.space.stories.filter(
        (story) => story.id !== action.payload
      );
      state.space.stories = newStoriesArray;
    },
    updateStory: (state, action) => {
      const newStory = action.payload.space.stories;
      state.space.stories = newStory;
    },
  },
});

export const {
  loginSuccess,
  logOut,
  tokenStillValid,
  deleteStory,
  updateStory,
} = userSlice.actions;

export default userSlice.reducer;
