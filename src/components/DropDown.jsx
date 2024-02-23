/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { js, react, webflow } from "../assets";

const DropDown = ({ filterItems }) => {
  const [isOpen, setIsopen] = useState(false);
  const [dropDownvalue, setDropDownValue] = useState("all");
  const dropDownTextRef = useRef();

  const handleClick = () => {
    setIsopen(!isOpen);
  };

  const handleDropDownOption = e => {
    //target the selectbox option value and print on the dropdown selected text
    const value = e.target.innerHTML;
    dropDownTextRef.current.innerHTML = value;

    //get the option data type and set to the state
    setDropDownValue(e.target.dataset.type);
    // console.log(e.target.dataset.type);
    // filterItems(e.target.dataset.type);
  };

  useEffect(() => {
    filterItems(dropDownvalue);
  }, [dropDownvalue]);

  return (
    <>
      <div
        onClick={handleClick}
        className="dropdown relative h-[34px] w-44 mb-[46px] text-sm capitalize z-10"
      >
        <div
          ref={dropDownTextRef}
          className="textBox absolute top-0 left-0 w-full h-full cursor-pointer  bg-white dark:bg-darkHover border border-gray-400 dark:border-[#ffffff33] rounded-[5px] outline-none px-2 py-[6px] text-sm capitalize  flex items-center gap-3"
        >
          <span className="text-lg">✨</span> all projects
        </div>
        <div
          className={`option absolute w-full top-10  bg-white dark:bg-darkHover border border-gray-400 dark:border-[#ffffff33] rounded-[5px] py-2 px-[6px] transition-opacity duration-200  ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            onClick={handleDropDownOption}
            data-type="all"
            className="px-[6px] py-2 hover:bg-[#e8a6983b] rounded-[5px] cursor-pointer"
          >
            <span className="text-lg pointer-events-none">✨</span> all projects
          </div>
          <div
            onClick={handleDropDownOption}
            data-type="webflow"
            className="px-[6px] py-2 hover:bg-[#e8a6983b] rounded-[5px] cursor-pointer flex items-center gap-3"
          >
            <img
              className="w-6 h-6 pointer-events-none"
              src={webflow}
              alt="webflow logo"
            />
            Webflow
          </div>
          <div
            onClick={handleDropDownOption}
            data-type="react js"
            className="px-[6px] py-2 hover:bg-[#e8a6983b] rounded-[5px] cursor-pointer flex items-center gap-3"
          >
            <img
              className="w-6 h-6 pointer-events-none"
              src={react}
              alt="webflow logo"
            />
            React JS
          </div>
          <div
            onClick={handleDropDownOption}
            data-type="vanila js"
            className="px-[6px] py-2 hover:bg-[#e8a6983b] rounded-[5px] cursor-pointer flex items-center gap-3"
          >
            <img
              className="w-6 h-6 pointer-events-none"
              src={js}
              alt="webflow logo"
            />
            Vanila JS
          </div>
        </div>
        <div className="absolute inset-y-0 right-[10px] flex items-center pointer-events-none">
          <FaAngleDown />
        </div>
      </div>
    </>
  );
};

export default DropDown;
