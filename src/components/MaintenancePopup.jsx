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
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      {/* Overlay with blur */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Popup */}
      <div className="relative pop-up active bg-[#1e1e1e] rounded-xl shadow-xl shadow-[#0000008e] p-6 z-10 w-[90%] md:w-2/3 lg:w-1/2">
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
          <h2 className="text-3xl md:text-3xl font-bold text-red-600 mb-4">
            Site Under Maintenance
          </h2>
          <p className="text-myGray text-lg md:text-2xl leading-relaxed mb-6">
            Site is currently under maintenance and will be back online soon.
            <br />
            In the meantime, feel free to check out my latest projects on{" "}
            <br />
            Linktree: 
            <a
              href="https://linktr.ee/imtiase"
              target="_blank"
              rel="noreferrer"
              className="font-semibold hover:underline"
              style={{ color: "#e2a69c" }}
            >
              https://linktr.ee/imtiase
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePopup;
