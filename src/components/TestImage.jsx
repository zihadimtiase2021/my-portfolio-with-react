// import { useEffect, useState } from "react";
// import placeholder from "../assets/placeholder.gif";
// import assetsMap from "../assetsMap.json"; // Adjust path if needed

// const AssetImage = ({
//   folder = "Public",
//   displayName = "imtiase.svg",
//   alt = "",
//   className = "",
// }) => {
//   const [imageUrl, setImageUrl] = useState("");

//   useEffect(() => {
//     const url = assetsMap[folder]?.[displayName];
//     if (!url) {
//       console.warn(`❌ Image not found: [${folder}] → ${displayName}`);
//     }
//     setImageUrl(url || placeholder); // fallback image URL
//   }, [folder, displayName]);

//   if (!imageUrl) return <p>Loading image...</p>;

//   return (
//     <img
//       src={imageUrl}
//       alt={alt || displayName}
//       className={className}
//       loading="lazy"
//     />
//   );
// };

// export default AssetImage;

// // import AssetImage from "./components/AssetImage";
// // const TestImage = () => {
// //   return (
// //     <>
// //       <div className="p-6 text-center">
// //         <AssetImage
// //           folder="Public"
// //           displayName="imtiase.svg"
// //           alt="ইমতিয়াসের লোগো"
// //           className="w-32 h-auto mx-auto"
// //         />
// //         <h1 className="text-2xl font-bold mt-4">স্বাগতম!</h1>
// //       </div>
// //     </>
// //   );
// // };

// // export default TestImage;

import AssetImage from "./AssetImage";

const TestImage = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Dynamic Webflow Asset Loader 🚀</h1>

      {/* Example: Fetch `logo.svg` from `Public` folder */}
      <AssetImage
        folder="Public"
        displayName="imtiase.svg"
        alt="Website Logo"
        className="w-32 h-auto"
      />

      {/* Another example: Fetch `banner.webp` from `Banners` folder */}
      <AssetImage
        folder="Public"
        displayName="imtiase.svg"
        alt="Homepage Banner"
        className="w-full h-auto rounded shadow"
      />

      {/* With fallback content */}
      <AssetImage
        folder="Public"
        displayName="imtiase.svg"
        alt="Facebook"
        fallback={<p>🔄 Loading Facebook Icon...</p>}
        className="w-6 h-6"
      />
    </div>
  );
};

export default TestImage;
