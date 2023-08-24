import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/appContext";

const Contact = () => {
  const { setparams } = useGlobalContext();
  const { contact } = useParams();

  useEffect(() => {
    setparams(contact);
  }, [contact, setparams]);

  console.log(contact);

  // console.log(params);

  return <div>Contact</div>;
};
export default Contact;
