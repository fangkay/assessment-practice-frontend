import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserStory } from "../../store/user/actions";
import { selectUserSpace } from "../../store/user/selectors";
import { submitStory } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";

export const MySpace = () => {
  const space = useSelector(selectUserSpace);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const [displayForm, setDisplayForm] = useState(false);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(submitStory(name, content, image, token, space.id));
    setName("");
    setContent("");
    setImage("");
  };

  return (
    <div>
      <h1>{space.title}</h1>
      {displayForm ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label for="name">Name</label>
            <input
              name="name"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label for="content">Story</label>
            <input
              name="content"
              value={content}
              type="text"
              onChange={(e) => setContent(e.target.value)}
            ></input>
            <label for="image">Image URL</label>
            <input
              name="image"
              value={image}
              type="text"
              onChange={(e) => setImage(e.target.value)}
            ></input>
            <button type="submit">Submit</button>
            <img src={image} alt=""></img>
          </form>
          <button onClick={showForm}>Hide form</button>
        </div>
      ) : (
        <button onClick={showForm}>Post a cool story bro</button>
      )}
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
