export const selectSpaces = (reduxState) => reduxState.space.spaces;

export const selectSpacesDetails = (reduxState) =>
  reduxState.space.spaceDetails;

// export const selectSpacesStories = (reduxState) => {
//   const details = reduxState.space.spaceDetails;

//   const stories = details.stories;

//   const sortedStories = [...stories].sort(
//     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//   );

//   return {
//     ...details,
//     stories: sortedStories,
//   };
// };

// const clonedArray = reduxState.space.spaceDetails.stories;
// console.log(clonedArray);
// return clonedArray.sort((a, b) =>
//   a.stories.name.localeCompare(b.stories.name)
// );
