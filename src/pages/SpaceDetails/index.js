import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSpaceDetails } from "../../store/space/actions";

import { useSelector } from "react-redux";
import { selectSpacesDetails } from "../../store/space/selectors";
import { selectSpacesStories } from "../../store/space/selectors";
import { useParams } from "react-router-dom";

export const SpaceDetails = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const spaceDetails = useSelector(selectSpacesDetails);

  useEffect(() => {
    dispatch(fetchSpaceDetails(id));
  }, [dispatch, id]);

  if (!spaceDetails)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );

  const { stories } = spaceDetails;

  const sortBy = [...stories].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  console.log(stories);

  console.log(spaceDetails);

  return (
    <div>
      <h1>This is the details page!</h1>
      <div>
        <p>{spaceDetails.title}</p>
        {sortBy.map((story) => {
          return (
            <div
              key={story.id}
              style={{
                backgroundColor: spaceDetails.backgroundColor,
                color: spaceDetails.color,
              }}
            >
              <img src={story.imageUrl} alt={story.name} />
              <h3>{story.name}</h3>
              <p>{story.content}</p>
              <p>{story.createdAt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
