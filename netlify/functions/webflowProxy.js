import { WebflowClient } from "webflow-api";

export async function handler(event, context) {
  const token = process.env.WEBFLOW_API_TOKEN;

  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "WEBFLOW_API_TOKEN is not set in env vars",
      }),
    };
  }

  const webflow = new WebflowClient({ accessToken: token });

  try {
    // Example: get list of sites
    const sites = await webflow.sites.list();

    // You can return whatever you want here, e.g. the sites data
    return {
      statusCode: 200,
      body: JSON.stringify(sites),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Unknown error" }),
    };
  }
}
