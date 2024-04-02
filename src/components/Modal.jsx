/* eslint-disable react/prop-types */

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef } from "react";
import { FaAngleLeft, FaAngleRight, FaLink } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { dp } from "../assets";
import useLazyLoadImages from "../customHooks/useLazyLoadImages";
import { portfolioPopUp } from "../utils/constants";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Modal = ({ modal, setModal }) => {
  const containerRef = useRef();
  useLazyLoadImages(containerRef);

  //adding scrollbar class to the carosel image parent div
  // useEffect(() => {
  //   const images = containerRef.current.querySelectorAll("img");
  //   images.forEach(element => {
  //     const parentEl = element.parentElement;
  //     parentEl.classList.add("hide-scrollbar");
  //   });
  // }, []);

  return portfolioPopUp.map(item => {
    if (modal == item.title) {
      return (
        <div key={item.title} id="portfolio2" className="pop-up active">
          {/* <!--add active cls---> */}
          <div className="overly">
            <div className="popup-parent-div pb-[1.5rem!important] shadow-xl shadow-[#0000008e]">
              {/* <!-- close-btn --> */}
              <div className="flex justify-between mb-4">
                <div>
                  <a
                    href="#"
                    className="text-2xl font-semibold flex items-center gap-2 hover:underline"
                  >
                    <FaLink className="text-lg" />
                    {item.title}
                  </a>
                </div>
                <div
                  id="close-btn"
                  className="flex justify-end"
                  // onClick="togglePopup('portfolio2')"
                >
                  <div
                    className="close-btn text-lg"
                    onClick={() => setModal(null)}
                  >
                    <IoClose />
                  </div>
                </div>
              </div>

              {/* <!-- close-btn --> */}
              {/* <!-- row --> */}
              <div className="flex flex-col gap-8 md:gap-0 md:flex-row h-full">
                {/* <!-- left col --> */}
                <div
                  ref={containerRef}
                  className="md:w-2/3 md:pr-1 md:border-r border-gray-400 dark:border-gray-700 "
                >
                  {/* <Carousel pauseOnHover>
                    {item.img.map((imgItem, index) => (
                      <img
                        key={index}
                        className="w-full transform translate-y-0 top-0 pr-[1px]"
                        src={item.placeholder}
                        data-src={imgItem}
                        width="461.66"
                        height="2000"
                        alt="Portfolio-popup"
                      />
                    ))}
                  </Carousel> */}

                  {item.img.length > 1 ? (
                    <Swiper
                      // install Swiper modules
                      modules={[Navigation, Pagination]}
                      slidesPerView={1}
                      navigation={{
                        prevEl: ".prev",
                        nextEl: ".next",
                      }}
                      pagination={{ clickable: true }}
                    >
                      {item.img.map((imgItem, index) => (
                        <SwiperSlide key={index} className=" scrollbar">
                          <img
                            // className="w-full transform translate-y-0 top-0 pr-[1px]"
                            className="rounded-[10px]"
                            src={item.placeholder}
                            data-src={imgItem}
                            width="461.66"
                            height="2000"
                            alt="Portfolio-popup"
                          />
                        </SwiperSlide>
                      ))}
                      <div
                        className="w-10 h-10
                         bg-[#e2a69c82] rounded-full flex justify-center items-center absolute top-1/2 z-10 cursor-pointer left-3 prev"
                      >
                        <FaAngleLeft />
                      </div>
                      <div
                        className="w-10 h-10
                         bg-[#e2a69c82] rounded-full flex justify-center items-center absolute top-1/2 z-10 cursor-pointer right-5 next"
                      >
                        <FaAngleRight />
                      </div>
                    </Swiper>
                  ) : (
                    <div className="scrollbar">
                      <img
                        className="w-full"
                        src={item.placeholder}
                        data-src={item.img}
                        width="461.66"
                        height="2000"
                        alt="Portfolio-popup"
                      />
                    </div>
                  )}
                </div>
                {/* <!-- right col --> */}
                <div className="md:w-1/3 md:pl-4">
                  {/* <!-- header --> */}
                  <div className="flex items-start gap-2 mb-4">
                    <img className="h-12 w-12 rounded-sm" src={dp} alt="dp" />
                    <h1 className="text-base">Zihad Imtiase</h1>
                  </div>
                  {/* <!-- content --> */}
                  <h1 className="mb-2">About the project</h1>
                  <p className="text-myGray text-sm mb-4">{item.description}</p>
                  <h1 className="mb-4">Used:</h1>
                  {/* <!-- svg-icon-container --> */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    {/* map which things i have used for their icon and name */}
                    {item.icon.map(e => {
                      return (
                        <div
                          key={e.name}
                          className="flex flex-col justify-between items-center"
                        >
                          <img
                            className="max-w-[48px]"
                            src={e.icon}
                            alt="icon"
                          />
                          <p className="text-sm uppercase">{e.name}</p>
                        </div>
                      );
                    })}
                  </div>
                  {/* <!-- visit-btn --> */}

                  <a href="#" className="visite-site-btn">
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
};

export default Modal;
