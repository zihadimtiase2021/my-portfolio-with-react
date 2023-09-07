// // eslint-disable-next-line no-unused-vars
// import React, { useEffect } from "react";

// // eslint-disable-next-line react/prop-types
// const ImageLazyLoad = ({ children }) => {
//   useEffect(() => {
//     const images = document.querySelectorAll("img");

//     let imageOptions = {};

//     let observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (!entry.isIntersecting) return;

//         const image = entry.target;
//         const newURL = image.getAttribute("data-src");
//         image.src = newURL;
//         observer.unobserve(image);
//       });
//     }, imageOptions);

//     images.forEach(image => {
//       observer.observe(image);
//     });
//   }, []);
//   return <>{children}</>;
// };

// export default ImageLazyLoad;
