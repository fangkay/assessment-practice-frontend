import { useDispatch, useSelector } from "react-redux";
import { deleteUserStory } from "../../store/user/actions";
import { selectUserSpace } from "../../store/user/selectors";

export const MySpace = () => {
  const space = useSelector(selectUserSpace);
  const dispatch = useDispatch();

  if (!space)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );

  const { stories } = space;
  console.log(space);

  return (
    <div>
      <h1>{space.title}</h1>
      {stories.map((story) => {
        return (
          <div key={story.id}>
            <img src={story.imageUrl} alt={story.name}></img>
            <h2>{story.name}</h2>
            <p>{story.content}</p>
            <button
              onClick={() => {
                dispatch(deleteUserStory(story.id, space.id));
              }}
            >
              Delete story
            </button>
          </div>
        );
      })}
    </div>
  );
};
