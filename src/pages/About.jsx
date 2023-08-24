import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/appContext";

const About = () => {
  const { setparams } = useGlobalContext();
  const { about } = useParams();

  useEffect(() => {
    setparams(about);
  }, [about, setparams]);

  console.log(about);

  return <div>About</div>;
};
export default About;
