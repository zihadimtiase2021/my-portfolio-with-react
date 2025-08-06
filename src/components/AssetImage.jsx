import { useEffect, useState } from "react";

const AssetImage = ({
  folder = "Public",
  displayName,
  alt = "",
  className = "",
  loading = "lazy",
  fallback = null,
}) => {
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchAsset = async () => {
      try {
        const res = await fetch("/.netlify/functions/getAssetsUrl", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ folderName: folder, displayName }),
        });

        const data = await res.json();

        if (res.ok && !cancelled) {
          setAsset(data);
        } else {
          console.warn("❌ Asset not found:", data.error);
        }
      } catch (err) {
        console.error("❌ Error fetching asset:", err);
      }
    };

    fetchAsset();
    return () => {
      cancelled = true;
    };
  }, [folder, displayName]);

  if (!asset && fallback) return fallback;
  if (!asset) return null;

  return (
    <img
      src={asset.hostedUrl}
      alt={alt || asset.altText || displayName}
      className={className}
      loading={loading}
      data-id={asset.id}
      data-size={asset.size}
      data-type={asset.contentType}
    />
  );
};

export default AssetImage;
