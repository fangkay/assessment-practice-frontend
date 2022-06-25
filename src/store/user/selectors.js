export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user.profile;

export const selectUserSpace = (state) => {
  const checkSpace = state.user.space;
  return checkSpace;
};

export const selectUpdatedSpace = (state) => state.space;
