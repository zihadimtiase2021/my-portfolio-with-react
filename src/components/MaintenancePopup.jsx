/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { useEffect, useState } from "react";

const MaintenancePopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // open immediately when site loads
  }, []);

  if (!show) return null;

  return (
    <div id="maintenance" className="pop-up active">
      <div className="overly">
        <div className="popup-parent-div pb-[1.5rem!important] shadow-xl shadow-[#0000008e]">
          {/* Header */}
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-2">
              <FaLink className="text-lg text-red-600" />
              <h1 className="text-xl font-semibold">Site Maintenance</h1>
            </div>
            <div
              id="close-btn"
              className="flex justify-end cursor-pointer"
              onClick={() => setShow(false)}
            >
              <div className="close-btn text-lg">
                <IoClose />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              Site Under Maintenance
            </h2>
            <p className="text-myGray text-base md:text-lg leading-relaxed mb-6">
              Site is currently under maintenance and will be back online soon.
              <br />
              In the meantime, feel free to check out my latest projects on{" "}
              <a
                href="https://linktr.ee/imtiase"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                Linktree
              </a>
              .
            </p>

            {/* Spinner */}
            {/* <div className="flex justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-red-500 border-solid"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePopup;
