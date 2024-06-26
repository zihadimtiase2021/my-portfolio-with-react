import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/appContext";
import useLazyLoadImages from "../customHooks/useLazyLoadImages";
import { reviews } from "../utils/constants";

const Feed = () => {
  const { setparams } = useGlobalContext();

  const containerRef = useRef();

  useLazyLoadImages(containerRef);

  useEffect(() => {
    setparams("feed");
  }, [setparams]);

  // useEffect(() => {
  //   const blurDivs = document.querySelectorAll(".blur-load");
  //   console.log(blurDivs);
  //   blurDivs.forEach(div => {
  //     console.log(div);
  //     const imgEl = div.querySelector("img");

  //     function loaded() {
  //       div.classList.add("loaded");
  //     }

  //     if (imgEl.complete) {
  //       loaded();
  //     } else {
  //       imgEl.addEventListener("load", loaded);
  //     }
  //   });
  // });

  return (
    <div ref={containerRef} className="flex flex-col gap-8">
      {reviews.map((item, index) => {
        const {
          DP,
          DpPlaceholder,
          placeholder,
          src,
          linkIcon,
          link,
          content,
          isVideo,
        } = item;

        return (
          <div
            key={index}
            className="shadow-xl bg-white dark:bg-darkHover py-4 rounded-xl md:py-6 md:pb-4"
          >
            {/* <!-- post-header --> */}
            <div className="flex gap-4 items-center mb-3 px-4 md:px-6">
              {/* <!-- dp-image --> */}
              <div>
                <a href="#">
                  <img
                    className="h-[50px] w-[50px] rounded-full"
                    src={DpPlaceholder}
                    data-src={DP}
                    alt="dp"
                  />
                </a>
              </div>
              {/* <!-- name & time --> */}
              <div>
                <a className="font-bold text-lg" href="#">
                  Zihad Imtiase
                </a>
                {/* <p className="text-myGray flex items-center ">
                  {date}
                  {timeIcon}
                </p> */}
              </div>
            </div>
            {/* <!-- post-header-end --> */}
            {/* <!-- post-content --> */}
            <div className="mb-[14px]">
              {/* <!-- post-image & caption --> */}
              <p className="mb-4 px-4 text-sm md:text-base md:px-6">
                {content}
              </p>
              {/* <div
                className={`blur-load bg-[url(/src/assets/img/review/small.png)] `}
              > */}

              {isVideo ? (
                // video
                <div className="overflow-hidden">
                  <video width="768px" controls autoPlay>
                    <source src={src} type="video/mp4" />
                  </video>
                </div>
              ) : (
                // image
                <div className="overflow-hidden">
                  <img
                    className="w-full h-auto object-center object-cover "
                    src={placeholder}
                    data-src={src}
                    alt="review"
                  />
                </div>
              )}

              {/* <div className="overflow-hidden">
                <img
                  className="w-full h-auto object-center object-cover "
                  src={placeholder}
                  data-src={src}
                  alt="review"
                />
              </div> */}
              {/* </div> */}
              {/* <!-- post-image end --> */}
            </div>
            {/* <!-- post-content end --> */}
            {/* <!-- link --> */}
            <a
              className="float-right text-lg text-themeColor px-4 md:px-6"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              {linkIcon}
            </a>
            {/* <!-- link --> */}
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
