/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

export const Navbar = () => {
  const SunRef = useRef();
  const [isDarkMode, setIsDarkMode] = useState(false);

  //dark-mode function
  const iconToggle = () => {
    setIsDarkMode(prev => !prev);
  };
  //thems vars
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //theme chack

  useEffect(() => {
    const themeCheck = () => {
      if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
        return;
      }
    };
    themeCheck();
  }, [systemTheme, userTheme]);
  //manual theme switch

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      iconToggle();
      return;
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      iconToggle();
    }
  };

  return (
    <header className="bg-[#ffffff00] sticky top-0 left-0 bg-white dark:bg-myDark md:bg-[#ffffff85] md:dark:bg-[#16191da6] md:backdrop-blur-[8px] z-50">
      {/* <!-- navbar --> */}
      <nav className="max-w-[1300px] mx-auto flex justify-between items-center px-4 py-2">
        {/* <!-- logo --> */}
        <Link to={"/"} className="font-bold text-[25px] flex space-x-4">
          <img src={logo} className="w-[65px] md:w-20" alt="logo" />
        </Link>
        {/* <!-- dark-mode-toggler --> */}
        <div
          onClick={themeSwitch}
          className="toggle-box w-[35px] h-[35px] bg-transparent flex justify-center items-center z-0 overflow-hidden cursor-pointer"
        >
          <div
            ref={SunRef}
            className={`sun ${
              isDarkMode ? "night" : null
            }  w-[15px] h-[15px] dark:w-[25px] dark:h-[25px] bg-black dark:bg-white rounded-full cursor-pointer relative border-white dark:border-white border-[3px] after:absolute after:content-[''] after:w-[25px] after:h-[25px] after:bg-myDark after:rounded-full after:-top-[100px] after:-right-[100px]`}
          >
            <div className="line1 w-[30px] -translate-x-[50%] -translate-y-[50%]"></div>
            <div className="line2 w-[30px] -translate-x-[50%] -translate-y-[50%] rotate-90"></div>
            <div className="line3 w-[27px] -translate-x-[50%] -translate-y-[50%] rotate-45"></div>
            <div className="line4 w-[27px] -translate-x-[50%] -translate-y-[50%] -rotate-45"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};
