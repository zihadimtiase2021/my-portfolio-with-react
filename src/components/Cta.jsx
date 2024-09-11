import { FaWhatsapp } from "react-icons/fa6";

const Cta = () => {
  return (
    <>
      {/* cta wrapper  */}
      <div className="bg-themeColor  rounded-2xl mx-w-[40.625rem] mx-auto p-4 mt-12">
        {/* cta content  */}
        <p className="text-center text-lg mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
          officia, odit quisquam repellendus deleniti sed in, ducimus
        </p>
        {/* cta button wrappewr  */}
        <div className="flex justify-center items-center gap-4">
          <a
            className="bg-white text-black px-6 py-2 rounded-full transition duration-300 hover:text-white hover:bg-black"
            href="#"
          >
            Book A Meeting
          </a>
          <a
            className="bg-black text-white px-6  py-2 rounded-full flex items-center gap-1 transition duration-300 hover:text-black hover:bg-white"
            href="#"
          >
            <FaWhatsapp /> Whatsapp
          </a>
        </div>
      </div>
    </>
  );
};

export default Cta;
