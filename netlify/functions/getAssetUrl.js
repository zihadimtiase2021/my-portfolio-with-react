import axios from "axios";

const SITE_ID = process.env.WEBFLOW_SITE_ID;
const API_TOKEN = process.env.ASSETS_API_TOKEN;

export async function handler(event) {
  try {
    console.log("📥 Incoming event:", event);

    const { folderName, displayName } = JSON.parse(event.body || "{}");

    console.log("🗂 Requested folder name:", folderName);
    console.log("📄 Requested display name:", displayName);

    // 1. Fetch all folders
    const folderRes = await axios.get(
      `https://api.webflow.com/v2/sites/${SITE_ID}/asset_folders`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          accept: "application/json",
        },
      }
    );

    console.log("📦 All fetched folders:", folderRes.data.assetFolders);

    // 2. Find the requested folder
    const targetFolder = folderRes.data.assetFolders.find(
      folder => folder.displayName === folderName
    );

    if (!targetFolder) {
      console.log("❌ Folder not found:", folderName);
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Folder not found" }),
      };
    }

    console.log("✅ Found target folder:", targetFolder);

    // 3. Prepare display name for comparison
    const targetName = displayName.split(".")[0]; // base name without extension
    console.log("🔍 Looking for asset with base name:", targetName);

    // 4. Loop through folder's assets
    for (const assetId of targetFolder.assets) {
      console.log("🔄 Fetching asset by ID:", assetId);

      const assetRes = await axios.get(
        `https://api.webflow.com/v2/assets/${assetId}`,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            accept: "application/json",
          },
        }
      );

      const asset = assetRes.data;
      console.log("📦 Fetched asset:", asset);

      const assetName = asset.displayName.split(".")[0];
      console.log("📛 Asset base name:", assetName);

      if (assetName === targetName) {
        console.log("✅ Match found! Returning asset:", asset);
        return {
          statusCode: 200,
          body: JSON.stringify(asset),
        };
      }
    }

    console.log("❌ Asset not found for displayName:", displayName);
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Asset not found" }),
    };
  } catch (err) {
    console.error("🔥 Error occurred:", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
