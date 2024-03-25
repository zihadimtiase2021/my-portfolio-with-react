import { useEffect } from "react";
import {
  FaAt,
  FaFacebookF,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import { useParams } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { useGlobalContext } from "../context/appContext";

const Contact = () => {
  const { setparams } = useGlobalContext();
  const { contact } = useParams();

  useEffect(() => {
    setparams("contact");
  }, [setparams]);

  console.log(contact);

  // console.log(params);

  return (
    <>
      {/* <!-- contact-details --> */}
      <div className="flex flex-col justify-between mb-8 gap-4 md:flex-row">
        <div className="md:w-1/2">
          <h1 className="text-[40px] mb-4 uppercase">Bangladesh</h1>
          <div className="flex gap-4 items-center">
            <FaLocationDot className="text-gray-500" />
            <p>Manikdi,Cantonment,Dhaka-1206,Bangladesh</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-[40px] mb-4">CONTACT INFO</h1>
          {/* <!-- item --> */}
          <div className="flex items-center gap-4  mb-3">
            <FaPhone className="text-gray-500 text-lg" />
            <a href="tel:+8801728964769" className="text-themeColor">
              +880 1728-964769
            </a>
          </div>
          {/* <!-- item end --> */}

          {/* <!-- item --> */}
          <div className="flex items-center gap-4  mb-3">
            <FaWhatsapp className="text-gray-500 text-lg" />
            <a
              target="_blank"
              href="https://wa.me/01728964769"
              className="text-themeColor"
              rel="noreferrer"
            >
              +880 1728-964769
            </a>
          </div>
          {/* <!-- item end --> */}
          {/* <!-- item --> */}
          <div className="flex items-center gap-4  mb-3">
            <FaAt className="text-gray-500 text-lg" />
            <a href="mailto:zdimtiase@gmail.com" className="text-themeColor">
              zdimtiase@gmail.com
            </a>
          </div>
          {/* <!-- item end --> */}
          {/* <!-- item --> */}
          <div className="flex items-center gap-4  mb-3">
            <FaFacebookF className="text-gray-500 text-lg" />
            <a href="#" className="text-themeColor">
              fb.com/zihad.imtiase.munna.2021
            </a>
          </div>
          {/* <!-- item end --> */}
        </div>
      </div>
      {/* contact Form */}
      <ContactForm />
    </>
  );
};
export default Contact;
