import { useEffect } from "react";

const useLazyLoadImages = containerRef => {
  useEffect(() => {
    if (!containerRef.current) return;

    const images = containerRef.current.querySelectorAll("img");

    let imageOptions = {};

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const image = entry.target;
        const newURL = image.getAttribute("data-src");

        // Apply blur effect
        image.classList.add("blur-md");

        const tempImage = new Image();
        tempImage.onload = () => {
          // Once the new image is loaded, remove the blur effect
          image.src = newURL;
          image.classList.remove("blur-md");
          observer.unobserve(image);
        };
        tempImage.src = newURL;
      });
    }, imageOptions);

    images.forEach(image => {
      observer.observe(image);
    });

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);
};

export default useLazyLoadImages;
