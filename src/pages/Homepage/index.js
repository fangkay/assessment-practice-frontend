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

  console.log(spaces);
  return <h1>This is the homepage</h1>;
};
