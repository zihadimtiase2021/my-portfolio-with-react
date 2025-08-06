// import { useEffect, useState } from "react";
// import placeholder from "../assets/placeholder.gif";

// const AssetImage = ({
//   folder = "Public",
//   displayName,
//   alt = "",
//   className = "",
// }) => {
//   const [asset, setAsset] = useState("");

//   useEffect(() => {
//     const fetchAssetData = async () => {
//       try {
//         const res = await fetch("/.netlify/functions/getAssetUrl", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ folderName: folder, displayName }),
//         });

//         const data = await res.json();

//         if (res.ok && data.url) {
//           setAsset(data.url);
//         } else {
//           console.warn("❌", data.error);
//           setAsset(placeholder);
//         }
//       } catch (err) {
//         console.error("❌ Error fetching image:", err);
//         setAsset(placeholder);
//       }
//     };

//     fetchAssetData();
//   }, [folder, displayName]);

//   if (!asset) return <p>Loading image...</p>;

//   return (
//     <img
//       src={asset}
//       alt={alt || displayName}
//       className={className}
//       loading="lazy"
//     />
//   );
// };

// export default AssetImage;

// // // src/components/AssetImage.jsx

// // import assetsMap from "../assetsMap.json"; // ✅ Import generated asset map

// // const AssetImage = ({ folder = "root", name, alt = "", className = "" }) => {
// //   const asset = assetsMap?.[folder]?.[name];

// //   if (!asset) {
// //     console.warn(`❌ Image not found: [${folder}] → ${name}`);
// //     return null;
// //   }

// //   return (
// //     <img
// //       src={asset}
// //       alt={alt || name}
// //       loading="lazy"
// //       className={className}
// //     />
// //   );
// // };

// // export default AssetImage;

// // // // src/components/AssetImage.jsx

// // // import { useEffect, useState } from "react";
// // // import placeholder from "../assets/placeholder.gif"; // fallback image
// // // import assetsMap from "../assetsMap.json"; // ✅ Generated asset map

// // // const AssetImage = ({
// // //   folder = "Public", // কোন ফোল্ডারের ভিতরের ছবি
// // //   displayName, // ছবির নাম যেমন: "logo.svg"
// // //   alt = "", // alt টেক্সট
// // //   className = "", // css ক্লাস
// // // }) => {
// // //   const [asset, setAsset] = useState("");

// // //   useEffect(() => {
// // //     // ✅ assetsMap থেকে URL খুঁজে বের করছি
// // //     const url = assetsMap?.[folder]?.[displayName];

// // //     if (!url) {
// // //       console.warn(`❌ Image not found: [${folder}] → ${displayName}`);
// // //     }

// // //     // 🔁 fallback placeholder দিলে URL না পেলেও ব্রাউক হবে
// // //     setAsset(url || placeholder);
// // //   }, [folder, displayName]);

// // //   // 🕐 যদি URL লোড না হয় তবে কিছু লোডিং টেক্সট দেখাতে পারো
// // //   if (!asset) return <p>Loading image...</p>;

// // //   // ✅ ইমেজ রেন্ডার
// // //   return (
// // //     <img
// // //       src={asset}
// // //       alt={alt || displayName}
// // //       className={className}
// // //       loading="lazy"
// // //     />
// // //   );
// // // };

// // // export default AssetImage;
import { useEffect, useState } from "react";

const AssetImage = ({
  folder = "Public",
  displayName,
  alt = "",
  className = "",
}) => {
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    const fetchAssetData = async () => {
      try {
        const res = await fetch("/.netlify/functions/getAssetUrl", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ folderName: folder, displayName }),
        });

        const data = await res.json();
        console.log(data);
        if (res.ok && data) {
          setAsset(data);
        } else {
          console.warn("❌", data.error);
          setAsset(null);
        }
      } catch (err) {
        console.error("❌ Error fetching image:", err);
        setAsset(null);
      }
    };

    fetchAssetData();
  }, [folder, displayName]);

  if (!asset) return <p>Loading image...</p>;
  const { hostedUrl, altText } = asset;
  console.log(hostedUrl, altText);

  return (
    <img
      src={hostedUrl}
      alt={altText || displayName}
      className={className}
      loading="lazy"
    />
  );
};

export default AssetImage;
