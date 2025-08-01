import { useEffect, useState } from "react";
import { fetchCmsData } from "../utils/fetchCmsData";

const collectionId = "6886ecb0620916f902732c1f"; //from webflow cms collection

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCmsData(collectionId);
      setTestimonials(data);
    };

    loadData();
  }, []);
  return (
    <>
      {testimonials.map(item => {
        const {
          id,
          fieldData: {
            name,
            "testimonial-caption": caption,
            "testimonial-screenshot": screenshot = null,
            "testimonial-video": video = null,
          },
        } = item;

        // Check which URL is available
        const url = screenshot?.url || video?.url || "";

        // Check if it's a video testimonial
        const isVideo = !!video;

        console.log(id, name, caption, url);

        return <div>{name}</div>;

        // return(  return (
        //     <div
        //       key={id}
        //       className="shadow-xl bg-white dark:bg-darkHover py-4 rounded-xl md:py-6 md:pb-4"
        //     >
        //       {/* <!-- post-header --> */}
        //       <div className="flex gap-4 items-center mb-3 px-4 md:px-6">
        //         {/* <!-- dp-image --> */}
        //         <div>
        //           <a href="#">
        //             <img
        //               className="h-[50px] w-[50px] rounded-full"
        //               src={DpPlaceholder}
        //               data-src={DP}
        //               alt="dp"
        //             />
        //           </a>
        //         </div>
        //         {/* <!-- name & time --> */}
        //         <div>
        //           <a className="font-bold text-lg" href="#">
        //             Zihad Imtiase
        //           </a>
        //           {/* <p className="text-myGray flex items-center ">
        //           {date}
        //           {timeIcon}
        //         </p> */}
        //         </div>
        //       </div>
        //       {/* <!-- post-header-end --> */}
        //       {/* <!-- post-content --> */}
        //       <div className="mb-[14px]">
        //         {/* <!-- post-image & caption --> */}
        //         <p
        //           className="mb-4 px-4 text-sm md:text-base md:px-6"
        //           style={{ whiteSpace: "pre-line" }}
        //         >
        //           {content}
        //         </p>
        //         {/* <div
        //         className={`blur-load bg-[url(/src/assets/img/review/small.png)] `}
        //       > */}

        //         {isVideo ? (
        //           // video
        //           <div className="overflow-hidden">
        //             <video width="768px" controls autoPlay muted>
        //               <source src={src} type="video/mp4" />
        //             </video>
        //           </div>
        //         ) : (
        //           // image
        //           <div className="overflow-hidden">
        //             <img
        //               className="w-full h-auto object-center object-cover "
        //               src={placeholder}
        //               data-src={src}
        //               alt="review"
        //             />
        //           </div>
        //         )}

        //         {/* <!-- post-image end --> */}
        //       </div>
        //       {/* <!-- post-content end --> */}
        //       {/* <!-- link --> */}
        //       <a
        //         className="float-right text-lg text-themeColor px-4 md:px-6"
        //         href={link}
        //         target="_blank"
        //         rel="noreferrer"
        //       >
        //         {linkIcon}
        //       </a>
        //       {/* <!-- link --> */}
        //     </div>
        //   );)
      })}
    </>
    // <>
    //   {reviews.map((item, index) => {
    //       const {
    //         DP,
    //         DpPlaceholder,
    //         placeholder,
    //         src,
    //         linkIcon,
    //         link,
    //         content,
    //         isVideo,
    //       } = item;

    //       return (
    //         <div
    //           key={index}
    //           className="shadow-xl bg-white dark:bg-darkHover py-4 rounded-xl md:py-6 md:pb-4"
    //         >
    //           {/* <!-- post-header --> */}
    //           <div className="flex gap-4 items-center mb-3 px-4 md:px-6">
    //             {/* <!-- dp-image --> */}
    //             <div>
    //               <a href="#">
    //                 <img
    //                   className="h-[50px] w-[50px] rounded-full"
    //                   src={DpPlaceholder}
    //                   data-src={DP}
    //                   alt="dp"
    //                 />
    //               </a>
    //             </div>
    //             {/* <!-- name & time --> */}
    //             <div>
    //               <a className="font-bold text-lg" href="#">
    //                 Zihad Imtiase
    //               </a>
    //               {/* <p className="text-myGray flex items-center ">
    //               {date}
    //               {timeIcon}
    //             </p> */}
    //             </div>
    //           </div>
    //           {/* <!-- post-header-end --> */}
    //           {/* <!-- post-content --> */}
    //           <div className="mb-[14px]">
    //             {/* <!-- post-image & caption --> */}
    //             <p
    //               className="mb-4 px-4 text-sm md:text-base md:px-6"
    //               style={{ whiteSpace: "pre-line" }}
    //             >
    //               {content}
    //             </p>
    //             {/* <div
    //             className={`blur-load bg-[url(/src/assets/img/review/small.png)] `}
    //           > */}

    //             {isVideo ? (
    //               // video
    //               <div className="overflow-hidden">
    //                 <video width="768px" controls autoPlay muted>
    //                   <source src={src} type="video/mp4" />
    //                 </video>
    //               </div>
    //             ) : (
    //               // image
    //               <div className="overflow-hidden">
    //                 <img
    //                   className="w-full h-auto object-center object-cover "
    //                   src={placeholder}
    //                   data-src={src}
    //                   alt="review"
    //                 />
    //               </div>
    //             )}

    //             {/* <!-- post-image end --> */}
    //           </div>
    //           {/* <!-- post-content end --> */}
    //           {/* <!-- link --> */}
    //           <a
    //             className="float-right text-lg text-themeColor px-4 md:px-6"
    //             href={link}
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             {linkIcon}
    //           </a>
    //           {/* <!-- link --> */}
    //         </div>
    //       );
    //     })}
    // </>
  );
};

export default Testimonial;
