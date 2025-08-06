import { useEffect, useRef, useState } from "react";
import useLazyLoadImages from "../customHooks/useLazyLoadImages";
import { fetchCmsData } from "../utils/fetchCmsData";

const collectionId = "6886ecb0620916f902732c1f"; // from webflow CMS collection

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [assets, setAssets] = useState([]);
  const containerRef = useRef();

  useLazyLoadImages(containerRef);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCmsData(collectionId);

      // Sort testimonials by order-no (smallest to largest)
      const sortedData = data.sort((a, b) => {
        // Get the order-no of each item
        const orderA = a.fieldData["order-no"] ?? Number.MAX_SAFE_INTEGER;
        const orderB = b.fieldData["order-no"] ?? Number.MAX_SAFE_INTEGER;

        // Compare numerically (ascending order)
        return orderA - orderB;
      });

      // Save sorted testimonials to state
      setTestimonials(sortedData);

      // Log to verify
      // console.log("Sorted Data:", sortedData);
    };

    loadData();
  }, []);

  return (
    <>
      {testimonials.map(item => {
        const {
          id,
          lastPublished: order,
          fieldData: {
            name,
            "testimonial-caption": caption,
            "testimonial-screenshot": screenshot = null,
            "testimonial-video": video = null,
          },
        } = item;

        const url = screenshot?.url || video?.url || "";
        const isVideo = !!video;

        // console.log(id, name, caption, url, order);

        return (
          <div
            ref={containerRef}
            key={id}
            className="shadow-xl bg-white dark:bg-darkHover py-4 rounded-xl md:py-6 md:pb-4"
          >
            {/* <!-- post-header --> */}
            <div className="flex gap-4 items-center mb-3 px-4 md:px-6">
              {/* <!-- dp-image --> */}
              <div>
                <a href="#">
                  <img
                    className="h-[50px] w-[50px] rounded-full"
                    src={url}
                    data-src={url}
                    alt="dp"
                  />
                </a>
              </div>
              {/* <!-- name & time --> */}
              <div>
                <a className="font-bold text-lg" href="#">
                  {name}
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
              <p
                className="mb-4 px-4 text-sm md:text-base md:px-6"
                style={{ whiteSpace: "pre-line" }}
              >
                {caption}
              </p>

              {isVideo ? (
                <div className="overflow-hidden">
                  <video width="768px" controls autoPlay muted>
                    <source src={url} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div className="overflow-hidden">
                  <img
                    className="w-full h-auto object-center object-cover "
                    src={url}
                    data-src={url}
                    alt={`${name}'s testimonial`}
                  />
                </div>
              )}
              {/* <!-- post-image end --> */}
            </div>
            {/* <!-- post-content end --> */}
            {/* <!-- link --> */}
            <a
              className="float-right text-lg text-themeColor px-4 md:px-6"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {/* {linkIcon} */}
            </a>
            {/* <!-- link --> */}
          </div>
        );
      })}
    </>
  );
};

export default Testimonial;
