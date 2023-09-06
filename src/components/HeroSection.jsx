/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { coverPhoto, dp } from "../assets";
import { useGlobalContext } from "../context/appContext";
import {
  filteringNav,
  message,
  slogan,
  status,
  title,
} from "../utils/constants";

import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroSection = () => {
  //get params value
  const { params } = useGlobalContext();

  //target the filter nav
  const listRef = useRef();

  //handle active class function for the filtering nav
  const handleActive = e => {
    //target the filter navs childElements
    const allActiveEl = listRef.current.querySelectorAll("a");

    //loop over the all nav links to check who contains the active class and remove the active class
    allActiveEl.forEach(element => {
      if (element.classList.contains("active")) {
        element.classList.remove("active");
      }
    });

    // chceck where the user clicked if user clicked the child element and the add active class to its parent div
    if (e.target.classList.contains("child")) {
      e.target.parentElement.parentElement.classList.add("active");
    } else {
      e.target.classList.add("active");
    }
  };
  return (
    <>
      {/* top-section */}
      <section className="container p-[0px] relative">
        {/* <!-- cover-photo --> */}
        <div className="w-full h-[150px] flex items-center justify-center overflow-hidden md:h-[240px]">
          <img src={coverPhoto} alt="coverPhoto" />
        </div>
        {/* <!-- cover-photo --> */}

        <div className="my-container absolute top-[55%] left-0 right-0 ">
          {/* <!-- first --> */}
          <div className="flex justify-between items-end mb-4">
            <div className="w-[120px] h-[120px] rounded-full border-[5px] overflow-hidden border-white dark:border-myDark md:w-[200px] md:h-[200px]">
              {/* <!-- profile-photo --> */}
              <LazyLoadImage
                effect="blur"
                className="w-full h-auto"
                src={dp}
                alt="hero"
              />
            </div>
            <a
              href={message.link}
              target="_blank"
              className="bg-themeColor text-white py-[6px] px-4 rounded-3xl mb-1 cursor-pointer transition hover:bg-secondThemeColor flex items-center gap-1"
              rel="noreferrer"
            >
              {message.icon} {message.text}
            </a>
          </div>
          {/* <!-- second --> */}
          <h1 className="font-bold text-2xl mb-2 md:text-[34px]">
            Zihad Imtiase Munna
          </h1>
          {/* title */}
          <p className="mb-2 text-sm md:text-base">{title}</p>
          {/* slogan */}
          <p className="text-[14px] mb-4 text-myGray">{slogan}</p>
          <div className="flex flex-col gap-1 text-myGray md:flex-row md:gap-5">
            {/* get-the-stauts */}
            {status.map(item => (
              <div
                key={item.text}
                className={`flex items-center gap-1 ${
                  item.link ? item.style : null
                } `}
              >
                {item?.icon}
                {item.link ? (
                  <a
                    target="_blank"
                    href={item.link}
                    className="hover:underline"
                    rel="noreferrer"
                  >
                    {item.text}
                  </a>
                ) : (
                  <p>{item.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* <!-- profile-photo --> */}
      </section>
      {/* top-section-end */}
      {/* filtering-navbar */}
      <section className="filter-section my-container mb-[40px!important] mt-[26rem!important] md:mt-[19rem!important]">
        {/* <!-- filtering navbar --> */}
        <ul
          ref={listRef}
          className="flex justify-between cursor-pointer text-myGray mb-8"
        >
          {/* get-the-filteringNav-items */}
          {filteringNav.map(item => (
            <Link
              key={item.item}
              to={item.link}
              onClick={e => handleActive(e)}
              className={`hover:bg-[#F1F3F5] dark:hover:bg-[#212529] w-full py-[11px] flex justify-center ${
                item.item == params ? "active" : null
              }`}
            >
              <p className="font-bold">
                <span className="child py-2 px-2 border-b-4 border-transparent capitalize md:px-4">
                  {item.item}
                </span>
              </p>
            </Link>
          ))}
        </ul>
      </section>
      {/* filtering-navbar-end */}
    </>
  );
};

export default HeroSection;
