import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserStory } from "../../store/user/actions";
import { selectUserSpace } from "../../store/user/selectors";
import { submitStory } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { editSpace } from "../../store/user/actions";

export const MySpace = () => {
  const space = useSelector(selectUserSpace);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const [displayForm, setDisplayForm] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const [editForm, setEditForm] = useState(false);
  const [updatedBackgroundColor, setUpdatedBackgroundColor] = useState("");
  const [updatedColor, setUpdatedColor] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [description, setDescription] = useState("");

  const displayEditForm = () => {
    setEditForm(!editForm);
  };

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

  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(
      editSpace(
        updatedBackgroundColor,
        updatedColor,
        updatedTitle,
        description,
        token,
        space.id
      )
    );
    setUpdatedBackgroundColor("");
    setUpdatedColor("");
    setUpdatedTitle("");
    setDescription("");
  };
  return (
    <div>
      <div
        style={{ backgroundColor: updatedBackgroundColor, color: updatedColor }}
      >
        <h1>{space.title}</h1>
        <p>{space.description}</p>
      </div>
      {editForm ? (
        <div>
          <form onSubmit={handleEdit}>
            <label for="backgroundColor">Background Color</label>
            <input
              name="backgroundColor"
              value={updatedBackgroundColor}
              type="color"
              onChange={(e) => setUpdatedBackgroundColor(e.target.value)}
            ></input>
            <label for="color">Color</label>
            <input
              name="color"
              value={space.color}
              type="color"
              onChange={(e) => setUpdatedColor(e.target.value)}
            ></input>
            <label for="title">Title</label>
            <input
              name="title"
              value={space.title}
              type="text"
              onChange={(e) => setUpdatedTitle(e.target.value)}
            ></input>
            <label for="description">Description</label>
            <input
              name="description"
              value={space.description}
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            ></input>
            <button type="submit">Submit</button>
            <img src={image} alt=""></img>
          </form>
          <button onClick={displayEditForm}>Hide</button>
        </div>
      ) : (
        <div>
          <button onClick={displayEditForm}>Edit my space</button>
        </div>
      )}
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
