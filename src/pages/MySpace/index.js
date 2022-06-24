import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserStory } from "../../store/user/actions";
import { selectUserSpace } from "../../store/user/selectors";

export const MySpace = () => {
  const space = useSelector(selectUserSpace);
  const dispatch = useDispatch();

  const [displayForm, setDisplayForm] = useState(false);

  const showForm = () => {
    setDisplayForm(!displayForm);
  };

  if (!space)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );

  const { stories } = space;
  return (
    <div>
      <h1>{space.title}</h1>
      <button onClick={showForm}>Post a cool story bro</button>
      {displayForm ? (
        <div>
          <form>
            <label for="name">Name</label>
            <input name="name" type="text"></input>
            <label for="content">Story</label>
            <input name="content" type="text"></input>
            <label for="image">Image</label>
            <input name="image" type="file"></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        stories.map((story) => {
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
        })
      )}
    </div>
  );
};
