// netlify/functions/webflowProxy.js

import { WebflowClient } from "webflow-api";

export async function handler(event, context) {
  const token = process.env.WEBFLOW_API_TOKEN;

  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "WEBFLOW_API_TOKEN is not set" }),
    };
  }

  const webflow = new WebflowClient({ accessToken: token });

  try {
    const sites = await webflow.sites.list();

    return {
      statusCode: 200,
      body: JSON.stringify(sites),
    };
  } catch (err) {
    console.error("Webflow error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || "Unknown error" }),
    };
  }
}
