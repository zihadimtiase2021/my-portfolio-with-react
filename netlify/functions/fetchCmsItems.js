// netlify/functions/fetchCmsItems.js
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

  try {
    const response = await axios.get(
      `https://api.webflow.com/v2/collections/${collectionId}/items`,
      {
        headers: {
          Authorization: `Bearer 29baafbfa63ca26e262efd9b191ed8e89fa15654dbf1e712c0b636040da3a10c`,
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
