// src/utils/getAssetByName.js
import assetsMap from "../assetsMap.json";

export const getAssetByName = displayName => {
  const asset = assetsMap[displayName];
  if (!asset) {
    console.warn("⚠️ Asset not found in map:", displayName);
  }
  return asset || null;
};
