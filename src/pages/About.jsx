import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/appContext";

export const About = () => {
  const { params, setparams } = useGlobalContext();
  const { about } = useParams();

  useEffect(() => {
    setparams(about);
  }, [about, setparams]);

  // console.log(params);

  return <div>About</div>;
};
