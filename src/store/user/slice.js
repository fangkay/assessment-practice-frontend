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
    latestStories: (state, action) => {
      console.log(action.payload);
      // const stories = state.space;
      // console.log(stories);
    },
    deleteStory: (state, action) => {
      const newStoriesArray = state.space.stories.filter(
        (story) => story.id !== action.payload
      );
      // console.log("new array", newStoriesArray);
      state.space.stories = newStoriesArray;
    },
  },
});

export const {
  loginSuccess,
  logOut,
  tokenStillValid,
  latestStories,
  deleteStory,
} = userSlice.actions;

export default userSlice.reducer;
