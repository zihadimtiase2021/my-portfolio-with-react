import { useEffect } from "react";
import { useGlobalContext } from "../context/appContext";
import { reviews } from "../utils/constants";

const Feed = () => {
  const { setparams } = useGlobalContext();

  useEffect(() => {
    setparams("feed");
  }, [setparams]);

  return (
    <section className="my-container mb-[25px!important] md:mt-16 ">
      {/* <!-- all-post-container --> */}
      <div className="flex flex-col gap-8">
        {reviews.map((item, index) => {
          const { img, reviewImg, date, timeIcon, linkIcon, link, content } =
            item;

          return (
            <div
              key={index}
              className="shadow-xl bg-whiteHover dark:bg-darkHover py-4 rounded-xl md:py-6 md:pb-4"
            >
              {/* <!-- post-header --> */}
              <div className="flex gap-4 items-center mb-3 px-4 md:px-6">
                {/* <!-- dp-image --> */}
                <div>
                  <a href="#">
                    <img
                      className="h-[50px] w-[50px] rounded-full"
                      src={img}
                      loading="lazy"
                      alt="dp"
                    />
                  </a>
                </div>
                {/* <!-- name & time --> */}
                <div>
                  <a className="font-bold text-lg" href="#">
                    Zihad Imtiase
                  </a>
                  <p className="text-myGray flex items-center ">
                    {date}
                    {timeIcon}
                  </p>
                </div>
              </div>
              {/* <!-- post-header-end --> */}
              {/* <!-- post-content --> */}
              <div className="mb-[14px]">
                {/* <!-- post-image & caption --> */}
                <p className="text-base mb-4 px-4 md:px-6">{content}</p>
                <img
                  className="w-full h-auto"
                  src={reviewImg}
                  loading="lazy"
                  alt="review"
                />
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
    </section>
  );
};

export default Feed;
