import { useEffect, useRef, useState } from "react";

import { useGlobalContext } from "../context/appContext";
import useLazyLoadImages from "../customHooks/useLazyLoadImages";
import { about, resume } from "../utils/constants";

const About = () => {
  // const showMoreRef = useRef(null);
  const [readMore, setReadMore] = useState(false);

  const { setparams } = useGlobalContext();

  const containerRef = useRef();

  useLazyLoadImages(containerRef);

  // useEffect(() => {
  //   const height = showMoreRef.current.clientHeight;
  //   showMoreRef.current.style.height = height;

  //   console.log(height);
  // }, [readMore]);

  useEffect(() => {
    setparams("about");
  }, [setparams]);

  return (
    <div ref={containerRef} className="filtering-content about ">
      {/* <!-- row --> */}
      <div className="flex flex-col md:flex-row gap-4 mb-16">
        {/* <!-- left --> */}
        {/* <!-- col --> */}
        <div className="flex justify-center mx-4 md:w-1/3">
          <div className="h-[360px] sticky top-20">
            <div className="relative w-60">
              <div className="overflow-hidden rotate-[5deg]">
                <img
                  className="w-full rounded-lg "
                  src={about[0].aboutImgPlaceHolder}
                  data-src={about[0].img}
                  loading="lazy"
                  alt="zihad"
                />
              </div>
              <div className="absolute h-full w-full bg-themeColor rounded-lg top-0 left-0 -z-[1] "></div>
            </div>
          </div>
        </div>
        {/* <!-- right --> */}
        {/* <!-- col --> */}
        <div
          // ref={showMoreRef}
          className="space-y-4 transition-[height] duration-700 overflow-hidden md:w-4/6"
        >
          {/* <!-- personal-information --> */}
          <h1 className="text-3xl mb-4">Hey!👋</h1>

          {readMore
            ? about[1].map((item, index) => (
                <p onClick={() => setReadMore(prev => !prev)} key={index}>
                  {item}
                </p>
              ))
            : about[1].slice(0, 4).map((item, index) => (
                <p onClick={() => setReadMore(prev => !prev)} key={index}>
                  {item}
                </p>
              ))}

          {!readMore ? (
            <p
              onClick={() => setReadMore(prev => !prev)}
              className="text-themeColor cursor-pointer m-[0px!important]"
            >
              Read More...
            </p>
          ) : (
            <p
              onClick={() => setReadMore(prev => !prev)}
              className="text-themeColor cursor-pointer m-[0px!important]"
            >
              Show Less...
            </p>
          )}

          {/* <!-- personal-information end --> */}
          {/* <!-- <div
          class="relative ml-4 before:content-[''] before:absolute before:bg-myDark before:dark:bg-white before:w-[2px] before:h-full before:rounded-sm before:top-0 before:-left-3"
        >
          
        </div> --> */}
        </div>
      </div>
      {/* <!-- row-end --> */}
      {/* <!-- row --> */}
      <div id="resume" className="w-full">
        {/* <!-- my-resume --> */}
        <h1 className="text-4xl text-center mb-16">My Resume</h1>
        <div className="flex justify-start md:justify-center">
          <p className="text-lg bg-themeSoftColor px-4 py-1 mb-8">
            WORK EXPERIENCE
          </p>
        </div>
        {/* <!-- middle-border --> */}
        <div className="relative before:content-[''] before:absolute before:bg-themeSoftColor before:w-[2px] before:bottom-0 before:-top-[32px] before:left-6 md:before:left-1/2">
          {/* <!-- work --> */}
          <div className="flex flex-col mb-20 md:mb-12 md:flex-row">
            <div className="pr-8 text-left ml-[55px] md:ml-0 md:text-right md:w-1/2">
              <h1 className="text-2xl"> {resume.exprience.title} </h1>
              <p className="text-base  my-4">{resume.exprience.status}</p>
              <p
                className="text-myGray"
                dangerouslySetInnerHTML={{ __html: resume.exprience.content }}
              ></p>
            </div>
            {/* <!-- icon --> */}
            <div className="md:w-1/2 flex items-center">
              <div className="h-10 w-10 rounded-full bg-themeColor text-white  flex justify-center items-center -mt-[180px] ml-[5px] md:mt-0 md:-ml-[19px] z-10">
                {resume.exprience.icon}
              </div>
            </div>
          </div>
          {/* <!-- work end --> */}
          {/* <!-- education-title --> */}
          <div className="flex mb-8 justify-start md:justify-center">
            <p className="text-lg bg-themeSoftColor backdrop-blur-md px-4 py-1 mb-8 z-10">
              EDUCATION
            </p>
          </div>
          {/* <!-- education-title end--> */}
          {/* <!-- HSC --> */}
          <div className="flex flex-col mb-12 md:flex-row">
            {/* <!-- icon --> */}
            <div className="md:w-1/2 flex items-center justify-start md:justify-end">
              <div className="h-10 w-10 rounded-full bg-themeColor text-white  flex justify-center items-center -mr-[21px] z-10 mt-8 ml-[5px] md:ml-0 md:mt-0">
                {resume.education.hsc.icon}
              </div>
            </div>
            {/* <!-- text --> */}
            <div className="text-left -mt-[95px] ml-[55px] pl-0 mb-6 md:mb-0 md:pl-8 md:ml-0 md:mt-0 md:w-1/2">
              <h1 className="text-2xl"> {resume.education.hsc.title} </h1>
              <p className="text-base  my-4">{resume.education.hsc.status}</p>
              <p className="text-base text-myGray">
                {resume.education.hsc.content}
              </p>
            </div>
          </div>
          {/* <!-- HSC end--> */}
          {/* <!-- SSC --> */}
          <div className="flex flex-col pb-12 md:flex-row">
            <div className="text-left pr-0 ml-[55px] md:ml-0 md:text-right md:pr-8 md:w-1/2">
              <h1 className="text-2xl">{resume.education.ssc.title}</h1>
              <p
                className="text-base  my-4"
                dangerouslySetInnerHTML={{
                  __html: resume.education.ssc.status,
                }}
              ></p>
              <p
                className="text-base text-myGray"
                dangerouslySetInnerHTML={{
                  __html: resume.education.ssc.content,
                }}
              ></p>
            </div>
            {/* <!-- icon --> */}
            <div className="md:w-1/2 flex items-center">
              <div className="h-10 w-10 rounded-full bg-themeColor text-white  flex justify-center items-center z-10 ml-[5px] -mt-[380px] md:mt-0 md:-ml-[19px]">
                {resume.education.ssc.icon}
              </div>
            </div>
          </div>
          {/* <!-- SSC end --> */}
        </div>
      </div>
      {/* <!-- row end --> */}
    </div>
  );
};
export default About;
