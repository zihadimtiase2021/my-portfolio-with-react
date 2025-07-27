import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context/appContext";
import useLazyLoadImages from "../customHooks/useLazyLoadImages";

// ✅ Import default export
import getTestimonials from "../api/webflowTestimonialApi";

const Feed = () => {
  const { setparams } = useGlobalContext();
  const containerRef = useRef();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useLazyLoadImages(containerRef);

  useEffect(() => {
    setparams("feed");
  }, [setparams]);

  useEffect(() => {
    async function fetchData() {
      try {
        const items = await getTestimonials();

        const mappedReviews = items.map(item => ({
          DP: item["dp-image"]?.url || "/default-dp.png",
          DpPlaceholder: item["dp-placeholder"]?.url || "/default-dp-blur.png",
          placeholder: item["testimonial-screenshot"]?.url || "",
          src:
            item["testimonial-video"] ||
            item["testimonial-screenshot"]?.url ||
            "",
          link: item["external-link"] || "#",
          linkIcon: "→",
          content: item["testimonial-caption"] || "",
          isVideo: !!item["testimonial-video"],
        }));

        setReviews(mappedReviews);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load testimonials:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading testimonials...</p>;

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
            <div className="flex gap-4 items-center mb-3 px-4 md:px-6">
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
              <div>
                <a className="font-bold text-lg" href="#">
                  Zihad Imtiase
                </a>
              </div>
            </div>

            <div className="mb-[14px]">
              <p
                className="mb-4 px-4 text-sm md:text-base md:px-6"
                style={{ whiteSpace: "pre-line" }}
              >
                {content}
              </p>

              {isVideo ? (
                <div className="overflow-hidden">
                  <video width="768px" controls autoPlay muted>
                    <source src={src} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div className="overflow-hidden">
                  <img
                    className="w-full h-auto object-center object-cover"
                    src={placeholder}
                    data-src={src}
                    alt="review"
                  />
                </div>
              )}
            </div>

            <a
              className="float-right text-lg text-themeColor px-4 md:px-6"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              {linkIcon}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
