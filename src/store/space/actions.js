import axios from "axios";
import { startLoading, spacesFetched, spacesDetailsFetched } from "./slice";

const API_URL = `http://localhost:4000/`;

export const fetchSpaces = async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${API_URL}space`);
    const spaces = response.data;
    dispatch(spacesFetched(spaces));
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchSpaceDetails = (spaceId) => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${API_URL}space/details/${spaceId}`);
    const spacesDetails = response.data;
    console.log(spacesDetails);
    dispatch(spacesDetailsFetched(spacesDetails));
  } catch (e) {
    console.log(e.message);
  }
};
