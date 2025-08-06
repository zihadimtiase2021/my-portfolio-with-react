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
