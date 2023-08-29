import { useEffect, useState } from "react";

import { useGlobalContext } from "../context/appContext";
import { about } from "../utils/constants";

const About = () => {
  const [readMore, setReadMore] = useState(false);

  const { setparams } = useGlobalContext();

  useEffect(() => {
    setparams("about");
  }, [setparams]);

  return (
    <div className="filtering-content about ">
      {/* <!-- row --> */}
      <div className="flex flex-col md:flex-row gap-4 mb-16">
        {/* <!-- left --> */}
        {/* <!-- col --> */}
        <div className="flex  mx-4 md:w-1/3">
          <div className="w-60 h-60 sticky top-20">
            <img
              className="w-full"
              src={about[0].img}
              loading="lazy"
              alt="zihad"
            />
          </div>
        </div>
        {/* <!-- right --> */}
        {/* <!-- col --> */}
        <div className="space-y-4 md:w-4/6">
          {/* <!-- personal-information --> */}
          <h1 className="text-3xl mb-4">Hey!👋</h1>

          {readMore
            ? about[1].map((item, index) => <p key={index}>{item}</p>)
            : about[1]
                .slice(0, 3)
                .map((item, index) => <p key={index}> {item} </p>)}

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
          <p className="text-lg bg-whiteHover dark:bg-darkHover px-4 py-1 mb-8">
            WORK EXPERIENCE
          </p>
        </div>
        {/* <!-- middle-border --> */}
        <div className="relative before:content-[''] before:absolute before:bg-whiteHover dark:before:bg-darkHover before:w-[2px] before:bottom-0 before:-top-[35px] before:left-6 md:before:left-1/2">
          {/* <!-- work --> */}
          <div className="flex flex-col mb-20 md:mb-12 md:flex-row">
            <div className="pr-8 text-left ml-[55px] md:ml-0 md:text-right md:w-1/2">
              <h1 className="text-2xl">Web Development</h1>
              <p className="text-base text-myGray my-4">
                At Freelancer : 2022 - Running
              </p>
              <p className="text-base">
                I have been working as a <br />
                freelancer since 2022
              </p>
            </div>
            {/* <!-- icon --> */}
            <div className="md:w-1/2 flex items-center">
              <div className="h-10 w-10 rounded-full bg-myDark dark:bg-white text-white dark:text-myDark flex justify-center items-center -mt-[180px] ml-[5px] md:mt-0 md:-ml-[19px] z-10">
                <i className="fa-solid fa-briefcase"></i>
              </div>
            </div>
          </div>
          {/* <!-- work end --> */}
          {/* <!-- education-title --> */}
          <div className="flex mb-8 justify-start md:justify-center">
            <p className="text-lg bg-whiteHover dark:bg-darkHover px-4 py-1 mb-8 z-10">
              EDUCATION
            </p>
          </div>
          {/* <!-- education-title end--> */}
          {/* <!-- HSC --> */}
          <div className="flex flex-col mb-12 md:flex-row">
            {/* <!-- icon --> */}
            <div className="md:w-1/2 flex items-center justify-start md:justify-end">
              <div className="h-10 w-10 rounded-full bg-myDark dark:bg-white text-white dark:text-myDark flex justify-center items-center -mr-[21px] z-10 mt-8 ml-[5px] md:ml-0 md:mt-0">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
            </div>
            {/* <!-- text --> */}
            <div className="text-left -mt-[95px] ml-[55px] pl-0 mb-6 md:mb-0 md:pl-8 md:ml-0 md:mt-0 md:w-1/2">
              <h1 className="text-2xl">HSC</h1>
              <p className="text-base text-myGray my-4">
                Govt. Bangabandhu College, Dhaka - 2020 - 2022
              </p>
              <p className="text-base">
                After my school life i have done my HSC examination at this
                college.
              </p>
            </div>
          </div>
          {/* <!-- HSC end--> */}
          {/* <!-- SSC --> */}
          <div className="flex flex-col pb-12 md:flex-row">
            <div className="text-left pr-0 ml-[55px] md:ml-0 md:text-right md:pr-8 md:w-1/2">
              <h1 className="text-2xl">SSC</h1>
              <p className="text-base text-myGray my-4">
                Dhaka Cantonment Board <br />
                Adarsha Biddyaniketon, <br />
                Manikdi - 2009 - 2020
              </p>
              <p className="text-base">
                This school was my first <br />
                education institute. I have <br />
                passed my most of the valueable <br />
                time of my life in my school.
              </p>
            </div>
            {/* <!-- icon --> */}
            <div className="md:w-1/2 flex items-center">
              <div className="h-10 w-10 rounded-full bg-myDark dark:bg-white text-white dark:text-myDark flex justify-center items-center z-10 ml-[5px] -mt-[380px] md:mt-0 md:-ml-[19px]">
                <i className="fa-solid fa-briefcase"></i>
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
