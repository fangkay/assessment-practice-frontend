export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user.profile;

export const selectUserSpace = (state) => {
  const checkSpace = state.user.space;
  console.log(checkSpace);
  return checkSpace;
};
