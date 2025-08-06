// netlify/functions/listAssets.js

import axios from "axios";

const SITE_ID = process.env.WEBFLOW_SITE_ID;
const API_TOKEN = process.env.ASSETS_API_TOKEN;

export async function handler() {
  try {
    const folderRes = await axios.get(
      `https://api.webflow.com/v2/sites/${SITE_ID}/asset_folders`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          accept: "application/json",
        },
      }
    );

    const folders = folderRes.data.assetFolders;
    const result = {};

    for (const folder of folders) {
      result[folder.displayName] = [];

      for (const assetId of folder.assets) {
        const assetRes = await axios.get(
          `https://api.webflow.com/v2/assets/${assetId}`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              accept: "application/json",
            },
          }
        );
        result[folder.displayName].push(assetRes.data.displayName);
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result, null, 2),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
