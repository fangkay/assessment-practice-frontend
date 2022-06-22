import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSpaces } from "../../store/space/actions";

import { useSelector } from "react-redux";
import { selectSpaces } from "../../store/space/selectors";

export const Homepage = () => {
  const dispatch = useDispatch();

  const spaces = useSelector(selectSpaces);

  useEffect(() => {
    dispatch(fetchSpaces);
  }, [dispatch]);

  if (!spaces) return <h3>Loading</h3>;

  console.log(spaces);
  return (
    <div>
      <h1>This is the homepage</h1>
      {!spaces
        ? "Loading"
        : spaces.map((space) => {
            return (
              <div
                key={space.id}
                style={{
                  backgroundColor: space.backgroundColor,
                  color: space.color,
                }}
              >
                <p>{space.title}</p>
                <p>{space.description}</p>
                <button>Visit space</button>
              </div>
            );
          })}
    </div>
  );
};
