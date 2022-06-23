import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spaces: null,
  spaceDetails: null,
};

export const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    spacesFetched: (state, action) => {
      state.spaces = action.payload;
      // console.log("fetched spaces", action);
    },
    spacesDetailsFetched: (state, action) => {
      state.spaceDetails = action.payload;
      console.log("fetched spaces details", action);
    },
  },
});

export const { startLoading, spacesFetched, spacesDetailsFetched } =
  spaceSlice.actions;
export default spaceSlice.reducer;
