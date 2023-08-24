import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/appContext";

export const Contact = () => {
  const { params, setparams } = useGlobalContext();
  const { contact } = useParams();

  useEffect(() => {
    setparams(contact);
  }, [contact, setparams]);

  // console.log(params);

  return <div>Contact</div>;
};
