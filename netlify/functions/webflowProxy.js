import { WebflowClient } from "webflow-api";

export async function handler(event, context) {
  const token = process.env.WEBFLOW_API_TOKEN;

  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "WEBFLOW_API_TOKEN is not set in environment",
      }),
    };
  }

  try {
    const webflow = new WebflowClient({ accessToken: token });

    // Test call — list all sites
    const sites = await webflow.sites.list();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data: sites }),
    };
  } catch (error) {
    console.error("🔥 ERROR FROM SERVERLESS FUNCTION 🔥");
    console.error(error); // logs full error to Netlify Function logs

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Webflow API call failed",
        message: error.message,
        stack: error.stack,
      }),
    };
  }
}
