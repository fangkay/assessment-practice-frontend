import { useSelector } from "react-redux";
import { selectUserSpace } from "../../store/user/selectors";

export const MySpace = () => {
  const space = useSelector(selectUserSpace);

  if (!space)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );

  const { stories } = space;

  console.log(stories);

  return (
    <div>
      <h1>This is my space</h1>
      {stories.map((story) => {
        return (
          <div key={story.id}>
            <img src={story.imageUrl} alt={story.name}></img>
            <h2>{story.name}</h2>
            <p>{story.content}</p>
          </div>
        );
      })}
    </div>
  );
};
