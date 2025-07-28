// netlify/functions/fetchCmsItems.js
require("dotenv").config(); // ✅ Only needed locally

const axios = require("axios");

exports.handler = async event => {
  const { collectionId } = event.queryStringParameters;

  if (!collectionId) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Missing collectionId in query parameters.",
      }),
    };
  }

  const token = process.env.CMS_API_TOKEN; // ✅ load from env

  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Missing Webflow API token in environment variables.",
      }),
    };
  }

  try {
    const response = await axios.get(
      `https://api.webflow.com/v2/collections/${collectionId}/items`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
