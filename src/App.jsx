/* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { portfolioPopUp } from "./utils/constants";

// const App = () => {
//   const [category, setCategory] = useState("Web Artist");

//   // const iconsArray = portfolioPopUp[0].icons.icon;
//   // const iconNames = portfolioPopUp[0].icons.title;

//   // iconsArray.map((iconImage, index) => {
//   //   const iconName = iconNames[index];

//   //   console.log(`Icon Name: ${iconName}`);
//   //   console.log(`Icon Image: ${iconImage}`);
//   // });
//   const newItem = portfolioPopUp.filter(item => item.title === category);
//   // const iconsArray = newItem[0].icons.icon;
//   // const iconNames = newItem[0].icons.title;
//   console.log(newItem);
//   return (
//     <>
//       {/* {iconsArray.map((iconImage, index) => {
//         const iconName = iconNames[index];

//         console.log(`Icon Name: ${iconName}`);
//         console.log(`Icon Image: ${iconImage}`);
//       })} */}

//       {newItem.map((item, index) => {
//         const iconsArray = item.icons.icon;
//         const iconNames = item.icons.title;
//         return (
//           <div key={index}>
//             {iconsArray.map((img, ind) => {
//               const iconName = iconNames[ind];
//               return (
//                 <div key={ind}>
//                   <img src={img} alt="" />
//                   <p>{iconName}</p>
//                 </div>
//               );
//             })}

//             <h1> {item.title} </h1>
//             <img src={item.img} alt="" />
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Feed from "./pages/Feed";
import Layout from "./pages/Layout";
import Portfolio from "./pages/Portfolio";

const App = () => {
  // this useEffect for the lazy loading and This will apply to the entire website
  // useEffect(() => {
  //   const images = document.querySelectorAll("img");

  //   let imageOptions = {};

  //   let observer = new IntersectionObserver((entries, observer) => {
  //     entries.forEach(entry => {
  //       if (!entry.isIntersecting) return;

  //       const image = entry.target;
  //       const newURL = image.getAttribute("data-src");
  //       image.src = newURL;
  //       observer.unobserve(image);
  //     });
  //   }, imageOptions);

  //   images.forEach(image => {
  //     observer.observe(image);
  //   });
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Layout />

        <section className="my-container mb-[25px!important] md:mt-16 ">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </section>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
