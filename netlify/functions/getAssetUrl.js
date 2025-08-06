import axios from "axios";

const SITE_ID = process.env.WEBFLOW_SITE_ID;
const API_TOKEN = process.env.ASSETS_API_TOKEN;

export async function handler(event) {
  try {
    const { folderName, displayName } = JSON.parse(event.body || "{}");

    const folderRes = await axios.get(
      `https://api.webflow.com/v2/sites/${SITE_ID}/asset_folders`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          accept: "application/json",
        },
      }
    );

    const targetFolder = folderRes.data.assetFolders.find(
      folder => folder.displayName === folderName
    );

    if (!targetFolder) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Folder not found" }),
      };
    }

    const targetName = displayName.split(".")[0]; // 🔥 Extract name before extension

    for (const assetId of targetFolder.assets) {
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
      const assetName = asset.displayName.split(".")[0]; // 🔥 Match base name

      if (assetName === targetName) {
        return {
          statusCode: 200,
          body: JSON.stringify(asset),
        };
      }
    }

    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Asset not found" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
