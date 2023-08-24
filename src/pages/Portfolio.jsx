import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/appContext";

export const Portfolio = () => {
  const { params, setparams } = useGlobalContext();
  const { portfolio } = useParams();

  useEffect(() => {
    setparams(portfolio);
  }, [portfolio, setparams]);

  // console.log(params);

  return <div>Portfolio</div>;
};
