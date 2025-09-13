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
    <div className="fixed inset-0 flex items-center justify-center z-[9999] px-2 sm:px-4">
      {/* Overlay with darker blur */}
      <div className="absolute inset-0 bg-black bg-opacity-90 dark:bg-black dark:bg-opacity-90 backdrop-blur-sm"></div>

      {/* Popup */}
      <div className="relative pop-up active bg-white dark:bg-[#1e1e1e] rounded-xl shadow-xl dark:shadow-lg shadow-[#0000008e] p-4 sm:p-6 z-10 w-full max-w-md md:max-w-lg lg:max-w-5xl">
        {/* Header */}
        <div className="flex justify-between mb-4">
          <div className="flex items-center gap-2">
            <FaLink className="text-lg text-red-600" />
            <h1 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
              Site Maintenance
            </h1>
          </div>
          <div
            id="close-btn"
            className="flex justify-end cursor-pointer"
            onClick={() => setShow(false)}
          >
            <div className="close-btn text-lg text-gray-900 dark:text-gray-100">
              <IoClose />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center text-center px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4 break-words">
            Site Under Maintenance
          </h2>
          <p className="text-gray-700 dark:text-myGray text-sm sm:text-lg md:text-2xl leading-relaxed mb-6 break-words">
            Site is currently under maintenance and will be back online soon.
            In the meantime, feel free to check out my latest projects on.
            <div className="mt-6 break-all">
              Linktree:{" "}
              <a
                href="https://linktr.ee/imtiase"
                rel="noreferrer"
                className="font-semibold hover:underline break-all"
                style={{ color: "#e2a69c" }}
              >
                https://linktr.ee/imtiase
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePopup;
